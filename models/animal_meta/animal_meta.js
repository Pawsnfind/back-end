const db = require ('../../data/dbConfig')

module.export = {
    getById,
    getBy,
    remove,
    update,
    add
}

function getBy(filter) {
    return db('animals')
    .where(filter)
}

function getById(id) {
    return db('animals')
    .where({ id })
    .first()
}

function remove(id) {
    return db('animals')
    .where({ id })
    .del()
}

function update(id, change) {
    return db('animals')
    .where({ id })
    .update(change)
    .then(updateAnimal => updateAnimal? getById(id) : null)
}

function add(animal) {
    return db('animals')
    .insert(animal, 'id')
    .then (([id]) => getById(id))
}

