const mongoose = require("mongoose");

//connection creation to the db. If db doesn't exist, it will create one
mongoose.connect("mongodb://localhost:27017/userdetails-api", {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true})
.then(() => console.log("Connection successful"))
.catch((err) => console.log(err));