// external imports
const mongoose = require("mongoose");
require('dotenv').config()

async function dbConnect() {
  // use mongoose to connect this app to our database on mongoDB using the DB_URL (connection string)
  mongoose
    .connect(
        process.env.DB_URL,
      {
       // this is for ensuring wether connection is done correctly
        useNewUrlParser: true,
        useUnifiedTopology: true,
      
      }
    )
    .then(() => {
      console.log("Successfully connected to MongoDB Atlas!");
    })
    .catch((error) => {
      console.log("Database is not connected!");
      console.error(error);
    });
}

module.exports = dbConnect;