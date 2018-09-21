const express = require("express")
const hbs = require("hbs")
const bodyParser = require("body-parser")
const app = express()

app.use(require("./routes/index.js"))               //imports routes
app.use(bodyParser.urlencoded({ extended: true}))   //handles form submissions
app.set('view engine', 'hbs')                       //sets Handlebars as view engine

app.listen(3000, () => {})