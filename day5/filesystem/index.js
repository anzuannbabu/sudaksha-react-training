//import file system lib
const fs = require('fs')

//a function with the logic to create a simple file into the filesystem
let fileWrite = () => {
    //let write the file content here
    let str = "this is the file content to be written to a file on "
    fs.writeFile('./filename.txt', str + new Date(), (err) => {
        if (!err) {
            console.log("file has been created!")
        } else {
            console.log(err);
            throw err;
        }
    })
}

fileWrite();

//now lets try to read a file
const fileName = "./filename.txt"
const txtEncoding = "utf8"
fs.readFile(fileName, txtEncoding, (err,data) => {
    if(!err) {
        console.log("file content", data)
    } else {
        console.log(err);
    }
})