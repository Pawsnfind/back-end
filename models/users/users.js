const db = require('../../data/dbConfig');


module.exports={
    getUsers,
}

function getUsers() {
    return db 
    .select('users.date', 'users.email')
    .from('users') 
    // .innerJoin('user_meta', 'users.id', 'user_meta.users_id')
}