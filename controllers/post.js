const express = require("express")
const router = express.Router()
const Post = require("../models/Post")

module.exports = {
    new: (req, res) => {
        res.render('post/new'); 
    }
}

// router.get('/new', (req, res) => {
//     res.render('post/new')
// })

// router.post('/new', (req, res) => {
//     console.log(req)
//     console.log(req.body)
//     Post.create({
//         title: req.body.title,
//         description: req.body.description,
//         instructions: req.body.instructions
//     // })
//     // Post.create({
//     //     title: "hey",
//     //     description: "sup",
//     //     instructions: "instructions"
//     }).then( post => {
//         res.redirect('/')
//     })
// })

// router.get('/delete', (req, res) => {
//     console.log('delete')
//     Post.find({}).remove().then ( post => {
//     res.redirect('/')
// })
// })

// module.exports = router;