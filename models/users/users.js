const db = require('../../data/dbConfig');


module.exports={
    getUsers,
    getUserById,
    getUserByUsername,
    getUserByEmail,
    getUserBySubId,
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

function getBy(filter) {
    return db('users')
    .where(filter)
}

function getUserByUsername(username) {
    return db
    .select('users.sub_id', 'users.email', 'users.username', 'users.created_at', 'user_meta.*')
    .from('users')
    .innerJoin('user_meta', 'users.id', 'user_meta.user_id')
    .where({ username: users.username })
}

function getUserByEmail(email) {
    return db
    .select('users.sub_id', 'users.email', 'users.username', 'users.created_at', 'user_meta.*')
    .from('users')
    .innerJoin('user_meta', 'users.id', 'user_meta.user_id')
    .where({ email: users.email  })
}

function getUserBySubId(sub_id) {
    return db
    .select('users.sub_id', 'users.email', 'users.created_at', 'user_meta.*')
    .from('users')
    .innerJoin('user_meta', 'users.id', 'user_meta.user_id')
    .where({ sub_id })
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