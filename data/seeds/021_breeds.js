
exports.seed = async function(knex, Promise) {
  await knex('breeds').del()
  await knex.raw('ALTER SEQUENCE breeds_id_seq RESTART WITH 1')  
  // Deletes ALL existing entries
    .then(function () {
      // Inserts seed entries
      return knex('breeds').insert([
        {breed: 'Affenpinscher', species_id:1},
        {breed: 'bbbb', species_id:1},
        {breed: 'cccc', species_id:1},
        {breed: 'dddd', species_id:1},
        {breed: 'eeee', species_id:1},
        {breed: 'ffff', species_id:2},
        {breed: 'gggg', species_id:2},
        {breed: 'hhhh', species_id:2},
        {breed: 'iiii', species_id:2},
        {breed: 'jjjj', species_id:2}


      ]);
    });
};
