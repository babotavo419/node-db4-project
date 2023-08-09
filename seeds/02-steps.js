/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('steps').del();

  // Inserts sample steps for recipes
  await knex('steps').insert([
    { step_id: 1, recipe_id: 1, step_number: 1, step_instructions: "Put a large saucepan on a medium heat" },
    { step_id: 2, recipe_id: 1, step_number: 2, step_instructions: "Add 1 tbsp olive oil" },
    { step_id: 3, recipe_id: 2, step_number: 1, step_instructions: "Preheat the oven to 400°F (200°C)" },
    { step_id: 4, recipe_id: 2, step_number: 2, step_instructions: "Place chicken in the oven for 1 hour" },
  ]);
};

