/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('ingredients').del();

  // Inserts sample ingredients into the ingredients table
  await knex('ingredients').insert([
    { ingredient_id: 1, ingredient_name: 'Olive oil' },
    { ingredient_id: 2, ingredient_name: 'Spaghetti' },
    { ingredient_id: 3, ingredient_name: 'Tomato sauce' },
    { ingredient_id: 4, ingredient_name: 'Salt' },
    { ingredient_id: 5, ingredient_name: 'Pepper' },
    { ingredient_id: 6, ingredient_name: 'Parmesan cheese' },
    { ingredient_id: 7, ingredient_name: 'Garlic' },
  ]);
};

