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
    .select('animals.name', 'species.species', 'shelters.shelter')
    .from('animals')
    .innerJoin('species', 'animals.species_id' , 'species.id')
    .innerJoin('shelters', 'animals.shelter_id', 'shelters.id')
    
    if(id) {
        query.where('animals.id', id).first();
        const promises = [query, getAnimalMetaById(id)]

        return Promise.all(promises).then(results =>  {
            let [animal, meta] = results;

            if(animal) {
                animal.meta = meta;
                return animal;
            } else {
                return null;
            }
        })


    }
}

function getAnimalMetaById(id) {
    let query = db
    .select('animal_meta.description', 'animal_meta.color', 'animal_meta.health', 'size.size')
    .from('animal_meta')
    .innerJoin('size', 'animal_meta.size_id', 'size.id')
    .where('animal_meta.id', id)
    .first()

    return query;
}

/*
function getAnimalMetaById(id) {
    return db('animal_meta')
    .where({ id })
    .first()
} */

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

/*
function getById(id) {
    return db('animals')
    .where({id})
    .first()
}
*/

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