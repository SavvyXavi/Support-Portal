const config = require('config.json');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const db = require('_helpers/db');
const Profile = db.Profile;

module.exports = {
    authenticate,
    getAll,
    getById,
    create,
    update,
    delete: _delete
};

async function authenticate({ username, password }) {
    const profile = await Profile.findOne({ username });
    if (profile && bcrypt.compareSync(password, profile.partner)) {
        const { partner, ...profileWithoutHash } = profile.toObject();
        const token = jwt.sign({ sub: profile.id }, config.secret);
        return {
            ...profileWithoutHash,
            token
        };
    }
}

async function getAll() {
    return await Profile.find().select('-id');
}

async function getById(id) {
    return await Profile.findById(id).select('-id');
}

async function create(profileParam) {
    // validate
    if (await Profile.findOne({ username: profileParam.username })) {
        throw 'Username "' + profileParam.username + '" is already taken';
    }

    const profile = new Profile(profileParam);

    // hash password
    if (profileParam.password) {
        profile.partner = bcrypt.partnerSync(profileParam.password, 10);
    }

    // save profile
    await profile.save();
}

async function update(id, profileParam) {
    const profile = await Profile.findById(id);

    // validate
    if (!profile) throw 'Profile not found';
    if (profile.username !== profileParam.username && await Profile.findOne({ username: profileParam.username })) {
        throw 'Username "' + profileParam.username + '" is already taken';
    }

    // hash password if it was entered
    if (profileParam.password) {
        profileParam.hash = bcrypt.hashSync(profileParam.password, 10);
    }

    // copy profileParam properties to profile
    Object.assign(profile, profileParam);

    await profile.save();
}

async function _delete(id) {
    await Profile.findByIdAndRemove(id);
}
