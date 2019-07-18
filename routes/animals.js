const router = require("express").Router();
const Animals = require('../models/animals/animals.js');
const AnimalMeta = require('../models/animal_meta/animal_meta.js');
const AnimalFollows = require('../models/animal_follows/animal_follows.js')
const AnimalAdmin = require('../models/animal_admin/animal_admin.js')



// gets all animals
router.get('/', (req, res) => {
    Animals.getAll()
    .then( animals => {
        res.status(200).json(animals)
    })
    .catch( error => {
        res.status(500).json({ message: "Error getting animals", error: error.toString()})
    })
})

// gets specific animal by ID
router.get('/:id', (req, res) => {
    Animals.getById(req.params.id)
    .then(animal => {
        if (animal) {
            res.status(200).json(animal);
        } else {
            res.status(404).json({ message: `Animal with ID ${req.params.id} does not exist`})
        }
    })
    .catch(error => {
        res.status(500).json(error);
    })
})

// gets meta information by animal ID
router.get('/:id/meta', (req, res) => {
    Animals.getAnimalMetaById(req.params.id)
    .then(animal => {
        if (animal) {
            res.status(200).json(animal);
        } else {
            res.status(404).json({ message: `Animal with ID ${req.params.id} does not exist`})
        }
    })
    .catch(error => {
        res.status(500).json({ message: 'Error getting animal meta', error: error.toString()})
    })
})

// gets all followers of the animal by animal ID
router.get('/:id/follows', (req, res) => {
    Animals.getAnimalFollowsById(req.params.id)
    .then(follows => {
        res.status(200).json(follows)
    })
    .catch(error => {
        res.status(500).json({message: `Error getting followers of animal with ID ${req.params.id}`})
    })
})

// gets all the notes of the animal by ID
router.get('/:id/notes', (req, res) => {
    Animals.getNotesByAnimalId(req.params.id)
    .then(animal => {
        res.status(200).json(animal)
    })
    .catch(error => {
        res.status(500).json({message: `Error getting notes of animal with ID ${req.params.id}`})
    })
})

//gets all animals of a specific shelter by shelter ID
router.get('/shelter/:id', (req, res) => {
    Animals.getAnimalsByShelterId(req.params.id)
    .then(animals => {
        res.status(200).json(animals)
    })
    .catch(error => {
        res.status(500).json({message: `Error getting animals of the shelter with ID ${req.params.shelterId}`})
    })
})


//get specific animal meta info by meta id
router.get('/meta/:id', (req, res) => {
    AnimalMeta.getById(req.params.id)
    .then(animal => {
        res.status(200).json(animal)
    })
    .catch(error => {
        res.status(500).json({message: `Error getting animal with ID ${req.params.id} `})
    })
})

//get followers of animal by animal id
router.get('/:id/follows', (req, res) => {
    AnimalFollows.getByAnimalId(req.params.id)
    .then(follows => {
        res.status(200).json(follows)
    })
    .catch(error => {
        res.status(500).json({message: `Error getting followers of animal with Id ${req.params.id}`})
    })
})

//get follower of an animal by animal id and the user by user id
router.get('/follows/:animalId/:userId', (req, res) => {
    AnimalFollows.getByIds(req.params.animalId, req.params.userId)
    .then(follows => {
        res.status(200).json(follows)
    })
    .catch(error => {
        res.status(500).json({message: `Error getting user ${req.params.userId} following animal with id ${req.params.animalId}`})
    })
})

//get animal admin by Id
router.get('/admin/:id', (req, res) => {
    AnimalAdmin.getById(req.params.id)
    .then(admin => {
        res.status(200).json(admin)
    })
    .catch(error => {
        res.status(500).json({message: `Error getting animal admin with id ${req.params.id}`})
    })
})

//get animal admin notes of a specific animal using animal id
router.get('/:id/admin', (req, res) => {
    AnimalAdmin.getNotesByAnimalId(req.params.id)
    .then(notes=> {
        res.status(200).json(notes)
    })
    .catch(error => {
        res.status(500).json({message: `Error getting notes of animal with id ${req.params.id}`})
    })
})

