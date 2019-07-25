const db = require('../../data/dbConfig')
const knex = require('knex')

module.exports = {
    getAll,
    getById,
    getBy, //filter
    getByShelterId,
    getByUserId,
    getByAnimalId,
    add,
    remove,
    update
}

function getAll() {
    return db('applications');
}

// get by application id
function getById(id) {
    let query = db
    .select('applications.id', 'animals.name as animal_name', 'shelters.shelter', 'application_status.application_status', 'applications.user_id', 'application_meta.*') 
    .from('applications')
    .innerJoin('animals', 'applications.animal_id', 'animals.id')
    .innerJoin('shelters', 'applications.shelter_id', 'shelters.id')
    .innerJoin('application_status', 'applications.application_status_id', 'application_status.id')
    .innerJoin('application_meta', 'applications.id', 'application_meta.application_id')

    if(id) {
        query.where('applications.id', id).first()
        const promises = [query, getApplicationNotes(id)]

        return Promise.all(promises).then( results => {
            let [application, notes] = results;

            if(application) {
                
                application.notes = notes;

                return application
            } else {
                return null;
            }
        })           
    } else {
        return null;
    }

}

function getApplicationNotes(application_id) {
    if(application_id) {
        return db
        .select('application_admin.id', 'application_admin.notes', 'users.username as by', 'application_admin.created_at')
        .from('application_admin')
        .innerJoin('shelter_users', 'application_admin.shelter_user_id', 'shelter_users.id')
        .innerJoin('users', 'shelter_users.user_id', 'users.id')
        .where('application_admin.application_id', application_id)
         
    } else {
        return null
    }
}

function getByUserId(id) {
    return db
    .select('applications.id', 'animals.name as animal_name', 'shelters.shelter', 'application_status.application_status')
    .from('applications')
    .innerJoin('animals', 'applications.animal_id', 'animals.id')
    .innerJoin('shelters', 'applications.shelter_id', 'shelters.id')
    .innerJoin('application_status', 'applications.application_status_id', 'application_status.id')
    .where('applications.user_id', id)
}

function getByShelterId(id) {
    if(id) {
        return db
        .select('applications.id', 'animals.name as animal_name', 'users.email', 'application_status.application_status')
        .from('applications')
        .innerJoin('animals', 'applications.animal_id', 'animals.id')
        .innerJoin('users', 'applications.user_id', 'users.id')
        .innerJoin('application_status', 'applications.application_status_id', 'application_status.id')
        .where('applications.shelter_id', id)
    } else {
        return null
    }
    
}

function getByAnimalId(id) {
    return db
    .select('applications.id', 'users.email', 'application_status.application_status')
    .from('applications')
    .innerJoin('animals', 'applications.animal_id', 'animals.id')
    .innerJoin('users', 'applications.user_id', 'users.id')
    .innerJoin('application_status', 'applications.application_status_id', 'application_status.id')
    .where('applications.animal_id', id)
}

function getBy(filter) {
    return db('applications')
    .where(filter)
}

//initial stage of filling out application, only returning id is required
function add(application) {
    return db('applications')
    .insert(application, 'id')

   // .then( ([id]) => getById(id))
}

function update(id, change) {
    return db('applications')
    .where({ id })
    .update(change)
    .then( updatedApplication => updatedApplication ? getById(id) : null)
}

function remove(id) {
    return db('applications')
    .where({ id })
    .del();
}
