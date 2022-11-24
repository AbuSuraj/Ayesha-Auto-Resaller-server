const express = require("express");
const cors = require("cors");
require("dotenv").config();
const jwt = require("jsonwebtoken");
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const app = express();
const port = process.env.PORT || 5000;

// middle wares
app.use(cors());
app.use(express.json());


run().catch((err) => console.log(err));

app.get("/", (req, res) => {
  res.send("Ayesha Auto Reseller server is running");
});

app.listen(port, () => {
  console.log(`Ayesha Auto Reseller server running on ${port}`);
});