//Post animal admin notes
router.post('/:id/admin', (req, res) => {
    Animals.getById(req.params.id)
        .then(animal => {
            if(animal.id) {
                const adminNote = {
                    notes: req.body.notes,
                    animal_id: req.body.animal_id,
                    shelter_user_id: req.body.shelter_user_id
                }
                AnimalAdmin.add(adminNote)
                .then(id => {
                    res.status(200).json(id)
                })
                .catch(error => {
                    res.status(500).json({message: 'Error adding admin note', error: error.toString() })
                })
            } else {
                res.status(404).json({message: 'Animal with that Id does not exist'})
            }
        })
        .catch(error => {
            res.status(500).json({message: 'Error', error: error.toString() })
        })
})

//Delete animal admin notes
router.delete('/:id/admin/:adminId', (req, res) => {
    Animals.getById(req.params.id)
        .then(animal => {
            if(animal.id) {
                AnimalAdmin.remove(req.params.adminId)
                .then(count => {
                    if(count > 0) {
                        res.status(200).json({message: `Admin note with Id ${req.params.id} has been deleted`})
                    } else {
                        res.status(404).json({message: `Admin note with Id ${req.params.id} does not exist`})
                    }
                })
                .catch (error => {
                    res.status(500).json({message: `Error deleting admin note with Id ${req.params.id}`, error: error.toString() })
                })
            } else {
                res.status(400).json({message: 'Animal with that Id is not found'})
            }
        })
        .catch(error => {
            res.status(500).json({message: 'Error deleting admin note'})
        })
})

//Update animal admin note
router.put('/:id/admin/:adminId', (req, res) => {
    Animals.getById(req.params.id)
        .then(animal => {
            if(animal.id) {
                const adminNote = {
                    notes: req.body.notes,
                    animal_id: req.body.animal_id,
                    shelter_user_id: req.body.shelter_user_id
                }
                AnimalAdmin.update(req.params.adminId, adminNote)
                .then(updated => {
                    res.status(200).json(updated)
                })
                .catch(error => {
                    res.status(500).json({message: 'Error updating admin note', error: error.toString() })
                })
            } else {
                res.status(404).json({message: 'Admin note with that Id does not exist'})
            }
        })
        .catch(error => {
            res.status(500).json({message: 'Error updating admin note', error: error.toString() })
        })
})

//Delete Route
//This will delete animal from the animals table after going through middleware to find a match and deleting from animal meta table first.
router.delete('/:id/meta/:metaId', getMatch, deleteAnimal, (req, res) => {
    Animals.remove(req.params.id)
        .then(count => {
            if(count > 0) {
                res.status(200).json({ message: 'deleted'})
                next()
            } else {
                res.status(400).json({message: "animal with the ID is not found"})
            }
        })
        .catch (error => {
            res.status(500).json({message: 'Error deleting animal', error: error.toString()})
        })
})

//Middleware to verify that there is animalId and metaId match
function getMatch (req, res, next) {
    Animals.findMatch(req.params.id, req.params.metaId)
    .then(match => {
        if(match) {
            next()
        } else {
            res.status(404).json({message: 'No match found'})
        }
    })
    .catch (error => {
        res.status(500).json({message: "Error accessing database", error: error.toString()})
    })
}

//Middleware to delete animal
//this will verify if the animal id exists and if it does, it will remove the animal from the animal meta table
function deleteAnimal (req, res, next) {
    Animals.getById(req.params.id)
        .then(animal => {
            if (animal) {
                AnimalMeta.remove(req.params.metaId)
                .then (count => {
                    if(count > 0) {
                        res.status(200).json({ message: 'deleted'})
                        next()
                    } else {
                        res.status(400).json({message: "animal with the ID is not found"})
                    }
                })
            } else {
                res.status(404).json ({ message: 'Animal does not exist'})
            }
        })
        .catch (error => {
            res.status(500).json({message: "Error deleting animal", error: error.toString()})
        })
}

