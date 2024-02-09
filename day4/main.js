const { sayHello } = require("./utils")

sayHello("Jane");


/* rest params */
var show = (s, ...a) => {   //rest parameter ... function   vc spread operator ... arrays
    let sum = 0;
    for (let i of a) {
        sum += i;
    }
    console.log("Name: " + s + " Sum = " + sum);
}

show(10, 20, 30, 40)
show(10, 20)
show(4, 2, 4, 5, 6, 7, 2, 1, 3, 4, 8, 9)
show("Nasur", 45, 34, 23) //fixed argument, varaiable length arg - rest parameter