'use strict';

const PersonRepository = require('../repositories/personRepository');

exports.get = (req, res, next) => {
    PersonRepository.getAll()
        .then((person) => {
            res.status(200).send(person);
        }).catch(err => res.status(500).send(err))
};

exports.getById = (req, res, next) => {

    PersonRepository.getById(req.params.id)
        .then((person) => {
            res.status(200).send(person);
        }).catch(err => res.status(500).send(err))
};

exports.post = (req, res, next) => {
    const p = req.body;

    PersonRepository.create(p)
        .then((person) => {
            res.status(200).send(person);
        }).catch(err => res.status(500).send(err))
};

exports.put = (req, res, next) => {
    const p = req.body;

    PersonRepository.update(req.params.id, p)
        .then((person) => {
            res.status(201).send(person);
        }).catch(err => res.status(500).send(err))
};

exports.delete = (req, res, next) => {
    PersonRepository.delete(req.params.id)
        .then((person) => {
            res.status(200).send('delete succeeded!');
        }).catch(err => console.error.bind(console, `Error ${err}`))
};