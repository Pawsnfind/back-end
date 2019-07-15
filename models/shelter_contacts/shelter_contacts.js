const db = require('../../data/dbConfig.js')
module.exports = {
    getAllShelterContacts,
    searchShelterContacts,
    getByShelterContactId,
    addShelterContacts,
    updateShelterContacts,
    deleteShelterContacts,
 }
 
 function getAllShelterContacts() {
    return db('shelter_contacts')
 }
 

 
 function searchShelterContacts(filter) {
    return db('shelter_contacts')
    .where(filter)
 }
 
 function getByShelterContactId(id) {
    return db('shelter_contacts')
    .where({ id })
    .first()
 }

 
 function addShelterContacts(contact) {
    return db('shelter_contacts')
    .insert(contact, 'id')
    .then( ([id]) => getByShelterContactId(id))
 }
 
 function updateShelterContacts(id, change) {
    return db('shelter_contacts')
    .where({ id })
    .update(change)
    .then(updatedShelterContact => updatedShelterContact ? getByShelterContactId(id) : null )
 }
 
 function deleteShelterContacts(id) {
    return db('shelter_contacts')
    .where({ id })
    .del();
 }