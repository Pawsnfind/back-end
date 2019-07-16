const router = require("express").Router();

const Shelters = require('../models/shelters/shelters.js')
const ShelterContacts = require('../models/shelter_contacts/shelter_contacts.js')
const ShelterLocation = require('../models/shelter_locations/shelter_locations.js')
const ShelterUsers = require('../models/shelter_users/shelter_users.js')
const ShelterFollows = require('../models/shelter_follows/shelter_follows.js')

//get route to get the shelter name including the shelter contact, shelter location and 
//the contact for that location, shelter followers
router.get('/:id', (req,res) => {
    Shelters.getById(req.params.id)
    .then(shelter => {
        res.status(200).json(shelter)
    })
    .catch(error => {
        res.status(500).json({message:'could not retrieve the shelter info', error:error.toString()})
    })
})

//get all shelters
router.get('/', (req,res) => {
    Shelters.getAllShelters()
    .then(shelters => {
        res.status(200).json(shelters)
    })
    .catch(error => {
        res.status(500).json({message:'could not retrieve all the shelters', error:error.toString()})
    })
})

//get all shelter contacts
router.get('/:id/contacts',(req,res) => {
    ShelterContacts.getAllShelterContacts()
    .then(contacts => {
        res.status(200).json(contacts)
    })
    .catch(error => {
        res.status(500).json({message:'could not retrieve the shelter contacts', error:error.toString()})
    })
})

//get shelter contact by id
router.get('/contacts/:id', (req,res) => {
    ShelterContacts.getByShelterContactId(req.params.id)
    .then(contact => {
        res.status(200).json(contact)
    })
    .catch(error => {
        res.status(500).json({message:`could not retrieve the shelter contact id ${req.params.contactId} error:${error.toString()}`})
    })
})

//get all shelter locations
router.get('/:id/locations', (req,res) => {
    ShelterLocation.getAllShelterLocations()
    .then(locations => {
        res.status(200).json(locations)
    })
    .catch(error => {
        res.status(500).json({message:'could not retrieve the locations of the shelters',error:error.toString()})
    })
})

//get shelter location by id
router.get('/locations/:id', (req,res) => {
    ShelterLocation.getByShelterLocationId(req.params.id)
    .then(location => {
        res.status(200).json(location)
    })
    .catch(error => {
        res.status(500).json({message:`could not retrieve the shelter contact id ${req.params.locationId} error:${error.toString()}`})
    })
})

//get all a specific shelter user based on their role id
router.get(':id/users', (req,res) => {
    ShelterUsers.getByShelterRoleId(req.params.shelterId,req.params.roleId)
    .then(users => {
        res.status(200).json(users)
    })
    .catch(error => {
        res.status(500).json({message:'could not get the user in the shelter',error:error.toString()})
    })
})

//get the match for a shelter users who follows the shelter 
router.get('/follows/:shelterId/:userId', (req,res) => {
    ShelterFollows.getFollowsByIds(req.params.shelterId,req.params.userId)
    .then(follows => {
        res.status(200).json(follows)
    })
    .catch(error => {
        res.status(500)
        .json({message:`could not get the follows for shelter ${req.params.shelterId} error: ${error.toString()}` })
    })
})

//get the match for all the users who follows a specific shelter
router.get('/:id/follows', (req,res) => {
    ShelterFollows.getByShelterId(req.params.id)
    .then(follows => {
        res.status(200).json(follows)
    })
    .catch(error => {
        res.status(500)
        .json({message:`could not get the shelters followed by users ${req.params.shelterId} error:${error.toString()}`})
    })
})


module.exports = router;