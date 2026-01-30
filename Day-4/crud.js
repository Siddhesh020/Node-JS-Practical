const mongoose = require("mongoose");
const { connectDb } = require("./db.js");

// Call connectDb
connectDb();

// Create Schema
const empSchema = mongoose.Schema({
  id: Number,
  name: String,
  sal: Number,
});

// Create Model
const empModel = mongoose.model("emp", empSchema);

// Show Data
async function showData() {
  try {
    const result = await empModel.find();
    console.log(result);
  } catch (error) {
    console.log(error);
  }
}
showData();

// Insert Data
async function insertData(eid, ename, esal) {
    try {
        // const data = new empModel({id: eid, name: ename, sal: esal});
        // const result = await data.save();
        const result = await empModel.insertOne({"id": eid, "name": ename, "sal": esal});
        console.log(result);
    } catch (error) {
        console.log(error);
    }
}
// insertData(2, "Mark", 20000);

// Update Data
async function updateData(eid, esal){
    try {
        const result = await empModel.updateOne({id: eid}, {$set: {sal : esal}});
        console.log(result);
    } catch (error) {
        console.log(error);
    }
}
// updateData(2, 25000);

// Delete Data
async function deleteData(eid) {
    try {
        const result = await empModel.deleteOne({id: eid});
        console.log(result);
    } catch (error) {
        console.log(error);
    }
}
// deleteData(1);

