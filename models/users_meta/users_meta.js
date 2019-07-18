const db = require('../../data/dbConfig');

module.exports={
    getUserMetaById,
    getUserMetaByUserId,
    getUserMetaByStateId,
    getUserMetaByShelterUserId,
    getUserMetaByPhoneNumber,
    getUserMetaByZip,
    getUserMetaByCity,
    createUserMeta,
    updateUserMeta,
    deleteUserMeta,
}

function getUserMetaById(id) {
    return db
    .select('user_meta.id', 'user_meta.phone_number', 'user_meta.name', 'user_meta.street_address', 
    'user_meta.city', 'user_meta.zip', 'states.state', 'user_meta.shelter_user_id', 'shelters.shelter')
    .from('user_meta')
    .innerJoin('states', 'user_meta.state_id', 'states.id' )
    .innerJoin('shelters', 'user_meta.shelter_user_id', 'shelters.id')
    .where('user_meta.id', id)

}

function getUserMetaByUserId(user_id) {
    return db
    .select('user_meta.id', 'user_meta.phone_number', 'user_meta.name', 'user_meta.street_address', 
    'user_meta.city', 'user_meta.zip', 'states.state', 'user_meta.shelter_user_id', 'shelters.shelter')
    .from('user_meta')
    .innerJoin('states', 'user_meta.state_id', 'states.id')
    .innerJoin('shelters', 'user_meta.shelter_user_id', 'shelters.id')
    .where('user_meta.user_id', user_id)
}

function getUserMetaByStateId(state_id) {
    return db
    .select('user_meta.id', 'user_meta.phone_number', 'user_meta.name', 'user_meta.street_address', 
    'user_meta.city', 'user_meta.zip', 'states.state', 'user_meta.shelter_user_id', 'shelters.shelter')
    .from('user_meta')
    .innerJoin('states', 'user_meta.state_id', 'states.id')
    .innerJoin('shelters', 'user_meta.shelter_user_id', 'shelters.id')
    .where('user_meta.state_id', state_id)
}

function getUserMetaByShelterUserId(shelter_user_id) {
    return db
    .select('user_meta.id', 'user_meta.phone_number', 'user_meta.name', 'user_meta.street_address', 
    'user_meta.city', 'user_meta.zip', 'states.state', 'user_meta.shelter_user_id', 'shelters.shelter')
    .from('user_meta')
    .innerJoin('states', 'user_meta.state_id', 'states.id')
    .innerJoin('shelters', 'user_meta.shelter_user_id', 'shelters.id')
    .where('user_meta.shelter_user_id', shelter_user_id)
}

function getUserMetaByPhoneNumber(phone_number) {
    return db
    .select('user_meta.id', 'user_meta.phone_number', 'user_meta.name', 'user_meta.street_address', 
    'user_meta.city', 'user_meta.zip', 'states.state', 'user_meta.shelter_user_id', 'shelters.shelter')
    .from('user_meta')
    .innerJoin('states', 'user_meta.state_id', 'states.id')
    .innerJoin('shelters', 'user_meta.shelter_user_id', 'shelters.id')
    .where('user_meta.phone_number', phone_number)
}

function getUserMetaByZip(zip) {
    return db
    .select('user_meta.id', 'user_meta.phone_number', 'user_meta.name', 'user_meta.street_address', 
    'user_meta.city', 'user_meta.zip', 'states.state', 'user_meta.shelter_user_id', 'shelters.shelter')
    .from('user_meta')
    .innerJoin('states', 'user_meta.state_id', 'states.id')
    .innerJoin('shelters', 'user_meta.shelter_user_id', 'shelters.id')
    .where('user_meta.zip', zip)
}

function getUserMetaByCity(city) {
    return db
    .select('user_meta.id', 'user_meta.phone_number', 'user_meta.name', 'user_meta.street_address', 
    'user_meta.city', 'user_meta.zip', 'states.state', 'user_meta.shelter_user_id', 'shelters.shelter')
    .from('user_meta')
    .innerJoin('states', 'user_meta.state_id', 'states.id')
    .innerJoin('shelters', 'user_meta.shelter_user_id', 'shelters.id')
    .where('user_meta.city', city)
}

function createUserMeta(user_meta) {
    return db('user_meta')
    .insert(user_meta, 'id')
    .returning('*')
    .then( (results) => {
        return results[0]
    })
}

function updateUserMeta(id, user_meta) {
    return db('user_meta')
    .where({ id })
    .update(user_meta)
}

function deleteUserMeta(id){
    return db('user_meta')
    .where({ id })
    .del()
}