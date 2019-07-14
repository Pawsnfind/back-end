const db = require('../../data/dbConfig')
const knex = require('knex')

module.exports = {
    getAll,
    getById,
    getBy, //filter
    //getByShelterId,
    //getByUserId,
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
    .select('applications.id', 'animals.name', 'shelters.shelter', 'application_status.application_status', 'applications.user_id', 'application_meta.*') 
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
        let query = db
        .select('application_admin.notes', 'application_admin.shelter_user_id as by', 'application_admin.created_at')
        .from('application_admin')
        .innerJoin('shelter_users', 'application_admin.shelter_user_id', 'shelter_users.id')
        .where('application_admin.application_id', application_id)
        
        let promises = [query, getShelterUserName(query.by)]

        return Promise.all(promises).then( results => {
            let [notes, username] = results

            notes.by = username
            return notes
        })

        /*
        let shelterUserName = db
        .select('name')
        .from('user_meta')
        .where('shelter_user_id', query.by)
        .first()
        
        query.by = shelterUserName

        return query*/
        
    } else {
        return null
    }
    
}


function getShelterUserName(shelter_user_id) {
    if(shelter_user_id) {
        return db
        .select('name')
        .from('user_meta')
        .where({shelter_user_id})
        .first()
    } else {
        return null
    }
}


/*
function getById(id) {
    return db('applications')
    .where({ id })
    .first()
}
*/

function getBy(filter) {
    return db('applications')
    .where(filter)
}

function add(application) {
    return db('applications')
    .insert(application, 'id')
    .then( ([id]) => getById(id))
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