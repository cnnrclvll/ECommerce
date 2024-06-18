const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

// get all categories // /api/catgories/
router.get('/', async (req, res) => {
  try {
    const catData = await Category.findAll({
      include: [{ model: Product }]
    });
    if (!catData.length) {
      res.status(404).json({ message: 'No categories in record!' });
      return;
    }
    res.status(200).json(catData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// get single category // /api/catgories/:id
router.get('/:id', async (req, res) => {
  try {
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

// create category // /api/catgories/
router.post('/', async (req, res) => {
  try {
    const catData = await Category.create(req.body);
    res.status(200).json(catData);
  } catch (err) {
    res.status(400).json(err, { message: 'Failed to create category!' });
  }
});

// update category // /api/catgories/:id
router.put('/:id', async (req, res) => {
  try {
    const catData = await Category.update({
      category_name: req.body.category_name
    },
    {
      where: {
        id: req.params.id
      }
    })
    if (catData == 1) {
    const updatedCat = await Category.findOne({
      where: {
        id: req.params.id,
      },
      include: [{ model: Product }],
    });
    res.status(200).json(updatedCat);
    } else {
      res.status(400).json({ message: 'Failed to update category!' });
    }
  } catch (err) {
    res.status(400).json(err, { message: 'Failed to update category!' });
  }
});

// delete category // /api/catgories/:id
router.delete('/:id', async (req, res) => {
  try {
    const catData = await Category.destroy({
      where: {
        id: req.params.id
      }
    });

    if (catData) {
      res.json({ message: 'Category deleted successfully!' });
    } else {
      res.status(404).json({ message: 'Category not found!' });
    }
  } catch (err) {
    res.status(500).json({ message: 'Failed to delete category!', error: err });
  }
});

module.exports = router;
