const { MongoClient, ServerApiVersion } = require('mongodb');
async function dbConnect(){
  try{
    const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.sc93kvm.mongodb.net/?retryWrites=true&w=majority`;

    const client =  new MongoClient(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      serverApi: ServerApiVersion.v1,
    });
    return client
  }  catch (error) {
    console.error('Error connecting to the database:', error);
    throw error;
}
}

module.exports = { dbConnect };