
exports.seed = async function(knex, Promise) {
  await knex('shelter_locations').del()
  await knex.raw('ALTER SEQUENCE shelter_locations_id_seq RESTART WITH 1')  
  // Deletes ALL existing entries
    .then(function () {
      // Inserts seed entries
      return knex('shelter_locations').insert([
        {shelter_id: 1, nickname: 'main', street_address: '123 Main Street', city: 'New York', state_id: '1', zipcode: '10021', phone_number: '212-552-1234', shelter_contact_id: 1},
        {shelter_id: 2, nickname: 'main', street_address: '123 Main Street', city: 'Los Angeles', state_id: '2', zipcode: '90005', phone_number: '213-552-1234', shelter_contact_id: 2},
        {shelter_id: 3, nickname: 'main', street_address: '123 Main Street', city: 'Raleigh', state_id: '3', zipcode: '27513', phone_number: '919-552-1234', shelter_contact_id: 3},
        {shelter_id: 4, nickname: 'main', street_address: '123 Main Street', city: 'Mystic', state_id: '4', zipcode: '06355', phone_number: '860-552-1234', shelter_contact_id: 4},
        {shelter_id: 5, nickname: 'main', street_address: '123 Main Street', city: 'Orlando', state_id: '5', zipcode: '32789', phone_number: '407-552-1234', shelter_contact_id: 5},
        {shelter_id: 6, nickname: 'main', street_address: '123 Main Street', city: 'Seattle', state_id: '6', zipcode: '98101', phone_number: '206-552-1234', shelter_contact_id: 6},
        {shelter_id: 7, nickname: 'main', street_address: '123 Main Street', city: 'Austin', state_id: '7', zipcode: '73301', phone_number: '512-552-1234', shelter_contact_id: 7},
        {shelter_id: 8, nickname: 'main', street_address: '123 Main Street', city: 'Edgewater', state_id: '8', zipcode: '07020', phone_number: '201-552-1234', shelter_contact_id: 8},
        {shelter_id: 9, nickname: 'main', street_address: '123 Main Street', city: 'Scottsdale', state_id: '9', zipcode: '85054', phone_number: '480-552-1234', shelter_contact_id: 9},
        {shelter_id: 10, nickname: 'main', street_address: '123 Main Street', city: 'Cleveland', state_id: '10', zipcode: '44101', phone_number: '216-552-1234', shelter_contact_id: 10},
        {shelter_id: 3, nickname: 'North East', street_address: '123 Main Street', city: 'Raleigh', state_id: '11', zipcode: '27626', phone_number: '919-552-1234', shelter_contact_id: 3},
        {shelter_id: 8, nickname: 'Cherry Hill', street_address: '123 Main Street', city: 'Cherry Hill', state_id: '12', zipcode: '08002', phone_number: '201-552-1234', shelter_contact_id: 8},
      ]);
    });
};
