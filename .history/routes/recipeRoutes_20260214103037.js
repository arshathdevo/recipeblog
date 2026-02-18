const express = require("express");
const router = express.Router();
const Recipe = require("../models/Recipe");

// POST - Add new recipe
router.post("/", async (req, res) => {
  try {
    const { title, ingredients, instructions, image } = req.body;

    const newRecipe = new Recipe({
      title,
      ingredients,
      instructions,
      image,
    });

    const savedRecipe = await newRecipe.save();
    res.status(201).json(savedRecipe);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
// GET - Fetch all recipes
router.get("/", async (req, res) => {
  try {
    const recipes = await Recipe.find();
    res.status(200).json(recipes);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});


module.exports = router;
