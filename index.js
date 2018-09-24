const express = require("express")
const hbs = require("hbs")
const bodyParser = require("body-parser")
const app = express()

//handles form submissions
app.use(bodyParser.urlencoded({ extended: true}))   
//sets Handlebars as view engine
app.set('view engine', 'hbs')
//imports routes
//app.use(require("./routes/index.js"))               

//routes to controllers
app.use("/", require("./controllers/application.js"))
//app.use("/user", require("./controllers/user"))
app.use("/post", require("./controllers/post"))


app.get('/', (req, res) => {
    res.render('app/index')
})

app.listen(3000, () => {})


