const db = require ('../../data/dbConfig')


module.exports = {
    getByAnimalId,
    getByIds,
    add, 
    remove, 
    findMatch,
    getTotalFollows
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

function getTotalFollows(id) {
    return db('animal_follows')
    .where('animal_id', id)
    .count()
}

function add(follow) {
    return db('animal_follows')
    .insert(follow, 'animal_id')
    .then(([animal_id]) => getTotalFollows(animal_id))
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
