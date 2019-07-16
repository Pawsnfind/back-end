const router = require("express").Router();
const App = require("../models/applications/applications.js")
const Shelter = require("../models/shelters/shelters.js")

router.get('/', (req, res) => {
    App.getAll()
    .then(applications => {
        res.status(200).json(applications)
    })
    .catch(error => {
        res.status(500).json({ message: "Error getting applications", error: error.toString()})    })
})

router.get('/:id', validateApplicationId, (req, res) => {

   res.status(200).json(req.application)

})

router.get('/shelter/:id', validateShelterId ,(req, res) => {
    App.getByShelterId(req.params.id)
    .then(applications => {
        res.status(200).json(applications)

    })
    .catch(error => {
        res.status(500).json({ message: "Error getting applications", error: error.toString()})    })
})


//middleware 

function validateApplicationId(req, res, next) {
    if(req.params.id) {
        App.getById(req.params.id) 
        .then( application => {
            if(application) {
                req.application = application
                next();
            } else {
                res.status(404).json({message: "Application not found"})
            }
        })
    } else {
        res.status(500).json({ message: "no application id provided"})
    }
}

function validateShelterId(req, res, next) {
    if(req.params.id)
    Shelter.getById(req.params.id)
    .then( shelter => {
        if(shelter) {
            next();
        } else {
            res.status(404).json({ message: "No shelter by that  shelter id"})
        }
    })
    .catch(error => {
        res.status(500).json({ message: "Error getting valid shelter with application", error: error.toString()})    })
}



module.exports = router;