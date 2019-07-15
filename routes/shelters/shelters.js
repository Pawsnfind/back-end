const router = require('express').Router()
const Shelters = require('../../models/shelters/shelters.js')

router.get('/', (req,res) => {
    Shelters.getById(req.params.id)
    .then(shelter => {
        res.status(200).json(shelter)
    })
    .catch(error => {
        res.status(500).json({message:'could not retrieve the shelter info', error:error.toString()})
    })
})