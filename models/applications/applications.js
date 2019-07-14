const db = require('../../data/dbConfig')

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
    .select('applications.id', 'animals.name', 'shelters.shelter', 'application_status.application_status', 'applications.user_id') 
    .from('applications')
    .innerJoin('animals', 'applications.animal_id', 'animals.id')
    .innerJoin('shelters', 'applications.shelter_id', 'shelters.id')
    .innerJoin('application_status', 'applications.application_status_id', 'application_status.id')

    if(id) {
        query.where('applications.id', id).first()
        const promises = [query, getApplicationMeta(id), getApplicationNotes(id)]

        return Promise.all(promises).then( results => {
            let [application, meta, notes] = results;

            if(application) {
                application.meta = meta;
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

function getApplicationMeta(application_id) {
    return db('application_meta')
    .where({ application_id })
    .first()
}

function getApplicationNotes(application_id) {
    return db('application_admin')
    .where({ application_id })
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