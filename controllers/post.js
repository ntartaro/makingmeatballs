const express = require("express")
const router = express.Router()
const Post = require("../models/Post")

router.get('/new', (req, res) => {
    res.render('post/new')
})

module.exports = router;