
exports.seed = function(knex) {
  return knex('schools').insert([
    { 
      school_id: '123abc456def789ghi',
      school_name: 'West High School TESTING TO SEE IF THIS IS AFFECTED',
      email: 'test-email@example.com',
      address: '123 West St',
      city: 'Westtown',
      zipcode: '12345'
    }
  ]);
};