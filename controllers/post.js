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
        Post.findById(req.params.id).then(foundObject => {
            res.render('post/update', { foundThing: foundObject })
        })
    },
    update: (req, res) => {
        res.render('post/update')
    },
    delete: (req, res) => {
        // Post.findOneAndRemove({ _id: req.params.id }).then(post => {
        //     res.redirect('/');
        Post.find({}).remove().then(post => {
        res.redirect('/');
        })
    }
};
router.get('/update/:id', (req, res) => {
    Post.findById(req.params.id).then( foundObject => {
        res.render('post/update', { foundThing: foundObject })
    })
})

// router.post('/new', (req, res) => {
//     Post.create({
//         title: req.body.title,
//         description: req.body.description,
//         instructions: req.body.instructions
//     }).then( post => {
//         res.redirect('/')
//     })
// })
// router.get('/delete', (req, res) => {
//     Post.find({}).remove().then ( post => {
//     res.redirect('/')
// })
// })
// router.get('/delete', (req, res) => {
//     Post.find({}).remove().then( post => {
//     res.redirect('/')
//     })
// })
// router.get('/update', (req, res) => {
//     res.render('post/update')
// })


// module.exports = router; 
