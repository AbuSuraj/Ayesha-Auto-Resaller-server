const { MongoClient, ServerApiVersion } = require('mongodb');
const mongoose = require('mongoose');
async function dbConnect(){
  try{
     mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.sc93kvm.mongodb.net/ayeshaAutoReseller?retryWrites=true&w=majority`)
     .then(()=>{
      console.log('db connected')
     })
     .catch((err)=>{
      console.log(err)
     })
    // const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.sc93kvm.mongodb.net/?retryWrites=true&w=majority`;

    // const client =  new MongoClient(uri, {
    //   useNewUrlParser: true,
    //   useUnifiedTopology: true,
    //   serverApi: ServerApiVersion.v1,
    // });
    // await client.connect();
    // console.log('suraj')
    // return client
  }  catch (error) {
    console.error('Error connecting to the database:', error);
    throw error;
}
}

module.exports = { dbConnect };