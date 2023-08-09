/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('recipes').del();

  // Inserts sample recipes
  await knex('recipes').insert([
    { recipe_id: 1, recipe_name: "Spaghetti Bolognese", created_at: new Date().toISOString() },
    { recipe_id: 2, recipe_name: "Roasted Chicken", created_at: new Date().toISOString() },
    { recipe_id: 3, recipe_name: "Garden Salad", created_at: new Date().toISOString() },
  ]);
};

