const db = require('../data/dbConfig.js')
module.exports = {
   getAllShelters,
   searchShelter,
   getById,
   addShelter,
   updateShelter,
   deleteShelter,
}

function getAllShelters() {
   return db('shelters')
}



function searchShelter(filter) {
   return db('shelters')
   .where(filter)
}

function getById(id){
    let query = db
    .select('shelters.shelter','shelter_contacts.name')
    .from('shelters')
    .innerJoin('shelter_contacts','shelters.main_contact_id','shelter_contacts.id')
    

    if(id){
        query.where('shelters.id', id).first()
        const promises = [query, getShelterLocation(id),getShelterFollows(id)]

        return Promise.all(promises)
        .then(results => {
            let [shelter,location,follows] = results;

            if(shelter){
                shelter.location = location
                shelter.follows = follows
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

function getShelterLocation(id){
    let locationQuery =  db
    .select('shelter_locations.nickname','shelter_locations.street_address',
    'shelter_locations.city','shelter_locations.state','states.state')
    .from('shelter_locations')    
    .innerJoin('states','shelter_locations.state_id','states.id')
    .where({'shelter_location.shelter_id':id})

    if(id){
        locationQuery.where('shelter_locations.id',id).first()
        const promises = [locationQuery,getShelterLocationsContact(id)]

        return Promise.all(promises)
        .then(results => {
            let [location, contact] = results

            if(location){
                location.contact = contact
                return location
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

function getShelterLocationsContact(id){
    return db
    .select('shelter_contacts.name')
    .from('shelter_locations')
    .innerJoin('shelter_contacts','shelter_locations.shelter_contact_id','shelter_contacts.id')
    .where({'shelter_locations.shelter_contact_id': id})
}

function getShelterFollows(id){
    return db
    .select('users.username')
    .from('shelters_follows')
    .innerJoin('shelters','shelters.id','shelter_follows.shelter_id')
    .innerJoin('users','shelter_follows.user_id','users.id')
    .where({'shelters_follows.shelter_id': id})
    
}


function addShelter(shelter) {
   return db('shelters')
   .insert(shelter, 'id')
   .then( ([id]) => getById(id))
}

function updateShelter(id, change) {
   return db('shelters')
   .where({ id })
   .update(change)
   .then(updatedShelter => updatedShelter ? getById(id) : null )
}

function deleteShelter(id) {
   return db('shelters')
   .where({ id })
   .del();
}
