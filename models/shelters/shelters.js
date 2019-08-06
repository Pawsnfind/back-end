const db = require('../../data/dbConfig.js')
module.exports = {
    getAllShelters,
    searchShelter,
    getById,
    getByIdSimple,
    getByEIN,
    addShelter,
    updateShelter,
    deleteShelter,
}


function addShelter(shelter) {
    return db('shelters')
    .insert(shelter, "id")
    .then( ([id]) => getByIdSimple(id))
}

function getByIdSimple(id) {
    return db('shelters')
    .where({ id })
    .first()
}

/******** CREATE SHELTER with ADDING SHELTER USER AND UPDATING USER META  *********/
/*
function addShelter(newShelterInfo) {
    let newShelter = {shelter : newShelterInfo.shelter, EIN : newShelterInfo.EIN}
    let query =  db('shelters')
        .insert(newShelter, 'id')
        .then(([id]) => getById(id))

    const promises = [query, addShelterUser({role_id : 1, shelter_id : query.id, user_id : newShelterInfo.user_id })]

    return Promise.all(promises).then(results => {
        const [shelter, shelterUser] = results;

        if(shelter) {
            shelter.shelterUser = shelterUser;
            return shelter
        } else {
            return null
        }
    })
}

function addShelterUser(shelterUser) {
    let newShelterUser = {role_id : shelterUser.role_id, shelter_id: shelterUser.shelter_id}
    let query = db('shelter_users')
    .insert(newShelterUser, "id")
    .then(([id]) => getShelterUserById(id))

    const promises = [query, updateUserMeta(shelterUser.user_id, {shelter_user_id : query.id})]
   
    return Promise.all(promises).then(results => {
        const [shelter_user, update_count] = results;

        if(shelter_user) {
            return shelter_user
        } else {
            return null
        }
    })
}

function updateUserMeta(userId, change) {
    
    return db('user_meta')
    .where('user_id', userId )
    .update(change)

}

function getShelterUserById(id) {
    return db('shelter_users')
    .where({ id })
    .first()
}
*/
/******** END OF CREATING SHELTER with ADDING SHELTER USER AND UPDATING USER META  *********/




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

// get shelter by EIN
function getByEIN(ein){
    return db
    .select('EIN')
    .from('shelters')
    .where('EIN', ein)
    .first();
}

//get shelter location and the contact for that location
function getShelterLocation(id) {
    return db
        .select('shelter_locations.id','shelter_locations.nickname', 'shelter_locations.street_address',
            'shelter_locations.city', 'states.id as state_id', 'states.state', 'shelter_locations.zipcode','shelter_contacts.name', 'shelter_locations.shelter_contact_id')
        .orderBy('shelter_locations.id')   
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
