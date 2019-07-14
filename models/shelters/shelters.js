const db = require('../data/dbConfig.js')
module.exports = {
   getAllShelters,
   getByShelter,
   getById,
   addShelter,
   updateShelter,
   deleteShelter,
}

function getAllShelters() {
   return db('shelters')
}

function getAllSheltersInfo(){
  
}

function getByShelter(filter) {
   return db('shelters')
   .where(filter)
}

function getById (id) {
   return db('shelters')
   .where({ id })
   .first()
}
//still need to do id

function addShelter (shelter) {
   return db('shelters')
   .insert(shelter, 'id')
   .then( ([id]) => getById(id))
}

function updateShelter(id, change) {
   return db('shelters')
   .where({ id })
   .update(change)
   .then(updatedShelter => updatedShelter ? getById(id) : null )
}

function deleteShelter (id) {
   return db('shelters')
   .where({ id })
   .del();
}
