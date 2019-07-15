
exports.seed = async function(knex, Promise) {
  await knex('shelter_users').del()
  await knex.raw('ALTER SEQUENCE shelter_users_id_seq RESTART WITH 1')  
  // Deletes ALL existing entries
    .then(function () {
      // Inserts seed entries
      return knex('shelter_users').insert([
        {role_id: 1, shelter_id:1, username: 'abcabc'},
        {role_id: 1, shelter_id:2, username: 'trialtrial'},
        {role_id: 1, shelter_id:3, username: '123123'},
        {role_id: 1, shelter_id:4, username: 'test12test12'},
        {role_id: 1, shelter_id:5, username: 'hung'},
        {role_id: 1, shelter_id:6, username: 'lenna'},
        {role_id: 1, shelter_id:7, username: 'chris'},
        {role_id: 1, shelter_id:8, username: 'sarah'},
        {role_id: 1, shelter_id:9, username: 'james'},
        {role_id: 1, shelter_id:10, username: 'aruna'}
      ]);
    });
};

