export const express = require('express');
const router = express.Router();
const profileService = require('./profile.service');

// routes
router.post('/authenticate', authenticate);
router.post('/register', register);
router.get('/', getAll);
router.get('/current', getCurrent);
router.get('/:id', getById);
router.put('/:id', update);
router.delete('/:id', _delete);

module.exports = router;

function authenticate(req, res, next) {
    profileService.authenticate(req.body)
        .then(profile => profile ? res.json(profile) : res.status(400).json({ message: 'Username or password is incorrect' }))
        .catch(err => next(err));
}

function register(req, res, next) {
    profileService.create(req.body)
        .then(() => res.json({}))
        .catch(err => next(err));
}

function getAll(req, res, next) {
    profileService.getAll()
        .then(profile => res.json(profile))
        .catch(err => next(err));
}

function getCurrent(req, res, next) {
    profileService.getById(req.profile.sub)
        .then(profile => profile ? res.json(profile) : res.sendStatus(404))
        .catch(err => next(err));
}

function getById(req, res, next) {
    profileService.getById(req.params.id)
        .then(profile => profile ? res.json(profile) : res.sendStatus(404))
        .catch(err => next(err));
}

function update(req, res, next) {
    profileService.update(req.params.id, req.body)
        .then(() => res.json({}))
        .catch(err => next(err));
}

function _delete(req, res, next) {
   profileService.delete(req.params.id)
        .then(() => res.json({}))
        .catch(err => next(err));
}
