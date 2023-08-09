exports.up = function(knex) {
    return knex.schema.createTable('step_ingredients', tbl => {
      tbl.increments('id');  // A primary key for this junction table
      tbl.integer('step_id')
         .unsigned()
         .notNullable()
         .references('step_id')
         .inTable('steps')
         .onDelete('CASCADE')
         .onUpdate('CASCADE');
      tbl.integer('ingredient_id')
         .unsigned()
         .notNullable()
         .references('ingredient_id')
         .inTable('ingredients')
         .onDelete('CASCADE')
         .onUpdate('CASCADE');
      tbl.float('quantity').notNullable();
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTableIfExists('step_ingredients');
  };
  
