const db = require('../../data/dbConfig')

module.exports = {
    getAll,
    getById,
    getBy,
    remove,
    update,
    add
}

function getById(id) {
    let query = db
    .select('animals.id', 'animals.name', 'species.species', 'shelters.shelter', 'animal_status.animal_status', 'shelter_locations.nickname', 'pictures.img_url')
    .from('animals')
    .innerJoin('species', 'animals.species_id' , 'species.id')
    .innerJoin('shelters', 'animals.shelter_id', 'shelters.id')
    .innerJoin('animal_status', 'animals.animal_status_id', 'animal_status.id')
    .innerJoin('shelter_locations', 'animals.shelter_location_id', 'shelter_locations.id')
    .innerJoin('pictures', 'animals.profile_img_id', 'pictures.id')
    .innerJoin('animal_meta', 'animals.id', 'animal_meta.animal_id')

    if(id) {
        query.where('animals.id', id).first();
        const promises = [query, getAnimalMetaById(id)]

        return Promise.all(promises).then(results =>  {
            let [animal, meta] = results;

            if(animal) {
                animal.meta = meta;
                animal.meta = animalToBody(animal.meta);
                return animal
            } else {
                return null;
            }
        })
    } else {
        return null;
    }
}

//get animal meta by animal id
function getAnimalMetaById(id) {
    let meta = db
    .select('breeds.breed', 'animal_meta.is_mixed', 'ages.age','size.size', 'animal_meta.health', 'animal_meta.color', 'coat_length.coat_length', 'animal_meta.is_male as sex', 'animal_meta.is_house_trained', 'animal_meta.is_neutered_spayed', 'animal_meta.is_good_with_kids', 'animal_meta.is_good_with_dogs', 'animal_meta.is_good_with_cats', 'animal_meta.is_vaccinated', 'animal_meta.description')
    .from('animal_meta')
    .innerJoin('breeds', 'animal_meta.breed_id', 'breeds.id')
    .innerJoin('ages', 'animal_meta.age_id', 'ages.id')
    .innerJoin('size', 'animal_meta.size_id', 'size.id')
    .innerJoin('coat_length', 'animal_meta.coat_length_id', 'coat_length.id')
    .where('animal_meta.animal_id', id)
    .first()
     return meta;
}

 function animalToBody(meta) {
   const result = {
       ...meta, 
       sex: boolToSex(meta.sex)
   }
    return result;
}

function boolToSex(bool) {
    return bool === true ? "Male" : "Female";
}

function getAll() {
    return db('animals');
}

function getBy(filter) {
    return db('animals')
    .where(filter)
}

function update(id, change) {
    return db('animals')
    .where({ id })
    .update(change)
    .then( updatedAnimal => updatedAnimal? getById(id) : null)
}

function remove(id) {
    return db('animals')
    .where({id})
    .del();
}

function add(animal) {
    return db('animals')
    .insert(animal, 'id')
    .then (([id]) => getById(id))  
}