const mongoose = require("mongoose");
const config=require("./config");
const token = config.MY_API_TOKEN;
const key = config.SECRET_API_KEY;
/**
 * URL to the MongoDB instance.
 */
const MONGODB_URL = "mongodb+srv://"+token+":"+key+"@cluster0.hud40.mongodb.net/shipDatabase?retryWrites=true&w=majority";
// Tell Mongoose to connect to the MongoDB instance using the provided configuration.
mongoose.connect(MONGODB_URL);

/**
 * Mongoose connection to the MongoDB instance.
 */
let db = mongoose.connection;

// Listen for errors and print them to the console.
db.on("error", function (err) {
  console.error("Mongoose Error: ", err);
});

// When the MongoDB connection is made, print to the console.
db.once("open", function () {
  console.info("Mongoose connection successful.");
});