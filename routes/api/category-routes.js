const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

// GET all categories
// find all categories
// be sure to include its associated Products
router.get('/', async (req, res) => {
  try {
      const categoryData = await Category.findAll({
        include: [{ model: Product }],
      });
      res.status(200).json(categoryData);
    } catch (err) {
    res.status(500).json(err);
  };

// GET a singer category
// find one category by its `id` value
// be sure to include its associated Products
router.get('/:id', async (req, res) => {
  try {
      const categoryData = await Category.findByPk(req.params.id, {
        include: [{ model: Product }],
      });

      if (!categoryData) {
        res.status(404.).json({ message: 'No category found with that id!'});
        return;
      }
      res.status(200).json(categoryData);
    } catch (err) {
      res.status(500).json(err);
    }
});

// create a new category
router.post('/', (req, res) => {
  
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
});

module.exports = router;
