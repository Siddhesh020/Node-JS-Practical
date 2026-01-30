const mongoose = require("mongoose");

// Connection Function
const connectDb = () => {
  mongoose.connect("mongodb://localhost:27017/Emplyoee_DB").then(() => {
    console.log("Database Connected...");
    
  }).catch((err) => {
    console.log(err);
    
  });
};

module.exports = {connectDb};