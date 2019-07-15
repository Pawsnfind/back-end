const router = require('express').Router();
const Animals = require('../models/animals/animals.js');
const AnimalFollows = require('../models/animal_follows/animal_follows.js');


router.get('/', (req, res) => {
    Animals.getAll()
    .then( animals => {
        res.status(200).json(animals)
    })
    .catch( error => {
        res.status(500).json({ message: "Error getting animals", error: error.toString()})
    })
})

router.get('/:id', (req, res) => {
    Animals.getById(req.params.id)
    .then(animal => {
        res.status(200).json(animal)

    })
    .catch( error => {
        res.status(500).json({ message: "Error getting animals", error: error.toString()})

    })
})

router.get('/getFollows/animal/:id', (req, res) => {
    AnimalFollows.getByAnimalId(req.params.id)
    .then(follows => {
        res.status(200).json(follows)

    })
    .catch (error => {
        res.status(500).json({ message: "Error getting animals", error: error.toString()})

    })
})

router.get('/getFollows/:animal/:user', (req, res) => {
    AnimalFollows.getByIds(req.params.animal, req.params.user)
    .then(follow => {
        res.status(200).json(follow)
    })
    .catch (error => {
        res.status(500).json({ message: "Error getting animal follow match", error: error.toString()})

    })
})

router.get('/shelter/:id', (req, res) => {
    Animals.getAnimalsByShelterId(req.params.id)
    .then(animals => {
        res.status(200).json(animals)
    })
    .catch (error => {
        res.status(500).json({ message: "Error getting animal follow match", error: error.toString()})

    })
})


module.exports = router;