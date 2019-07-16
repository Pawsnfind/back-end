const db = require('../../data/dbConfig');


module.exports={
    getUsers,
    getUserById,
    getBy,
    getUserByUsername,
    getUserByEmail,
    getUserBySubId,
    createUser,
    updateUser,
    removeUser,
}

function getUsers() {
    return db 
    .select('users.sub_id', 'users.email','users.username' , 'users.created_at', 'user_meta.*')
    .from('users') 
    .innerJoin('user_meta', 'users.id', 'user_meta.user_id')
}

function getUserById(user_id) {
    return db 
    .select('users.sub_id', 'users.email', 'users.created_at', 'user_meta.*')
    .from('users') 
    .innerJoin('user_meta', 'users.id', 'user_meta.user_id')
    .where( "users.id", user_id )
    .first()
}

function getBy(filter) {
    return db('users')
    .where(filter)
}

function getUserByUsername(username) {
    return db
    .select('users.sub_id', 'users.email', 'users.username', 'users.created_at', 'user_meta.*')
    .from('users')
    .innerJoin('user_meta', 'users.id', 'user_meta.user_id')
    .where( "users.username", username )
    .first()
}

function getUserByEmail(email) {
    return db
    .select('users.sub_id', 'users.email', 'users.username', 'users.created_at', 'user_meta.*')
    .from('users')
    .innerJoin('user_meta', 'users.id', 'user_meta.user_id')
    .where( "users.email", email )
    .first()
}

function getUserBySubId(sub_id) {
    return db
    .select('users.sub_id', 'users.email', 'users.created_at', 'user_meta.*')
    .from('users')
    .innerJoin('user_meta', 'users.id', 'user_meta.user_id')
    .where( "users_sub_id", sub_id )
    .first()
}

function createUser(user) {
    return db('users')
    .insert(user, 'id')
    .then( ([id]) => getUserById(id))
}

function updateUser(id, user) {
    return db('users')
    .where({ id })
    .update(user)
}

function removeUser(id) {
    return db('users')
    .where({ id })
    .del();
}