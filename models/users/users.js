const db = require('../../data/dbConfig');


module.exports={
    getUsers,
    getUserById,
    createUser,
    updateUser,
    removeUser,
}

function getUsers() {
    return db 
    .select('users.sub_id', 'users.email', 'users.created_at', 'user_meta.*')
    .from('users') 
    .innerJoin('user_meta', 'users.id', 'user_meta.user_id')
}

function getUserById(id) {
    return db 
    .select('users.sub_id', 'users.email', 'users.created_at', 'user_meta.*')
    .from('users') 
    .innerJoin('user_meta', 'users.id', 'user_meta.user_id')
    .where({ id })
}

function createUser(user) {
    return db('users')
    .insert(user, 'id')
    .then( ([id]) => getUsersById(id))
}

function updateUser(user, id) {
    return db('users')
    .where({ id })
    .update(user)
}

function removeUser(id) {
    return db('users')
    .where({ id })
    .del();
}