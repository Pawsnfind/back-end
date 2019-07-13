
exports.seed = async function(knex, Promise) {
  await knex('shelter_users').del()
  await knex.raw('ALTER SEQUENCE shelter_users_id_seq RESTART WITH 1')  
  // Deletes ALL existing entries
    .then(function () {
      // Inserts seed entries
      return knex('shelter_users').insert([
        {role_id: 1, shelter_id:1},
        {role_id: 1, shelter_id:2},
        {role_id: 1, shelter_id:3},
        {role_id: 1, shelter_id:4},
        {role_id: 1, shelter_id:5},
        {role_id: 1, shelter_id:6},
        {role_id: 1, shelter_id:7},
        {role_id: 1, shelter_id:8},
        {role_id: 1, shelter_id:9},
        {role_id: 1, shelter_id:10}
      ]);
    });
};
