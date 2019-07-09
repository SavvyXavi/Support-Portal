import { Role } from '../../types/role.enum';
import { Partner } from '../../types/partner.enum';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    id: { type: String, unique: true, required: true },
    username: { type: String, unique: true, required: true },
    password: { type: String, required: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, unique: true, required: true },
    token: { type: String, unique: true, required: true},
    partner: { type: Partner, required: true },
    partnerRole: {type: Role, required: true }
     // createdDate: { type: Date, default: Date.now }
});

schema.set('toJSON', { virtuals: true });

module.exports = mongoose.model('Profile', schema);
