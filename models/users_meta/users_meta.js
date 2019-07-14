const db = require('../../data/dbConfig');

module.exports={
    getUserMetaById,
    getUserMetaByUserId,
    createUserMeta,
    updateUserMeta,
    deleteUserMeta,
}

function getUserMetaById(id) {
    return db('user_meta') 
    .where({ id })
}

function getUserMetaByUserId(user_id) {
    return db('user_meta')
    .where({ user_id })
}

function createUserMeta(user_meta) {
    return db('user_meta')
    .insert(user, 'id')
    .then( ([id]) => getUserMetaById(id))
}

function updateUserMeta(user_meta, user_id) {
    return db('user_meta')
    .where({ id })
    .update(user_meta)
}

function deleteUserMeta(user_id){
    return db('users_meta')
    .where({ user_id })
    .del()
}