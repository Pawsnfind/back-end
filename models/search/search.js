const db = require('../../data/dbConfig')

module.exports = {
    advancedSearch,
    initialSearch
}

function initialSearch(filter) {
    return db
    .select('animals.*', 'shelter_locations.zipcode', 'pictures.img_url', 'animal_meta.is_male', 'breeds.breed','ages.age')
    .from('animals')
    .leftJoin('shelter_locations', 'animals.shelter_location_id', 'shelter_locations.id')
    .leftJoin('pictures', 'animals.profile_img_id', 'pictures.img_id')
    .leftJoin('animal_meta', 'animals.id', 'animal_meta.animal_id' )
    .leftJoin('ages', 'animal_meta.age_id', 'ages.id')
    .leftJoin('breeds', 'animal_meta.breed_id', 'breeds.id')
    .whereIn('animals.animal_status_id', [1, 3])
    .whereIn('shelter_locations.zipcode', filter.zips )
    .whereIn('animals.species_id', filter.species_id)
    
    
}


function advancedSearch(filter) {
    return db
    .select('animals.*', 'shelter_locations.zipcode', 'pictures.img_url', 'animal_meta.is_male', 'breeds.breed','ages.age')
    .from('animals')
    .leftJoin('shelter_locations', 'animals.shelter_location_id', 'shelter_locations.id')
    .leftJoin('pictures', 'animals.profile_img_id', 'pictures.img_id')
    .leftJoin('animal_meta', 'animals.id', 'animal_meta.animal_id' )
    .leftJoin('ages', 'animal_meta.age_id', 'ages.id')
    .leftJoin('breeds', 'animal_meta.breed_id', 'breeds.id')
    .whereIn('animals.animal_status_id', [1, 3])
    .whereIn('animals.species_id', filter.species_id)
    .whereIn('animal_meta.is_male', filter.is_male)
    .whereIn('animal_meta.coat_length_id', filter.coat_length_id) 
    .whereIn('animal_meta.size_id', filter.size_id)
    .whereIn('animal_meta.age_id', filter.age_id) 
    .whereIn('animal_meta.breed_id', filter.breed_id)   
    .whereIn('shelter_locations.zipcode', filter.zips)
}


