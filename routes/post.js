
const express = require('express');
const router = express.Router();
const postController = require('../controllers/post');

router.get('/new', postController.new);
router.post('/', postController.create);

router.get('/update', postController.update);
router.get('/update/:id', postController.show);

router.get('/delete', postController.delete)
// router.get("/:id", postController.show);
// router.delete('/:id', postController.delete);

module.exports = router;

