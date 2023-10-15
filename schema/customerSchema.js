const mongoose = require("mongoose");

//schema to visualize how a database should be structured
const customerSchema = new mongoose.Schema(
  {
    firstName: { type: String, required: true },
    middleName: { type: String },
    lastName: { type: String, required: true },
    email: {
      type: String,
      required: true, 
    },
    password: { type: "string", required: true },
    mobile: { type: String, required: true },
    address: { type: String, required: true },
    city: { type: String, required: true },
    state: { type: String, required: true },
    pincode: { type: String, required: true },
    token: {
      type: String,
      default: "",
    },
    status: { type: String, default: "Customer" },
    createdAt: { type: Date, default: Date.now() },
  },
  { versionKey: false, collection: "customers" }
);

//model provides an interface to the database for creating, querying, updating, deleting records, etc.
const customerModel = mongoose.model("customers", customerSchema);
module.exports = { customerModel };