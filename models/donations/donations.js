const db = require('../data/dbConfig.js')

module.exports = {
    getDonationsByUser,
    getDonationbyId,
    getDonationsByShelter,
    getAllDonations,
    UpdateDonation,
}

function getAllDonations() {
    return db('donations')
}

function getDonationbyId (id) {
    if(id){
        return db
        .select('donations.id', 'donations.amount', 'donations.created_at', 'shelters.shelter', 'users.username')
        .from('donations')
        .innerJoin('shelters', 'donations.shelter_id', 'shelters.id')
        .innerJoin('users', 'donations.user_id', 'users.id')
        .where({ 'donations.id' : id })
    } else {
        return null;
    }
}

function getDonationsByUser(id) {
    return db
    .select('donations.id', 'donations.amount', 'donations.created_at', 'shelters.shelter', 'users.username')
    .from('donations')
    .innerJoin('shelters', 'donations.shelter_id', 'shelters.id')
    .innerJoin('users', 'donations.user_id', 'users.id')
    .where({ 'donations.user_id' : id })
}

function getDonationsByShelter(id) {
    return db
    .select('donations.id', 'donations.amount', 'donations.created_at', 'shelters.shelter', 'users.username')
    .from('donations')
    .innerJoin('shelters', 'donations.shelter_id', 'shelters.id')
    .innerJoin('users', 'donations.user_id', 'users.id')
    .where({ 'donations.shelter_id' : id })
}

function UpdateDonation(id, change) {
    return db('donations')
    .where({ id })
    .update(change)
    .then(updatedDonations => updatedDonations ? getDonationbyId(id) : null)
}