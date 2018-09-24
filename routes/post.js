
const express = require('express');
const router = express.Router();
const postController = require('../controllers/post');

router.get('/new', postController.new);
router.post('/', postController.create);

// router.get("/:id", postController.show);
router.delete('/:id', postController.delete);

module.exports = router;
=======
// const express = require(‘express’)
// const router = express.Router()
// const postController = require(‘../controllers/post’)

// // I want to post a new recipe to the blog
// router.get(‘/new’, postController.new)
// //router.post(‘/’, postController.create)

// module.exports = router

