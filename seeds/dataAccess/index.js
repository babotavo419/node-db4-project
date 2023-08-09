// Dependencies
const recipesSeed = require('./recipes');
const ingredientsSeed = require('./ingredients');
const stepsSeed = require('./steps');
const stepIngredientsSeed = require('./step_ingredients');

exports.seed = async function(knex) {
  // Ensure all operations are run in the order they are called
  await knex('step_ingredients').truncate();
  await knex('steps').truncate();
  await knex('ingredients').truncate();
  await knex('recipes').truncate();

  // Seed tables
  await recipesSeed.seed(knex);
  await ingredientsSeed.seed(knex);
  await stepsSeed.seed(knex);
  await stepIngredientsSeed.seed(knex);
};
