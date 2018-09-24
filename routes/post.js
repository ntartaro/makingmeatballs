const express = require('express');
const router = express.Router();
const postController = require('../controllers/post');

router.get('/new', postController.new);

module.exports = router;