//update animal 
//after middleware, it will then update the animal meta table
router.put('/:id/meta/:metaId', updateAnimal, (req, res) => {
    const animal_meta = {
        animal_id : req.body.animal_id,
        breed_id : req.body.breed_id,
        is_mixed : req.body.is_mixed,
        age_id : req.body.age_id,
        health : req.body.health,
        size_id : req.body.size_id,
        color : req.body.color,
        coat_length_id : req.body.coat_length_id,
        is_male : req.body.is_male,
        is_house_trained : req.body.is_house_trained,
        is_neutered_spayed : req.body.is_neutered_spayed,
        is_good_with_kids : req.body.is_good_with_kids,
        is_good_with_dogs : req.body.is_good_with_dogs,
        is_good_with_cats : req.body.is_good_with_cats,
        is_vaccinated : req.body.is_vaccinated,
        description : req.body.description
    }
    AnimalMeta.update(req.params.metaId, animal_meta)
    .then(updated => {
        console.log('animals meta update ', updated)
        res.status(200).json({updated})
    })
    .catch(error => {
        res.status(500).json({message: "Error updating animal meta", error: error.toString()})
    })
})

//middleware for update animal
//this will update the animals table first before getting to the Animal Meta table to update
function updateAnimal (req, res, next) {
    const animal = {
        name : req.body.name, 
        shelter_id : req.body.shelter_id,
        species_id : req.body.species_id,
        animal_status_id : req.body.animal_status_id,
        shelter_location_id : req.body.shelter_location_id,
        profile_img_id : req.body.profile_img_id
    }
    Animals.update(req.params.id, animal)
        .then (updated => {
            console.log('animals update ', updated)
            res.status(200).json({updated})

        })
        .catch(error => {
            res.status(500).json({message: "Error updating animal", error: error.toString()})
        })
}

//Post animal
//After going through middleware, it will check if all required fields are given and add the animal info to the animal meta table
router.post('/', addAnimal, (req, res) => {
    const animal_meta = {
        animal_id : req.body.animal_id,
        breed_id : req.body.breed_id,
        is_mixed : req.body.is_mixed,
        age_id : req.body.age_id,
        health : req.body.health,
        size_id : req.body.size_id,
        color : req.body.color,
        coat_length_id : req.body.coat_length_id,
        is_male : req.body.is_male,
        is_house_trained : req.body.is_house_trained,
        is_neutered_spayed : req.body.is_neutered_spayed,
        is_good_with_kids : req.body.is_good_with_kids,
        is_good_with_dogs : req.body.is_good_with_dogs,
        is_good_with_cats : req.body.is_good_with_cats,
        is_vaccinated : req.body.is_vaccinated,
        description : req.body.description
    }
    if  (req.body.animal_id &&
        req.body.breed_id &&
        req.body.is_mixed &&
        req.body.age_id &&
        req.body.health &&
        req.body.size_id &&
        req.body.color &&
        req.body.coat_length_id &&
        req.body.is_male &&
        req.body.is_house_trained &&
        req.body.is_neutered_spayed &&
        req.body.is_good_with_kids &&
        req.body.is_good_with_dogs &&
        req.body.is_good_with_cats &&
        req.body.is_vaccinated &&
        req.body.description ) {
            AnimalMeta.add(animal_meta)
            .then( id => {
                res.status(201).json(id)
            })
            .catch( error => {
                Animals.remove(req.body.animal_id)
                .then( count => {
                    res.status(200).json({ message: `${count} record has been deleted`})
                })
                .catch ( error => {
                    res.status(500).json({ message: "Error deleting animal", error: error.toString()})
                })
                res.status(500).json({ message: "Error adding animal", error: error.toString()})
            })
        } else {
            res.status(400).json({message: "please enter all required animal meta field"})
        }
})

//middleware to add animal
//It will check if all required fields are given and if it is will add the animal to the Animals table
function addAnimal(req, res, next) {
    const animal = {
        name : req.body.name, 
        shelter_id : req.body.shelter_id,
        species_id : req.body.species_id,
        animal_status_id : req.body.animal_status_id,
        shelter_location_id : req.body.shelter_location_id,
        profile_img_id : req.body.profile_img_id
    }
    if(animal.name && 
        animal.shelter_id && 
        animal.species_id && 
        animal.animal_status_id && 
        animal.shelter_location_id && 
        animal.profile_img_id) {
            Animals.add(animal)
            .then( id => {
                req.body.animal_id = id[0]
                next();
            })
            .catch ( error => {
                res.status(500).json({ message: "Error adding animal", error: error.toString()})
            })
        } else {
            res.status(400).json({message: "add animal: please enter all required animal field"})
        }
}

module.exports = router;