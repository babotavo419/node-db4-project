const express = require('express');
const knex = require('knex');
const knexConfig = require('../../knexfile'); // Adjust path if necessary

const db = knex(knexConfig.development);

const server = express();

server.use(express.json());

// Middleware to handle errors
const errorHandler = (error, req, res, next) => {
  res.status(500).json({ error: error.message });
};

// Endpoint to fetch a recipe by its id
server.get('/recipe/:id', async (req, res, next) => {
  const { id } = req.params;

  try {
    const recipe = await getRecipeById(id);
    if (recipe) {
      res.json(recipe);
    } else {
      res.status(404).json({ message: 'Recipe not found' });
    }
  } catch (error) {
    next(error);
  }
});

// Placeholder for getRecipeById - you'll replace this with the actual function import from your dataAccess file
async function getRecipeById(id) {
  // Placeholder implementation, you'll replace this
  return db('recipes').where({ recipe_id: id }).first();
}

server.use(errorHandler);

const PORT = process.env.PORT || 4000;
server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

module.exports = server;

