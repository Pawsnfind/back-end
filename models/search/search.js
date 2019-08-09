const db = require('../../data/dbConfig')

module.exports = {
   // advancedSearch,
    initialSearch
}

function initialSearch(filter) {
    return db
    .select('animals.*', 'shelter_locations.zipcode', 'pictures.img_url', 'animal_meta.is_male', 'ages.age')
    .from('animals')
    .leftJoin('shelter_locations', 'animals.shelter_location_id', 'shelter_locations.id')
    .leftJoin('pictures', 'animals.profile_img_id', 'pictures.img_id')
    .leftJoin('animal_meta', 'animals.id', 'animal_meta.animal_id' )
    .leftJoin('ages', 'animal_meta.age_id', 'ages.id')
    .whereIn('shelter_locations.zipcode', filter.zips )
    .whereIn('animals.species_id', filter.species_id)
}



/*

function advancedSearch(filter, array) {
    return db
    .select('animals.*', 'animal_meta.*')
    .from('animals')
    .leftJoin('animal_meta', 'animals.id', 'animal_meta.animal_id')
    .whereIn('animals.animal_status_id' , array.animal_status_id)
    //.whereIn('shelter_id', array.shelter_id)
    .whereIn('animal_meta.breed_id', array.breed_id)
}
*/