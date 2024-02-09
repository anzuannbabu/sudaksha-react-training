const fs = require('fs')

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