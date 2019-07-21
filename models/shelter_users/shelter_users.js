const db = require('../../data/dbConfig.js')
module.exports = {
   getUsersByShelterId,
    getByRoleId,
    getByShelterRoleId,
    addShelterUsers,
    deleteShelterUsers,
 }

 
 function getUsersByShelterId(id) {
    return db
    .select('shelter_users.id','shelter_users.shelter_id','shelter_users.username','shelter_users.user_id')
    .from('shelter_users')
    .where({
       'shelter_id':id
      })
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