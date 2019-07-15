
exports.seed = async function(knex, Promise) {
  await knex('users').del()
  await knex.raw('ALTER SEQUENCE users_id_seq RESTART WITH 1')  
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {email: 'abc@abc.com', sub_id:'change_this_later', username: 'abcabc'},
        {email: 'trial@trial.com', sub_id:'change_this_later1', username: 'trialtrial'},
        {email: '123@123.com', sub_id:'change_this_later2', username: '123123'},
        {email: 'test12@gmail.com', sub_id:'change_this_later3', username: 'test12test12'},
        {email: 'hung@lambda.com', sub_id:'change_this_later4', username: 'hung'},
        {email: 'lenna@lambda.com', sub_id:'change_this_later5', username: 'lenna'},
        {email: 'chris@proton.com', sub_id:'change_this_later6', username: 'chris'},
        {email: 'sarah@yahoo.com', sub_id:'change_this_later7', username: 'sarah'},
        {email: 'jamespak@hotmail.com', sub_id:'change_this_later8', username: 'james'},
        {email: 'aruna@gmail.com', sub_id:'change_this_later9', username: 'aruna'},
      ]);
    });
};
