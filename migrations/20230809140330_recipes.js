exports.up = function(knex) {
    return knex.schema.createTable('recipes', tbl => {
      tbl.increments('recipe_id');
      tbl.string('recipe_name', 255).notNullable().unique();
      tbl.timestamp('created_at').defaultTo(knex.fn.now());
    });
  };
  
  exports.down = function(knex) {
    console.log('down');
    return knex.schema.dropTableIfExists('recipes');
  };
  
