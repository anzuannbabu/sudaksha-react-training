

const fs = require("fs")

const logUser = (username) => {
    //check if the user exists
    fs.readFile('users.txt', 'utf8', (err, data) => {
        if (!err) {
            // console.log(data);
            //split the text into array
            const names = data.toString().split(",")

           // console.log(names)
            //search the user
            const user = names.includes(username)

            if(user) {
                //user found
                console.log(username + " already exists")
            } else {
                //lets add the user to the list
                names.push(username)

                fs.writeFile('users.txt',names.join(","),(err) => {
                    if(!err) {
                        console.log(username + " has been added successfully")
                    } else {
                        console.log("failed to add user ["+username+"] to a file, error details = " + err)
                    }
                })
            }
        } else {
            console.log("failed to read a file, error details = " + err)
        }
    })

   
}

logUser("Oliver")
logUser("John")
logUser("Sam")