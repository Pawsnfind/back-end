const db = require ('../../data/dbConfig')


module.exports = {
    getByAnimalId,
    getByUserId, //should have in users route
    getByIds,
    add, 
    remove
}


function getByIds(animalId, userId) {
    return db('animal_follows')
    .where({
        animal_id : animalId,
        user_id : userId
    })
    .first()
}

function getByAnimalId(id) {
    return db('animal_follows')
    .where('animal_id' , id )

}

function getByUserId(id) {
    return db('animal_follows')
    .where('user_id', id)
}

function add(follow) {
    return db('animal_follows')
    .insert(follow)
}

function remove(animalId, userId) {
    return db('animal_follows')
    .where({
        animal_id : animalId,
        user_id : userId})
    .del();
}
