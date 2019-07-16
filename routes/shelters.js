const router = require("express").Router();

const Shelters = require('../models/shelters/shelters.js')
const ShelterContacts = require('../models/shelter_contacts/shelter_contacts.js')
const ShelterLocation = require('../models/shelter_locations/shelter_locations.js')
const ShelterUsers = require('../models/shelter_users/shelter_users.js')
const ShelterFollows = require('../models/shelter_follows/shelter_follows.js')

//get route to get the shelter name including the shelter contact, shelter location and 
//the contact for that location, shelter followers
router.get('/:id', (req, res) => {
    Shelters.getById(req.params.id)
        .then(shelter => {
            res.status(200).json(shelter)
        })
        .catch(error => {
            res.status(500).json({ message: 'could not retrieve the shelter info', error: error.toString() })
        })
})

//get all shelters
router.get('/', (req, res) => {
    Shelters.getAllShelters()
        .then(shelters => {
            res.status(200).json(shelters)
        })
        .catch(error => {
            res.status(500).json({ message: 'could not retrieve all the shelters', error: error.toString() })
        })
})

//get all shelter contacts
router.get('/:id/contacts', (req, res) => {
    ShelterContacts.getContactByShelterId(req.params.id)
        .then(contacts => {
            res.status(200).json(contacts)
        })
        .catch(error => {
            res.status(500).json({ message: 'could not retrieve the shelter contacts', error: error.toString() })
        })
})

//get shelter contact by id
router.get('/contacts/:id', (req, res) => {
    ShelterContacts.getByShelterContactId(req.params.id)
        .then(contact => {
            res.status(200).json(contact)
        })
        .catch(error => {
            res.status(500).json({ message: `could not retrieve the shelter contact id ${req.params.contactId} error:${error.toString()}` })
        })
})

//get all shelter locations
router.get('/:id/locations', (req, res) => {
    ShelterLocation.getLocationByShelterId(req.params.id)
        .then(locations => {
            res.status(200).json(locations)
        })
        .catch(error => {
            res.status(500).json({ message: 'could not retrieve the locations of the shelters', error: error.toString() })
        })
})

//get shelter location by id
router.get('/locations/:id', (req, res) => {
    ShelterLocation.getByShelterLocationId(req.params.id)
        .then(location => {
            res.status(200).json(location)
        })
        .catch(error => {
            res.status(500).json({ message: `could not retrieve the shelter contact id ${req.params.locationId} error:${error.toString()}` })
        })
})

//get all a specific shelter user based on their role id
router.get('/:id/users', (req, res) => {
    ShelterUsers.getUsersByShelterId(req.params.id)
        .then(users => {
            res.status(200).json(users)
        })
        .catch(error => {
            res.status(500).json({ message: 'could not get the user in the shelter', error: error.toString() })
        })
})

//get the match for a shelter users who follows the shelter 
router.get('/follows/:shelterId/:userId', (req, res) => {
    ShelterFollows.getFollowsByIds(req.params.shelterId, req.params.userId)
        .then(follows => {
            res.status(200).json(follows)
        })
        .catch(error => {
            res.status(500)
                .json({ message: `could not get the follows for shelter ${req.params.shelterId} error: ${error.toString()}` })
        })
})

//get the match for all the users who follows a specific shelter
router.get('/:id/follows', (req, res) => {
    ShelterFollows.getUsersByShelterId(req.params.id)
        .then(follows => {
            res.status(200).json(follows)
        })
        .catch(error => {
            res.status(500)
                .json({ message: `could not get the shelters followed by users ${req.params.shelterId} error:${error.toString()}` })
        })
})


//add a shelter location for a specific shelter
router.post('/:id/location', (req, res) => {

    Shelters.getById(req.params.id)

        .then(shelter => {
            console.log('shelter record ', shelter)

            if (shelter.id) {
                const shelterLoc = {
                    shelter_id: req.params.id,
                    nickname: req.body.nickname,
                    street_address: req.body.street_address,
                    city: req.body.city,
                    state_id: req.body.state_id,
                    zipcode: req.body.zipcode,
                    phone_number: req.body.phone_number,
                    shelter_contact_id: req.body.shelter_contact_id
                }

                ShelterLocation.addShelterLocations(shelterLoc)
                    .then(id => {
                        console.log('shelter location ', id)
                        res.status(200).json(id)
                    })
                    .catch(error => {
                        res.status(500).json({ message: "Error adding shelter location", error: error.toString() })
                    })

            }

            else {
                res.status(404).json({ message: "Not able to add a new shelter location", error: error.toString() })
            }

        })

        .catch(error => {
            res.status(500).json({ message: 'add route: shelter id does not exist', error: error.toString() })
        })

})

//update a shelter location for a shelter
router.put('/:id/location/:locationId', (req,res) => {
    Shelters.getById(req.params.id)
    .then(shelter => {
        if(shelter.id){
            const shelterLoc = {
                shelter_id: req.params.id,
                nickname: req.body.nickname,
                street_address: req.body.street_address,
                city: req.body.city,
                state_id: req.body.state_id,
                zipcode: req.body.zipcode,
                phone_number: req.body.phone_number,
                shelter_contact_id: req.body.shelter_contact_id
            }

            ShelterLocation.updateShelterLocations(req.params.locationId,shelterLoc)
            .then(id => {
                console.log('updated shelter location ', id)
                res.status(200).json(id)
            })
            .catch(error => {
                res.status(500).json({ message: "Error updating shelter location", error: error.toString() })
            })
        }
    })
    .catch(error => {
            res.status(500).json({ message: 'update route: shelter id does not exist', error: error.toString() })
        })
})

//delete the location for a specific shelter
router.delete('/:id/location/:locationId', (req,res) => {
    Shelters.getById(req.params.id)
    .then(shelter => {
        if(shelter.id){
        ShelterLocation.deleteShelterLocations(req.params.locationId)
        .then(count => {
            if(count > 0) {
                res.status(200).json({ message: `${count} record has been deleted`})
            }
            else {
                res.status(404).json({ message: 'location id does not exist'})

            }
        })
        .catch(error => {
            res.status(500).json({ message: 'delete route: error', error: error.toString() })
        })
    }

    })
    .catch(error => {
        res.status(500).json({ message: 'delete route: shelter id does not exist', error: error.toString() })
    })
})


    module.exports = router;