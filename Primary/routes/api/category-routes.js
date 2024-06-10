const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  try { // DONE: get route for all categories
    const catData = await Category.findAll({
      include: [{ model: Product }]
    });
    if (!catData) {
      res.status(404).json({ message: 'No categories in record!' });
      return;
    }
    res.status(200).json(catData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) => {
  try { // DONE: get route for a single category
    const catData = await Category.findOne({
      where: {
        id: req.params.id,
      },
      include: [{ model: Product }]
    });
    if (!catData) {
      res.status(404).json({ message: 'No matching category in record!' });
      return;
    }
    res.status(200).json(catData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/', async (req, res) => {
  try { // DONE: post route for creating new categories
    const catData = await Category.create(req.body);
    res.status(200).json(catData);
  } catch (err) {
    res.status(400).json(err, { message: 'Failed to create category!' });
  }
});

router.put('/:id', async (req, res) => {
  try { // DONE: put route for updating categories
    const catData = await Category.update({
      category_name: req.body.category_name
    },
    {
      where: {
        id: req.params.id
      }
    });
  } catch (err) {
    res.status(400).json(err, { message: 'Failed to update category!' });
  }
});

router.delete('/:id', async (req, res) => {
  // DONE: delete route for deleting categories
    const catData = await Category.destroy({
    where: {
      id: req.params.id
    }
  })
  .then((deletedCat) => {
    if (deletedCat === 1) {
      res.json({ message: 'Category deleted successfully!' });
    } else {
      res.status(400).json({ message: 'Failed to delete category!' })
    }
  });
});

module.exports = router;
