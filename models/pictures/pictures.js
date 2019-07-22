const db = require('../../data/dbConfig')

module.exports = {
    getAll,
    getById,
    getByImgId,
    getByAnimalId,
    remove,
    update,
    add
}

function getAll() {
    return db('pictures')
}

function getById(id) {
    return db('pictures')
    .where( { id })
    .first()
}

function getByImgId(id) {
    return db('pictures')
    .where('img_id', id)
    .first()
}

function getByAnimalId(id) {
    return db('pictures')
    .where('animal_id', id)
}

function remove(id) {
    return db('pictures')
    .where({id})
    .del()
}

function update(id, change) {
    return db('pictures')
    .where({ id })
    .update(change)
    .then( update => update? getById(id) : null)
}

function add(picture) {
    return db('pictures')
    .insert(picture, 'id')
    .then(([id]) => getById(id))
}