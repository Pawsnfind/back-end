const db = require('../../data/dbConfig.js')
module.exports = {
   getUsersFollowsByShelterId,
   getByUserFollowId,
    getFollowsByIds,
    addShelterFollows,
    deleteShelterFollows,
 }
 
 function getUsersFollowsByShelterId(id) {
    return db
    .select('shelter_follows.shelter_id', 'shelter_follows.user_id', 'user_meta.name', 'shelters.shelter')
    .from('shelter_follows')
    .innerJoin('user_meta','shelter_follows.user_id','user_meta.user_id')
    .innerJoin('shelters', 'shelter_follows.shelter_id', 'shelters.id')
    .where('shelter_id',id)
 }
 

 
 function getByUserFollowId(id) {
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