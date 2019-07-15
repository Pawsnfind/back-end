const db = require('../data/dbConfig.js')
module.exports = {
    getByShelterId,
    getByRoleId,
    getByShelterRoleId,
    addShelterUsers,
    deleteShelterUsers,
 }
 
 function getByShelterId(id) {
    return db('shelter_users')
    .where('shelter_id',id)
 }
 

 
 function getByRoleId(id) {
    return db('shelter_users')
    .where('role_id',id)
 }
 
 function getByShelterRoleId(shelterId,roleId) {
    return db('shelter_users')
    .where({
        'shelter_id':shelterId,
        'role_id':roleId
    })
   
 }
 
 
 function addShelterUsers(user) {
    return db('shelter_users')
    .insert(user, 'id')
    .then( ([id]) => getByShelterRoleId(id))
 }
 

 function deleteShelterUsers(shelterId,roleId) {
    return db('shelter_users')
    .where({
        'shelter_id':shelterId,
        'role_id':roleId
    })
    .del();
 }