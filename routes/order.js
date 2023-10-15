const express = require("express");
const router = express.Router();
const { OrderModel } = require("../schema/orderSchema");
const { dbUrl } = require("../config/dbConfig");
const mongoose = require("mongoose");

mongoose.connect(dbUrl);

//save order
router.post("/saveOrder", async (req, res) => {
  try {
    let doc = new OrderModel(req.body);
    console.log(doc);
    await doc.save();
    res.status(201).send({
      message: "Order saved successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      message: "internal server error",
      error,
    });
  }
});

//get all orders
router.post("/getOrder", async (req, res) => {
  try {
    let products = await OrderModel.find({ email: req.body.email });
    // console.log(products);
    res.status(200).send({
       
      products,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      message: "internal server error",
      error,
    });
  }
});

module.exports = router;