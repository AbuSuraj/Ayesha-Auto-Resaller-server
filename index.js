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

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.sc93kvm.mongodb.net/?retryWrites=true&w=majority`;

const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});

async function run() {
  try {
    const categoryCollection = client.db("ayeshaAutoReseller").collection("categories");
// add a categories to db
app.post('/addcategory',async (req,res) =>{
  const category = req.body;
  const result = await categoryCollection.insertOne(category);
  res.send(result);
})

// read category from db
app.get('/categories', async( req,res) =>{
  const query = {};
  const cursor = categoryCollection.find(query);
  const category = await cursor.toArray();
  res.send(category)
})
 
  } finally {
  }
}
run().catch((err) => console.log(err));

app.get("/", (req, res) => {
  res.send("Ayesha Auto Reseller server is running");
});

app.listen(port, () => {
  console.log(`Ayesha Auto Reseller server running on ${port}`);
});
