/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries from the step_ingredients table
  await knex('step_ingredients').del();

  // Insert relations between steps and ingredients
  await knex('step_ingredients').insert([
    {step_id: 1, ingredient_id: 1},
    {step_id: 2, ingredient_id: 2},
  ]);
};

