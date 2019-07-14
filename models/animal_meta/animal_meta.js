const db = require ('../../data/dbConfig')

module.export = {
    getById,
    getBy,
    remove,
    update,
    add
}

function getBy(filter) {
    return db('animal_meta')
    .where(filter)
}

function getById(id) {
    return db('animal_meta')
    .where({ id })
    .first()
}

function remove(id) {
    return db('animal_meta')
    .where({ id })
    .del()
}

function update(id, change) {
    return db('animal_meta')
    .where({ id })
    .update(change)
    .then(updateAnimal => updateAnimal? getById(id) : null)
}

function add(animal) {
    return db('animal_meta')
    .insert(animal, 'id')
    .then (([id]) => getById(id))
}

