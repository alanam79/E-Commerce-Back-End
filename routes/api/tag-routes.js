const router = require("express").Router();
const { Tag, Product, ProductTag } = require("../../models");

// The `/api/tags` endpoint

router.get("/", (req, res) => {
  // find all tags
  // be sure to include its associated Product data
});

router.get("/:id", (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
});

// TO DO - need to associate to products
router.post("/", (req, res) => {
  // create a new category
  Tag.create(req.body)
    .then((tag) => res.status(200).json(tag))
    .catch((err) => res.status(500).json(err));
});

// update id
router.put("/:id", (req, res) => {
  // update a tag's name by its `id` value
});

// delete id
router.delete("/:id", (req, res) => {
  // delete a category by its `id` value - completed
  Category.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((category) => res.status(200).json(category))
    .catch((err) => res.status(400).json(err));
});

module.exports = router;
