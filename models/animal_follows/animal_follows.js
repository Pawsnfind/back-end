const db = require ('../../data/dbConfig')


module.exports = {
    getByAnimalId,
    getByIds,
    add, 
    remove, 
    findMatch
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

function findMatch(animalId, userId) {
    return db('animal_follows')
    .where({
        animal_id: animalId,
        user_id: userId
    })
    .first()
}
