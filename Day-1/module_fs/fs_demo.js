const fs = require("fs")
const path = require("path")

// File Read
// fs.readFile("Day-1/module_fs/text.txt", (err,data) =>{
//     if (err) {
//         console.log(err);
//     } else {
//         console.log(data.toString());
//     }
// })

// File Write

// fs.writeFile("./text1.txt", "Hello World!", (err) =>{
//     if (err) {
//         console.log(err);
//     } else {
//         console.log("File Written Successfully")
//     }
// })

//File Append
// const data = "\nMy name is Siddhesh"
// fs.appendFile("./text1.txt", data, (err)=>{
//     if (err) {
//         console.log(err);
//     } else {
//         console.log("File Appended Successfully");
//     }
// })

// File Delete
const filePath = path.join(__dirname, "text2.txt");

fs.unlink(filePath, (err)=>{
    if (err) {
        console.log(err);
    } else {
        console.log("File Deleted Successfully")
    }
})