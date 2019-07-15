const db = require('../../data/dbConfig')

module.exports = {
    getById,
    getBy,
    getNotesByAnimalId,
    add,
    remove,
    update
}

function getNotesByAnimalId(id) {
    return db('animal_admin')
    .where('animal_id', id)
}

function getById(id) {
    return db('animals_admin')
    .where ({ id })
    .first()
}

function getBy(filter) {
    return db('animal_admin')
    .where(filter)
}

function add(note) {
    return db('animal_admin')
    .insert(note, 'id')
    .then( ([ id ]) => getById(id))
}

function remove(id) {
    return db('animal_admin')
    .where({ id })
    .del()
}

function update(id, change) {
    return db('animal_admin')
    .where({ id })
    .update(change)
    .then( update => update? getById(id) : null)
}