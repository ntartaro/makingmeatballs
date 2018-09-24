const mongoose = require("../db/connection")
const Schema = mongoose.Schema

const Post = new Schema({
    title: String,
    description: String,
    instructions: String,
    ingredients: []
})

module.exports = mongoose.model("Post", Post);