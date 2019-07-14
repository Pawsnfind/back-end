const router = require('express').Router();
const Animals = require('../models/animals.js');
const Applications = require('../models/applications/applications.js')

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


module.exports = router;