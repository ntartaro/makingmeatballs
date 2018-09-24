const express = require("express")
const router = express.Router()
const Post = require("../models/Post")

module.exports = {
    new: (req, res) => {
        res.render('post/new'); 
    },
    create: (req, res) => {
        Post.create({
        title: req.body.title,
        description: req.body.description,
        instructions: req.body.instructions
        }).then(post => {
            res.redirect('/')
        })
    },
    show: (req, res) => {

    },

    delete: (req, res) => {
        Post.findOneAndRemove({ _id: req.params.id }).then(post => {
            res.redirect('/');
        // Post.find({}).remove().then(post => {
        // res.redirect('/');
        })
    }
};

// router.post('/new', (req, res) => {
//     console.log(req)
//     console.log(req.body)
//     Post.create({
//         title: req.body.title,
//         description: req.body.description,
//         instructions: req.body.instructions
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