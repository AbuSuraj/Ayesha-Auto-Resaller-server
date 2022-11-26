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

function verifyJWT(req, res, next) {

  const authHeader = req.headers.authorization;
  if (!authHeader) {
      return res.status(401).send('unauthorized access');
  }

  const token = authHeader.split(' ')[1];

  jwt.verify(token, process.env.ACCESS_TOKEN, function (err, decoded) {
      if (err) {
          return res.status(403).send({ message: 'forbidden access' })
      }
      req.decoded = decoded;
      next();
  })

}

async function run() {
  try {
    const categoryCollection = client.db("ayeshaAutoReseller").collection("categories");
    const productCollection = client.db("ayeshaAutoReseller").collection("products");
    const usersCollection = client.db("ayeshaAutoReseller").collection("users");
    const bookingsCollection = client.db("ayeshaAutoReseller").collection("bookings");
// add a categories to db
app.post('/addcategory',async (req,res) =>{
  const category = req.body;
  const result = await categoryCollection.insertOne(category);
  res.send(result);
})

// read category from db
app.get('/categories', async(req,res) =>{
  const query = {};
  const cursor = categoryCollection.find(query);
  const category = await cursor.toArray();
  res.send(category)
})

// add a product to db
app.post('/addproduct',async(req,res) =>{
  const product = req.body;
  const result = await productCollection.insertOne(product);
  res.send(result);
})

// read products from db
app.get('/category/:id', async( req,res) =>{
  const id = req.params.id;
  const query = { categoryId: id };
  const cursor = productCollection.find(query);
  const products = await cursor.toArray();
  res.send(products)
})
 // add users to db
app.post('/users',async(req,res) =>{
  const users = req.body;
  const result = await usersCollection.insertOne(users);
  res.send(result);
})
 // add bookings to db
app.post('/bookings',async(req,res) =>{
  const bookings = req.body;
  const result = await bookingsCollection.insertOne(bookings);
  res.send(result);
})

// Get all sellers
app.get('/sellers', async(req,res)=>{
   
  const query = {accountType: 'seller'};
  const cursor = usersCollection.find(query);
  const sellers = await cursor.toArray();
  res.send(sellers)

})

// delete a seller 
app.delete("/seller/:id", async (req, res) => {
  const id = req.params.id;
  const query = { _id: ObjectId(id) };
  const result = await usersCollection.deleteOne(query);
  res.send(result);
});

// Get all buyers
app.get('/buyers', async(req,res)=>{
   
  const query = {accountType: 'buyer'};
  const cursor = usersCollection.find(query);
  const buyers = await cursor.toArray();
  res.send(buyers)

})
// my products get api
app.get('/myproducts/seller/:email', async(req,res)=>{
   const email = req.params.email;
  const query = { email};
  const cursor = productCollection.find(query);
  const myproducts = await cursor.toArray();
  res.send(myproducts)

})
// my orders get api
app.get('/myorders/buyer/:email', async(req,res)=>{
   const email = req.params.email;
  const query = { email};
  const cursor = bookingsCollection.find(query);
  const myOrders = await cursor.toArray();
  res.send(myOrders)

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
