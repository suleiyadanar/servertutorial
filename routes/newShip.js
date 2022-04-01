const express = require("express");
const router = express.Router();
let Ship = require("../models/Ship");

/**
 * tell Express.js that when it receives a POST request at the URL /newShip/, to do this code.
 */
router.post("/newShip/", function(req, res){
  // look up documents in MongoDB by name.
  Ship.findOne({name: req.body.name}, function(error,doc){
    // if there was an error
    if(error){
      console.error("Error finding ship",error);
      res.status(500).send(error);
    }
    // if no document was found
    else if(!doc){
      // create a new instance of the Ship model, using the request body as the data.
      
      new Ship(req.body).save((err, doc) => {
        /**
         * this error/document fat-arrow function is required.
         * on an error, handle it. else send the newly created document back to the client.
         */
        if(err){
          console.error("Error saving new ship",err);
          res.status(500).send(err);
        }
        else{
          res.send(doc);
        }
      });
    }
    // a document was found, return it instead.
    else{
      res.send(doc);
    }
  });
});

/**
 * tell Express.js that when it receives a GET request at the URL /newShip/name, to do this code.
 */
router.get("/newShip/name/", function(req, res){
  // look up documents in MongoDB by name.
  Ship.findOne({name: req.body.name}, function(error,doc){
    // if there was an error.
    if(error){
      console.error("Error finding ship",error);
      res.status(500).send(error);
    }
    // if no ship with given name was found.
    else if(!doc){
      // send an error.
      console.error("No ship with the name is found",error);
      res.status(404).send(error);
    // ship with name was found, return data.
    }else{
      res.send(doc);
    }
  });
});

/**
 * tell Express.js that when it receives a GET request at the URL /newShip/secondaryBattery, to do this code.
 */
router.get("/newShip/secondaryBattery/", function(req, res){
  // look up documents in MongoDB by specified model of secondary battery.
  Ship.find({secondaryBattery: req.body.secondaryBattery}, function(error,doc){
    // if there was an error.
    if(error){
      console.error("Error finding ships",error);
      res.status(500).send(error);
    }
    // if no ships with specified secondary battery was found.
    else if(!doc){
      // send an error.
      console.error("No ship with the secondary battery is found",error);
      res.status(404).send(error);
    // return all ships with specified secondary battery.
    }else{
      res.send(doc);
    }
  });
});

/**
 * tell Express.js that when it receives a PATCH request at the URL /updateShip, to do this code.
 */
router.patch("/updateShip/", function(req, res){
  // look up documents in MongoDB by specified name.
  Ship.findOneAndUpdate({name: req.body.name},req.body, { new: true }, function(error,doc){
    // if no name field in request body.
    if(req.body.name==null){
      console.error("No ships name given in request",error);
      res.status(400).send(error);
    }
    // if no ships with specified name was found.
    else if(!doc){
      // send an error.
      console.error("No ship with the given name is found",error);
      res.status(404).send(error);
    // return updated document.
    }else{
      // catch an error 
      if(error){
        console.error("Error finding the ship",error);
        res.status(500).send(error);
      }
      res.send(doc);
    }
  });
});


module.exports = router;