const router = require("express").Router();
const Donations = require('../models/donations/donations.js')

router.get('/', (req, res) => {
    Donations.getAllDonations()
    .then(donations => {
        res.status(200).json(donations)
    })
    .catch(err => {
        res.status(500).json({ message: "Error getting donations", err: err.toString()})
    })
})

router.get('/:id', (req, res)=> {

    const { id } = req.params;
        Donations.getDonationbyId(id)
        .then(donation => {
            if (req.params.id){
            res.status(200).json(donation)
            } else { 
                res.status(404).json({ message:'id cannot be found '})
            }
        })
        .catch(err => {
            res.status(500).json({ message: "Error getting donation", err: err.toString() })
        })
    
})

router.get('/:id/user', (req, res)=> {

    const { id } = req.params;

    Donations.getDonationsByUser(id)
    .then(donation => {
        if (req.params.id){
            res.status(200).json(donation)
            } else { 
                res.status(404).json({ message:'id cannot be found '})
            }
    })
    .catch(err => {
        res.status(500).json({ message: "Error getting donation", err: err.toString() })
    })
})

router.get('/:id/shelter', (req, res)=> {

    const { id } = req.params;

    Donations.getDonationsByShelter(id)
    .then(donation => {
        if (req.params.id){
            res.status(200).json(donation)
            } else { 
                res.status(404).json({ message:'id cannot be found '})
            }
    })
    .catch(err => {
        res.status(500).json({ message: "Error getting donation", err: err.toString() })
    })
})

router.post('/', (req, res) => {
    
    const { user_id, shelter_id, amount } = req.body

    if( req.body.user_id && req.body.shelter_id && req.body.amount){

        Donations.addDonation({ user_id, shelter_id, amount })
        .then(donation => {
            res.status(201).json({ message: "Successfully donated", donation})
        })
        .catch(err => {
            res.status(500).json({ message: "Error donating", err: err.toString() })
        })    
    } else {
        res.status(400).json({ message: 'Required fields are incomplete' })
    }
})

router.put('/:id', (req, res ) => {

    const { id } = req.params
    const { user_id, shelter_id, amount } = req.body
    
    Donations.updateDonation(id, { user_id, shelter_id, amount } )
    .then(donation => {
        if (req.params.id){
        res.status(200).json({ message: "Successfully updated", donation})
        } else {
            res.status(404).json({ message: "id cannot be found"})
        }
    })
    .catch(err => {
        res.status(500).json({ message: "Error getting updated", err: err.toString() })
    })

})

module.exports = router;