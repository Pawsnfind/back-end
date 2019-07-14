const router = require('express').Router();
const Animals = require('../models/animals.js');
const Applications = require('../models/applications/applications.js')
const ApplicationAdmin = require('../models/application_admin/application_admin.js')
router.get('/', (req, res) => {
    Animals.getAll()
    .then( animals => {
        res.status(200).json(animals)
    })
    .catch( error => {
        res.status(500).json({ message: "Error getting animals", error: error.toString()})
    })
})

router.get('/applications/:id', (req, res) => {
    Applications.getById(req.params.id)
    .then( application => {
        res.status(200).json(application)

    })
    .catch( error => {
        res.status(500).json({ message: "Error getting animals", error: error.toString()})

    })
})

router.get('/applications/user/:id', (req, res) => {
    Application.getByUserId(req.params.id)
    .then( applications => {
        res.status(200).json(applications)

    })
    .catch( error => {
        res.status(500).json({ message: "Error getting animals", error: error.toString()})

    })
})

router.get('/applications/shelter/:id', (req, res) => {
    Applications.getByShelterId(req.params.id)
    .then( applications => {
        res.status(200).json(applications)
    })
    .catch( error => {
        res.status(500).json({ message: "Error getting animals", error: error.toString()})

    })
})

router.get('/applications/animal/:id', (req, res) => {
    Applications.getByAnimalId(req.params.id)
    .then( applications => {
        res.status(200).json(applications)
    })
    .catch( error => {
        res.status(500).json({ message: "Error getting animals", error: error.toString()})

    })
})

router.get('/applications/:id/notes', (req, res) => {
    ApplicationAdmin.getByApplicationId(req.params.id)
    .then( notes => {
        res.status(200).json(notes)
    })
    .catch( error => {
        res.status(500).json({ message: "Error getting animals", error: error.toString()})

    })
})


module.exports = router;