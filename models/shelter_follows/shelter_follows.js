const db = require('../../data/dbConfig.js')
module.exports = {
    getByShelterId,
    getByUserId,
    getByShelterUserId,
    addShelterFollows,
    deleteShelterFollows,
 }
 
 function getByShelterId(id) {
    return db('shelter_follows')
    .where('shelter_id',id)
 }
 

 
 function getByUserId(id) {
    return db('shelter_follows')
    .where('user_id',id)
 }
 
 function getByShelterUserId(shelterId,userId) {
    return db('shelter_follows')
    .where({
        'shelter_id':shelterId,
        'user_id':userId
    })
   
 }
 
 
 function addShelterFollows(follow) {
    return db('shelter_follows')
    .insert(follow, 'id')
    .then( ([id]) => getByShelterUserId(id))
 }
 

 function deleteShelterFollows(shelterId,userId) {
    return db('shelter_follows')
    .where({
        'shelter_id':shelterId,
        'user_id':userId
    })
    .del();
 }