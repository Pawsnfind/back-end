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
        res.status(200).json(donation)
    })
    .catch(err => {
        res.status(500).json({ message: "Error getting donation", err: err.toString() })
    })
})

router.get('/user/:id', (req, res)=> {

    const { id } = req.params;

    Donations.getDonationsByUser(id)
    .then(donation => {
        res.status(200).json(donation)
    })
    .catch(err => {
        res.status(500).json({ message: "Error getting donation", err: err.toString() })
    })
})

router.get('/shelter/:id', (req, res)=> {

    const { id } = req.params;

    Donations.getDonationsByShelter(id)
    .then(donation => {
        res.status(200).json(donation)
    })
    .catch(err => {
        res.status(500).json({ message: "Error getting donation", err: err.toString() })
    })
})

router.post('/', (req, res) => {
    
    const { user_id, shelter_id, amount } = req.body

    Donations.addDonation({ user_id, shelter_id, amount })
    .then(donation => {
        res.status(201).json({ message: "Successfully donated", donation})
    })
    .catch(err => {
        res.status(500).json({ message: "Error donating", err: err.toString() })
    })
    
})

router.put('/:id', (req, res ) => {

    const { id } = req.params
    const { user_id, shelter_id, amount } = req.body
    
    Donations.updateDonation(id, { user_id, shelter_id, amount } )
    .then(donation => {
        res.status(200).json({ message: "Successfully updated", donation})
    })
    .catch(err => {
        res.status(500).json({ message: "Error getting updated", err: err.toString() })
    })

})

module.exports = router;