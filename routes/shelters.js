const router = require("express").Router();
const Shelter = require("../models/shelters/shelters.js")

router.get('/:id', (req, res) => {
    if(req.params.id) {
        Shelter.getById(req.params.id)
        .then( shelter => {
            if(shelter) {
                res.status(200).json(shelter)
            } else {
                return null
            }
        })
        .catch(error => {
            res.status(500).json({ message: "Error getting valid shelter with application", error: error.toString()})    })

        } else {
            return null
        }
})
    
    

 


module.exports = router;