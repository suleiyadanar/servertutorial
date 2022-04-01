const mongoose = require("mongoose");
const Schema = mongoose.Schema;

/**
 * Schema to describe a vehicle.
 */
let VehicleSchema = new Schema({
  /**
    * Make of this Vehicle
    */
  make: {
    type: String
  },
  /**
    * Model of this vehicle
    */
  model: {
    type: String
  },
  /**
   * Model year of this vehicle
   */
  modelYear: {
    type: Number
  },
  /**
  * Vehicle's MPG or range of EV
  */
  mpgRange: {
    value: {type: Number},
    unit: {type:String}
  },
  /**
   * Miles the vehicle has driven
   */
  odometerMiles: {
    value: {type:Number},
    unit: {type: String, default:"miles"}
  },
  /**
   * Engine type of the vehicle
   */
  engineType: {
    type: String
  },
  /**
   * Name of the vehicle
   */
  displayName: {
    type: String
  },
  /**
   * Unique identifier of the vehicle
   */
  VIN: {
    type: String
  }
    
});

let Vehicle = mongoose.model("Vehicle", VehicleSchema);
module.exports = Vehicle;