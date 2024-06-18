const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

// get all tags // /api/tags/
router.get('/', async (req, res) => {
  try {
    const tagData = await Tag.findAll({
      include: [{ model: Product, through: ProductTag }]
    });
    if (!tagData.length) {
      res.status(404).json({ message: 'No tags in record!' });
      return;
    }
    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// get a single tag // /api/tags/:id
router.get('/:id', async (req, res) => {
  try {
    const tagData = await Tag.findOne({
      where: {
        id: req.params.id,
      },
      include: [{ model: Product, through: ProductTag }]
    });
    if (!tagData) {
      res.status(404).json({ message: 'No matching tag in record!' });
      return;
    }
    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// create a new tag // /api/tags/
router.post('/', async (req, res) => {
  try {
    const tagData = await Tag.create(req.body);
    res.status(200).json(tagData);
  } catch (err) {
    res.status(400).json(err, { message: 'Failed to create tag!' });
  }
});

// update a tag // /api/tags/:id
router.put('/:id', async (req, res) => {
  try {
    const tagData = await Tag.update({
      tag_name: req.body.tag_name
    },
    {
      where: {
        id: req.params.id
      }
    })
    if (tagData == 1) {
    const updatedTag = await Tag.findOne({
      where: {
        id: req.params.id,
      },
      include: [{ model: Product, through: ProductTag }],
    });
    res.status(200).json(updatedTag);
    } else {
      res.status(400).json({ message: 'Failed to update category!' });
    }
  } catch (err) {
    res.status(400).json(err, { message: 'Failed to update category!' });
  }
});

// delete a tag // /api/tags/:id
router.delete('/:id', async (req, res) => {
  try {
    const tagData = await Tag.destroy({
      where: {
        id: req.params.id
      }
    });

    if (tagData) {
      res.json({ message: 'Tag deleted successfully!' });
    } else {
      res.status(404).json({ message: 'Tag not found!' });
    }
  } catch (err) {
    res.status(500).json({ message: 'Failed to delete tag!', error: err });
  }
});

module.exports = router;
