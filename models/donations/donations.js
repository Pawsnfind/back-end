const db = require('../../data/dbConfig.js')

module.exports = {
    getDonationsByUser,
    getDonationbyId,
    getDonationsByShelter,
    getAllDonations,
    addDonation,
    updateDonation,
}

function getAllDonations() {
    return db('donations')
}

function getDonationbyId (id) {
    
        return db
        .select('donations.id', 'donations.amount', 'donations.created_at', 'shelters.shelter', 'users.username')
        .from('donations')
        .leftJoin('shelters', 'donations.shelter_id', 'shelters.id')
        .leftJoin('users', 'donations.user_id', 'users.id')
        .where({ 'donations.id' : id })
        .first();
 
}

function getDonationsByUser(id) {
    return db
    .select('donations.id', 'donations.amount', 'donations.created_at', 'shelters.shelter', 'users.username')
    .from('donations')
    .leftJoin('shelters', 'donations.shelter_id', 'shelters.id')
    .leftJoin('users', 'donations.user_id', 'users.id')
    .where({ 'donations.user_id' : id })
 
}

function getDonationsByShelter(id) {
    return db
    .select('donations.id', 'donations.amount', 'donations.created_at', 'shelters.shelter', 'users.username')
    .from('donations')
    .leftJoin('shelters', 'donations.shelter_id', 'shelters.id')
    .leftJoin('users', 'donations.user_id', 'users.id')
    .where({ 'donations.shelter_id' : id })
    
}

function addDonation(donation) {
    return db('donations')
    .insert(donation, 'id')
    .then( ([id]) => getDonationbyId(id))
}

function updateDonation(id, change) {
    return db('donations')
    .where({ id })
    .update(change)
    .then(updatedDonations => updatedDonations ? getDonationbyId(id) : null)
}