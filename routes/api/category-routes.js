const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  Category.findAll({
    include:[Product]
  }).then(data=>{
    res.status(200).json(data)
  }).catch(err=>{
    console.log(err);
    res.status(500).json({
        msg:"an error occurred",
        err:err
    })
})
  // find all categories
  // be sure to include its associated Products
});

router.get('/:id', (req, res) => {
  Category.findByPk(req.params.id, {
    include:[Product]
  }).then(data => {
    if (data) {
        return res.json(data)
    } else {
        res.status(404).send("No such category")
    }
})
  // find one category by its `id` value
  // be sure to include its associated Products
});

router.post('/', (req, res) => {
  Category.create(req.body).then(data=>{
    res.status(201).json(data)
}).catch(err=>{
    console.log(err);
    res.status(500).json({
        msg:"an error occurred",
        err:err
    })
})
  // create a new category
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
  Category.update(req.body, {
    where: {
      id: req.params.id,
    }
  }).then(data=>{
    res.status(201).json(data)
  }).catch(err=>{
    console.log(err);
    res.status(500).json({
        msg:"an error occurred",
        err:err
    })
  })
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
  Category.destroy({
    where: {
      id: req.params.id
    }
  }).then(data => {
    if (data) {
      return res.json(data)
    } else {
      return res.status(404).json({ msg: "no such record" })
    }
  }).catch(err => {
    console.log(err);
    res.status(500).json({
      msg: "an error occurred",
      err: err
    })
  })
});

module.exports = router;
