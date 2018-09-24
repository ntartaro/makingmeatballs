const express = require("express")
const hbs = require("hbs")
const bodyParser = require("body-parser")
const app = express()
const Post = require('./models/Post')

//handles form submissions
app.use(bodyParser.urlencoded({ extended: true}))  

//sets Handlebars as view engine
app.set('view engine', 'hbs')

//imports routes
//app.use(require("./routes/index.js"))               

//routes to controllers

// app.use("/", require("./controllers/application.js"))
=======
app.use("/", require("./controllers/application"))


//app.use("/user", require("./controllers/user"))
app.use(require("./routes/index.js"));

app.get('/', (req, res) => {
    Post.find({}).then(posts => {
        res.render('app/index', { posts })
    })
})


app.listen(3000, () => {
    console.log('server is listening');
});


=======
app.listen(3000, () => {})

