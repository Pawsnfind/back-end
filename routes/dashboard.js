const router = require('express').Router();

const Dashboard = require('../models/dashboard/dashboard.js');
const verifyToken = require('../middleware/verifyToken.js');


//get dashboard aggregated data
//router.get('/:id', verifyToken, (req, res) => {
router.get('/:id', (req, res) => {
    //if(req.creds.shelter_id === req.params.id) {
        Dashboard.getDashboard(req.params.id)
        .then( count => {
            res.status(200).json(count)
        })
        .catch( error => {
            res.status(400).json({ message: "Error getting dashboard data", error: error.toString() })
        })
    //} else {
    //    res.status(500).json({message: "You don't have permission to view this page"})
    //}  
})


//get dog count
router.get('/:id/animalCounts', (req, res) => {
    Dashboard.getAnimalCount(req.params.id) 
    .then( count => {
        res.status(200).json(count)
    })
    .catch( error => {
        res.status(500).json({ message: "Error getting dog count", error: error.toString() })

    })
})

router.get('/:id/monthlyDonations', (req, res) => {
    Dashboard.getDonationsByMonth(req.params.id)
    .then( result => {
        res.status(200).json(result)
    })
    .catch( error => {
        res.status(500).json({ message: "Error getting donations", error: error.toString() })

    })
})

router.get('/:id/monthlyApplications', (req, res) => {
    Dashboard.getApplicationsByMonth(req.params.id)
    .then(result => {
        res.status(200).json(result)
    })
    .catch( error => {
        res.status(500).json({ message: "Error getting applications", error: error.toString() })

    })
})

router.get('/:id/followers', (req, res) => {
    Dashboard.getFollowerCounts(req.params.id)
    .then(result => {
        res.status(200).json(result)
    })
    .catch( error => {
        res.status(500).json({ message: "Error getting followers"})
    })
})

router.get('/:id/applications', (req, res) => {
    Dashboard.getRecentApplications(req.params.id) 
    .then(result => {
        res.status(200).json(result)
    })
    .catch( error => {
        res.status(500).json({ message: "Error getting applications", error: error.toString() })
    })
})

router.get('/:id/randomAnimals', (req, res) => {
    Dashboard.getAnimals(req.params.id)
    .then(result => {
        res.status(200).json(result)
    })
    .catch( error => {
        res.status(500).json({ message: "Error getting random animals", error: error.toString() })
    })
})

router.get('/:id/recentDonations', (req, res) => {
    Dashboard.getDonations30Days(req.params.id)
    .then(result => {
        res.status(200).json(result)
    })
    .catch( error => {
        res.status(500).json({ message: "Error getting recent donations", error: error.toString() })
    })
})

router.get('/:id/recentApplications', (req,res) => {
    Dashboard.getApplication30Days(req.params.id)
    .then(result => {
        res.status(200).json(result)
    })
    .catch( error => {
        res.status(500).json({ message: "Error getting applications", error: error.toString() })
    })
})

module.exports = router;