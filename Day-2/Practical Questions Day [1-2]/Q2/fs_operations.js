const fs = require("fs")
const path = require("path")

const filePath = path.join("Day-2", "Practical Questions Day [1-2]", "Q2", "text1.txt");

//File Write
// fs.writeFile(filePath, "Hello World!", (err) =>{
//     if (err) {
//         console.log(err);
//     } else {
//         console.log("File Written Successfully")
//     }
// })

// File Read
// fs.readFile(filePath, (err,data) =>{
//     if (err) {
//         console.log(err);
//     } else {
//         console.log(data.toString());
//     }
// })

//File Append
// const data = "\nMy name is Siddhesh"
// fs.appendFile(filePath, data, (err)=>{
//     if (err) {
//         console.log(err);
//     } else {
//         console.log("File Appended Successfully");
//     }
// })

// // File Delete
fs.unlink(filePath, (err)=>{
    if (err) {
        console.log(err);
    } else {
        console.log("File Deleted Successfully")
    }
})