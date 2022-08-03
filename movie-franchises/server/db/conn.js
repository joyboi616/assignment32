const mongoose = require("mongoose");

const DB = "mongodb+srv://StebanPls:Contrasena@cluster0.3tzlb.mongodb.net/Test2?retryWrites=true&w=majority";

mongoose.connect(DB, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log("connection start")).catch((error) => console.log(error.message));