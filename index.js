const express = require("express")
const hbs = require("hbs")
const bodyParser = require("body-parser")
const app = express()
const Post = require('./models/Post')

app.use(bodyParser.urlencoded({ extended: true}))  
app.set('view engine', 'hbs')
app.use(require("./routes/index.js"));

app.get('/', (req, res) => {
    Post.find({}).then(posts => {
        res.render('app/index', { posts })
    })
})

app.set('port', process.env.PORT || 3000)

app.listen(app.get('port'), () => {
    console.log('server is listening');
});


