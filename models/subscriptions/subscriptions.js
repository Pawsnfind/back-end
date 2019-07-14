const db = require('../data/dbConfig.js')
//subscription is_active added!!!!!

module.exports = {
    getAllSubscriptions,
    getSubscriptionbyID,
    getSubscriptionbyShelter,
    getSubscriptionbyLevel,
    addSubscription,
    updateSubscription,
}

function getAllSubscriptions() {
    return db('shelter_subscriptions')
}

function getSubscriptionbyID(id) {
    if(id){
        return db
        .select('shelter_subscriptions.id', 'shelter_subscriptions.created_at', 'shelter_subscriptions.expiration_date', 'shelters.shelter', 'subscriptions.subscription')
        .from('shelter_subscriptions')
        .innerJoin('shelters', 'shelter_subscriptions.shelter_id', 'shelters.id')
        .innerJoin('subscriptions', 'shelter_subscriptions.subscription_id', 'subscriptions.id')
        .where({ 'shelter_subscriptions.id' : id })
    } else {
        return null;
    }
} 

function getSubscriptionbyShelter(id) {
       return db
        .select('shelter_subscriptions.id', 'shelter_subscriptions.created_at', 'shelter_subscriptions.expiration_date', 'shelters.shelter', 'subscriptions.subscription')
        .from('shelter_subscriptions')
        .innerJoin('shelters', 'shelter_subscriptions.shelter_id', 'shelters.id')
        .innerJoin('subscriptions', 'shelter_subscriptions.subscription_id', 'subscriptions.id')
        .where({ 'shelter_subscriptions.shelter_id' : id })
  
}

function getSubscriptionbyLevel(id) {
    return db
     .select('shelter_subscriptions.id', 'shelter_subscriptions.created_at', 'shelter_subscriptions.expiration_date', 'shelters.shelter', 'subscriptions.subscription')
     .from('shelter_subscriptions')
     .innerJoin('shelters', 'shelter_subscriptions.shelter_id', 'shelters.id')
     .innerJoin('subscriptions', 'shelter_subscriptions.subscription_id', 'subscriptions.id')
     .where({ 'shelter_subscriptions.subscription_id' : id })

}

function addSubscription(subscription) {
    return db('shelter_subscriptions')
    .insert(subscription, 'id')
    .then( ([id]) => getSubscriptionbyID(id))
}

function updateSubscription(id, change) {
    return db('shelter_subscriptions')
    .where({ id })
    .update(change)
    .then(updatedSubscription => updatedSubscription ? getSubscriptionbyID(id) : null)
}