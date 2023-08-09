exports.up = function(knex) {
    return knex.schema.createTable('steps', tbl => {
      tbl.increments('step_id');
      tbl.integer('recipe_id')
         .unsigned()
         .notNullable()
         .references('recipe_id')
         .inTable('recipes')
         .onDelete('CASCADE')
         .onUpdate('CASCADE');
      tbl.integer('step_number').unsigned().notNullable();
      tbl.string('step_instructions', 1024).notNullable();
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTableIfExists('steps');
  };
  
