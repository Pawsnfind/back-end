const db = require('../../data/dbConfig.js')
module.exports = {
    getAllShelters,
    searchShelter,
    getById,
    addShelter,
    updateShelter,
    deleteShelter,
}

//get all the info from shelters table
function getAllShelters() {
    return db('shelters')
}


//search the shelter table
function searchShelter(filter) {
    return db('shelters')
        .where(filter)
}


//get shelter name, location and contact

function getById(id) {
    let query = db
        .select('shelters.id','shelters.shelter', 'shelter_contacts.name','shelter_contacts.email','shelter_contacts.phone')
        .from('shelters')
        .innerJoin('shelter_contacts', 'shelters.shelter_contact_id', 'shelter_contacts.id')


    if (id) {
        query.where('shelters.id', id).first()
        const promises = [query, getShelterLocation(id), getShelterFollows(id),getContactByShelterId(id)]
        return Promise.all(promises)
            .then(results => {
                let [shelter, location, follows, contacts] = results;

                if (shelter) {
                    shelter.location = location
                    shelter.follows = follows
                    shelter.contacts = contacts
                    return shelter
                }
                else {
                    return null
                }
            })
    }
    else {
        return null
    }
}

//get shelter location and the contact for that location


function getShelterLocation(id) {
    return db
        .select('shelter_locations.id','shelter_locations.nickname', 'shelter_locations.street_address',
            'shelter_locations.city', 'states.id as state_id', 'states.state', 'shelter_locations.zipcode','shelter_contacts.name', 'shelter_locations.shelter_contact_id')
        .from('shelter_locations')
        .innerJoin('states', 'shelter_locations.state_id', 'states.id')
        .innerJoin('shelter_contacts', 'shelter_locations.shelter_contact_id', 'shelter_contacts.id')
        .where('shelter_locations.shelter_id', id)
}


function getContactByShelterId(id) {
    return db
    .select('shelter_contacts.id','shelter_contacts.name','shelter_contacts.email','shelter_contacts.phone')
    .orderBy('shelter_contacts.id')   
    .from('shelter_contacts')
    .where({ 
       'shelter_id':id
     })
    
  }

//get the users following the shelters
function getShelterFollows(id) {
    return db
        .select('users.username')
        .from('shelter_follows')
        .innerJoin('shelters', 'shelters.id', 'shelter_follows.shelter_id')
        .innerJoin('users', 'shelter_follows.user_id', 'users.id')
        .where({ 'shelter_follows.shelter_id': id })

}

//add a new shelter
function addShelter(shelter) {
    return db('shelters')
        .insert(shelter, 'id')
        .then(([id]) => getById(id))
}

//update shelter table
function updateShelter(id, change) {
    return db('shelters')
        .where({ id })
        .update(change)
        .then(updatedShelter => updatedShelter ? getById(id) : null)
}

//delete shelter table
function deleteShelter(id) {
    return db('shelters')
        .where({ id })
        .del();
}
