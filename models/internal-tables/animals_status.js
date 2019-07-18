const db = require('../../data/dbConfig')

module.exports = {
    getAll,
    getBy,
    getById,
    add,
    remove,
    update
}

function getAll() {
    return db('animals_status')
}

function getById(id) {
    return db('animals_status')
    .where ({ id })
    .first()
}

function getBy(filter) {
    return db('animals_status')
    .where(filter)
}

function add(status) {
    return db('animals_status')
    .insert(status, 'id')
    .then(([id]) => getById(id))
}

function remove(id) {
    return db('animals_status')
    .where({ id })
    .del() 
}

function update(id, change) {
    return db('animals_status')
    .where({id})
    .update(change)
    .then(updatedStatus => updatedStatus ? updatedStatus : null)
}