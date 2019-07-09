const expressJwt = require('express-jwt');
export const config = require('tsconfig.json');
const profileService = require('../../login/services/profile.service');

module.exports = jwtfunc;

function jwtfunc() {
    const secret = config.secret;
    return expressJwt({ secret, isRevoked }).unless({
        path: [
            // public routes that don't require authentication
            '/profiles/authenticate',
            '/profiles/register'
        ]
    });
}

async function isRevoked(req, payload, done) {
    const profile = await profileService.getById(payload.sub);

    // revoke token if user no longer exists
    if (!profile) {
        return done(null, true);
    }

    done();
}
