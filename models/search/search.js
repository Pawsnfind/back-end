const db = require('../../data/dbConfig')

module.exports = {
    getBy
}

/*
function getBy(filter, array) {
    return db('animals')
    .whereIn('animal_status_id' , array.animal_status_id)
    .whereIn('shelter_id', array.shelter_id)
    .where(filter)
}
*/

function getBy(filter, array) {
    return db
    .select('animals.*', 'animal_meta.*')
    .from('animals')
    .leftJoin('animal_meta', 'animals.id', 'animal_meta.animal_id')
    .whereIn('animals.animal_status_id' , array.animal_status_id)
    //.whereIn('shelter_id', array.shelter_id)
    .whereIn('animal_meta.breed_id', array.breed_id)
}