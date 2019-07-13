
exports.seed = async function(knex, Promise) {
  await knex('users').del()
  await knex.raw('ALTER SEQUENCE users_id_seq RESTART WITH 1')  
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {email: 'abc@abc.com', sub_id:'change_this_later'},
        {email: 'trial@trial.com', sub_id:'change_this_later1'},
        {email: '123@123.com', sub_id:'change_this_later2'},
        {email: 'test12@gmail.com', sub_id:'change_this_later3'},
        {email: 'hung@lambda.com', sub_id:'change_this_later4'},
        {email: 'lenna@lambda.com', sub_id:'change_this_later5'},
        {email: 'chris@proton.com', sub_id:'change_this_later6'},
        {email: 'sarah@yahoo.com', sub_id:'change_this_later7'},
        {email: 'jamespak@hotmail.com', sub_id:'change_this_later8'},
        {email: 'aruna@gmail.com', sub_id:'change_this_later9'},
      ]);
    });
};
