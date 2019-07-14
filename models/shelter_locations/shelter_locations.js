const db = require('../data/dbConfig.js')
module.exports = {
    getAllShelterLocations,
    searchShelterLocations,
    getByShelterLocationId,
    addShelterLocations,
    updateShelterLocations,
    deleteShelterLocations,
 }
 
 function getAllShelterLocations() {
    return db('shelter_locations')
 }
 

 
 function searchShelterLocations(filter) {
    return db('shelter_locations')
    .where(filter)
 }
 
 function getByShelterLocationId(id) {
    return db('shelter_locations')
    .where({ id })
    .first()
 }
 
 
 function addShelterLocations(shelter) {
    return db('shelter_locations')
    .insert(shelter, 'id')
    .then( ([id]) => getByShelterLocationId(id))
 }
 
 function updateShelterLocations(id, change) {
    return db('shelter_locations')
    .where({ id })
    .update(change)
    .then(updatedShelter => updatedShelter ? getByShelterLocationId(id) : null )
 }
 
 function deleteShelterLocations(id) {
    return db('shelter_locations')
    .where({ id })
    .del();
 }