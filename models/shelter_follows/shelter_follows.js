const db = require('../../data/dbConfig.js')
module.exports = {
    getByShelterId,
    getByUserId,
    getFollowsByIds,
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
 
//  function getByShelterUsersId(shelterId,userId) {
//     return db('shelter_follows')
//     .where({
//         'shelter_id':shelterId,
//         'user_id':userId
//     })
   
//  }


function getFollowsByIds(shelterId,userId){
   return db
   .select('shelter_follows.user_id','users.username')
   .from('shelter_follows')
   .innerJoin('users','shelter_follows.user_id','users.id')
   .where({
              'shelter_id':shelterId,
              'user_id':userId
          })
   .first()       
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