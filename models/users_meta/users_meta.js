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
    return db('user_meta') 
    .where({ id })
    .first()
}

function getUserMetaByUserId(user_id) {
    return db('user_meta')
    .where({ user_id })
    .first()
}

function getUserMetaByStateId(state_id) {
    return db('user_meta')
    .where({ state_id })
    .first()
}

function getUserMetaByShelterUserId(shelter_user_id) {
    return db('user_meta')
    .where({ shelter_user_id })
    .first()
}

function getUserMetaByPhoneNumber(phone_number) {
    return db('user_meta')
    .where({ phone_number })
}

function getUserMetaByZip(zip) {
    return db('user_meta')
    .where({ zip })
}

function getUserMetaByCity(city) {
    return db('user_meta')
    .where({ city })
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