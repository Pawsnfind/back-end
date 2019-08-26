exports.seed = async function(knex, Promise) {
  await knex('stripe_accounts').del()
  // Deletes ALL existing entries
    .then(function () {
      // Inserts seed entries
      return knex('stripe_accounts').insert([
        {shelter_id: '3', account_id: '3'},
        {shelter_id: '4', account_id: '4'},
      ]);
    });
};
