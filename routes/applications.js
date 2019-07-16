const router = require("express").Router();
const App = require("../models/applications/applications.js")
const Shelter = require("../models/shelters/shelters.js")
const User = require('../models/users/users.js')
const AppMeta = require("../models/application_meta/application_meta.js")

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

router.get('/user/:id', validateUserId, (req, res) => {
    App.getByUserId(req.params.id)
    .then(applications => {
        res.status(200).json(applications)
    })
    .catch(error => {
        res.status(500).json({ message: "Error getting applications", error: error.toString()})    })
})

router.post('/', addApplication, (req, res) => {
    const application_meta = {
        application_id : req.body.application_id,
        name : req.body.name,
        street_address : req.body.street_address,
        city : req.body.city,
        state_id : req.body.state_id,
        zip : req.body.zip,
        home_phone : req.body.home_phone,
        email : req.body.email,
        cell_phone : req.body.cell_phone,
        is_over_18 : req.body.is_over_18,
        is_homeowner : req.body.is_homeowner,
        is_in_agreement : req.body.is_in_agreement,
        is_homevisit_allowed : req.body.is_homevisit_allowed,
        is_fenced : req.body.is_fenced,
        ref_name_1 : req.body.ref_name_1,
        ref_phone_1 : req.body.ref_phone_1,
        ref_relationship_1 : req.body.ref_relationship_1,
        ref_name_2 : req.body.ref_name_2,
        ref_phone_2 : req.body.ref_phone_2,
        ref_relationship_2 : req.body.ref_relationship_2,
        is_declaration : req.body.is_declaration
    }

    AppMeta.add(application_meta)
            .then( id => {
                res.status(201).json(id)
            })
            .catch( error => {
                App.remove(req.body.application_id)
                .then( count => {
                    res.status(200).json({ message: `${count} record has been deleted`})
                })
                .catch ( error => {
                    res.status(500).json({ message: "Error deleting applications", error: error.toString()})
                })
                res.status(500).json({ message: "Error getting applications", error: error.toString()})
            })
})
/*
    if (application_meta.application_id &&
        application_meta.name &&
        application_meta.street_address &&
        application_meta.city &&
        application_meta.state_id &&
        application_meta.zip &&
        application_meta.home_phone &&
        application_meta.email &&
        application_meta.is_over_18 &&
        application_meta.is_homeowner &&
        application_meta.is_in_agreement &&
        application_meta.is_homevisit_allowed &&
        application_meta.is_fenced &&
        application_meta.ref_name_1 &&
        application_meta.ref_phone_1 &&
        application_meta.ref_relationship_1 &&
        application_meta.ref_name_2 &&
        application_meta.ref_phone_2 &&
        application_meta.ref_relationship_2 &&
        application_meta.is_declaration ) {
            AppMeta.add(application_meta)
            .then( id => {
                res.status(201).json(id)
            })
            .catch( error => {
                res.status(500).json({ message: "Error getting applications", error: error.toString()})
            })
        } else {
            res.status(400).json({message: "please enter all required META field"})
        }

    })*/



//middleware 

function addApplication(req, res, next) {
    const application = {
        animal_id : req.body.animal_id, 
        shelter_id : req.body.shelter_id,
        application_status_id : req.body.application_status_id,
        user_id : req.body.user_id
    }
    if(application.animal_id && application.shelter_id && application.application_status_id && application.user_id) {
        App.add(application)
        .then( id => {
            req.body.application_id = id[0]
            next();
        })
        .catch ( error => {
                res.status(500).json({ message: "Error getting applications", error: error.toString()})
        })
    } else {
        res.status(400).json({message: "please enter all required APPLICATION field"})
    }
    
}

function validateApplicationId(req, res, next) {
    if(req.params.id && req.params.id !== "shelter" && req.params.id !== "user") {
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
        const subRoute = req.params.id === "shelter" ? "shelter" : req.params.id === "user" ? "user" : null
        res.status(500).json({ message: `no ${subRoute} id provided`})
    }
}

function validateShelterId(req, res, next) {
    console.log(req.params.id)
    if(req.params.id) {
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
    } else {
        res.status(500).json({ message: "no shelter id", error: error.toString()})    
    }
}

function validateUserId(req, res, next) {
    if(req.params.id) {
        User.getUserById(req.params.id) 
        .then( user => {
            if(user) {
                next();
            } else {
                res.status(404).json({ message: "No user by that user id"})
            }
        })
        .catch(error => {
            res.status(500).json({ message: "Error getting valid shelter with application", error: error.toString()})    })
    }

}

module.exports = router;