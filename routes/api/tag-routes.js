const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

// GET(find) all tags
// be sure to include its associated Product data
router.get('/', async (req, res) => {
  try {
    const tagData = await Tag.findAll({
      include: [{ model: Tag }, { model: Product }],
    });
    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET(find) a single tag by its `id`
// be sure to include its associated Product data
router.get('/:id', async (req, res) => {
  try {
    const tagData = await Tag.findByPk(req.params.id, {
      // 뭔가 for loop이 와야하나? 아님 findByPk가 해당 id로 다 찾아주려나? 
      // 인섬니아 목업 이미지에서 {}와 []사이를 잘 보면 됨
      // 해당 라우트에서는 기본으로 불러오니까 안써도 되고 거기에 include할 것만 쓰면 됨 
      include: [
        { model: Product,
          // product 밑에 productTag를 쓰려면 where 같은 걸 써야하나? 
          include: [{ model: ProductTag}],
        }],
    });
    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// POST(create) a new tag
router.post('/', async (req, res) => {
  try {
    const tagData = await Tag.create(req.body);
    res.status(200).json(tagData);
  } catch (err) {
    res.status(400).json(err);
  }
});

// PUT(update) a tag's name by its `id` value
router.put('/:id', async (req, res) => {
  try {
    const tagData = await Tag.update(req.body, {
      where: {
        id: req.params.id,
      },
     });
    if(!tagData[0]) {
      res.status(404).json({
      message: 'No tag with this id!'});
      return;
    }
    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// DELETE on tag by its `id` value
router.delete('/:id', async (req, res) => {
  try {
    const tagData = await Tag.destroy({
      where: {
        id: req.params.id,
      },
    });
    if (!tagData) {
      res.status(400).json({
      message: 'No tag found with that id!'});
      return;
    }
    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;