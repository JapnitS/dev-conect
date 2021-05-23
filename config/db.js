require('dotenv').config();
const MongoClient = require('mongodb').MongoClient;
const MongoOwner = process.env.MONGODB_OWNER;
const MongoSecret = process.env.MONGODB_SECRET;
const uri = `mongodb+srv://${MongoOwner}:${MongoSecret}@cluster0.l3don.mongodb.net/github-auth-project?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });




const connectDB = async() => {
    
    await client.connect(err => {
    
      const collection = client.db("sample_airbnb").collection("listingsAndReviews");
      console.log("connection to mongodb established...")
      var query = { name: "Ribeira Charming Duplex" };
      collection.find(query).toArray(function(err, result) {
        if (err) throw err;
        console.log(result);
        client.close();
    });

    });
}
    
    



module.exports = connectDB;
