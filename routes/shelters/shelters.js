const router = require('express').Router()
const Shelters = require('../../models/shelters/shelters.js')

//get route to get the shelter name including the shelter contact, shelter location and 
//the contact for that location, shelter followers
router.get('/info/:id', (req,res) => {
    Shelters.getById(req.params.id)
    .then(shelter => {
        res.status(200).json(shelter)
    })
    .catch(error => {
        res.status(500).json({message:'could not retrieve the shelter info', error:error.toString()})
    })
})

module.exports = router;