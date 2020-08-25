exports.up = function(knex) {
    return knex.schema.createTable('cartable', tbl => {
      tbl.increments();
      tbl.string('vin').unique();
      tbl.string('make');
      tbl.string('model');
      tbl.integer('mileage');
      tbl.string('transmission_type');
      tbl.string('status');
  
  
    })
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTableIfExists('cartable')
  };
  