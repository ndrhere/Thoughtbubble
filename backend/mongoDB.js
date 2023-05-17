const mongoose = require("mongoose");
const mongoURL = "mongodb://127.0.0.1:27017/iDairy?directConnection=true";

async function connectToMongo() {
  try {
    await mongoose.connect(mongoURL);
    console.log("MongoDB connected successfully");
  } catch (error) {
    console.log("Error connecting MongoDB" + error);
  }

}

module.exports = connectToMongo;
