const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/dagoods");
mongoose.Promise = Promise;
module.exports = mongoose;
