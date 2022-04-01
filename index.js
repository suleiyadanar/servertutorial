const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const app = express();
const PORT = 3000;
const DB = require("./db");
let newShip = require("./routes/newShip");


app.listen(PORT, () => console.info("Server has started on", PORT));
// on every request, parse the request body using this library.
app.use(bodyParser.json());
// on a request to /, use the newShip code.
// note that the entire URL including the one declared in the file must match.
app.use("/",newShip);
