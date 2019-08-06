
exports.seed = async function(knex, Promise) {
  await knex('breeds').del()
  await knex.raw('ALTER SEQUENCE breeds_id_seq RESTART WITH 1')  
  // Deletes ALL existing entries
    .then(function () {
      // Inserts seed entries
      return knex('breeds').insert([
        {breed: 'Labrador Retrievers', species_id:1},
        {breed: 'German Shepherd', species_id:1},
        {breed: 'Golden Retrievers', species_id:1},
        {breed: 'French Bulldogs', species_id:1},
        {breed: 'Bulldogs', species_id:1},
        {breed: 'Abyssinian', species_id:2},
        {breed: 'American Bobtail', species_id:2},
        {breed: 'American Curl', species_id:2},
        {breed: 'American Shorthair', species_id:2},
        {breed: 'American Wirehair', species_id:2}


      ]);
    });
};
