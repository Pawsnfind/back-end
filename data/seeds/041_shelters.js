
exports.seed = async function(knex, Promise) {
  await knex('shelters').del()
  await knex.raw('ALTER SEQUENCE shelters_id_seq RESTART WITH 1')  
    .then(function () {
      // Inserts seed entries
      return knex('shelters').insert([
        {shelter: 'Little Shelter', is_upgraded: true, EIN: '68-0240341', shelter_location_id: 1, shelter_contact_id: 1},
        {shelter: 'Big Dog Rescue', is_upgraded: true, EIN: '68-0243341', shelter_location_id: 2, shelter_contact_id: 2},
        {shelter: 'We Heart Little Ones Rescue', is_upgraded: true, EIN: '68-0242341', shelter_location_id: 3, shelter_contact_id: 3},
        {shelter: 'Best Friends Rescue', is_upgraded: true, EIN: '68-0140341', shelter_location_id: 4, shelter_contact_id: 4},
        {shelter: 'Second Chance Rescue', is_upgraded: true, EIN: '68-0240371', shelter_location_id: 5, shelter_contact_id: 5},
        {shelter: 'Pooch & Meow Rescue', is_upgraded: true, EIN: '68-0240241', shelter_location_id: 6, shelter_contact_id: 6},
        {shelter: 'Pawsitively Purrfect Rescue', is_upgraded: true, EIN: '68-0249341', shelter_location_id: 7, shelter_contact_id: 7},
        {shelter: 'North Shore Animal Shelter', is_upgraded: true, EIN: '68-0250341', shelter_location_id: 8, shelter_contact_id: 8},
        {shelter: 'Pit Stop Bully Rescue', is_upgraded: true, EIN: '68-0290341', shelter_location_id: 9, shelter_contact_id: 9},
        {shelter: 'Purrington Rescue', is_upgraded: true, EIN: '68-0240381', shelter_location_id: 10, shelter_contact_id: 10},
      ]);
    });
};
