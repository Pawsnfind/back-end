const db = require('../../data/dbConfig.js')
module.exports = {
   getUsersByShelterId,
    getByUserId,
    getFollowsByIds,
    addShelterFollows,
    deleteShelterFollows,
 }
 
 function getUsersByShelterId(id) {
    return db
    .select('shelter_follows.shelter_id','user_meta.name')
    .from('shelter_follows')
    .innerJoin('user_meta','shelter_follows.user_id','user_meta.user_id')
    .where('shelter_id',id)
 }
 

 
 function getByUserId(id) {
    return db('shelter_follows')
    .where('user_id',id)
 }
 

function getFollowsByIds(shelterId,userId){
   return db
   .select('shelter_follows.shelter_id','shelter_follows.user_id','users.username')
   .from('shelter_follows')
   .innerJoin('users','shelter_follows.user_id','users.id')
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