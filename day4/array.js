var age=30
console.log(age)
var fun1=()=> {
    let score=80
    console.log(age)
    //let score=88
    score=88
    console.log("score"+score)
}
var age=90
console.log(age)
//console.log(score)
const city='hyderabad'
console.log(city)
//const city='chennai'
//city='chennai'


var courses = ["nodejs","mongo","reactjs"];

console.log(...courses.keys())
console.log(...courses.entries())


var courses=["nodejs","react","mongodb"]
console.log(courses.length)

console.log(courses.indexOf("react"))
console.log(courses.push("expressjs"))
console.log(courses.at(2))
console.log(courses.join("-"))
console.log(courses.shift())
delete courses[1]
console.log(courses.length)

const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citrus = fruits.slice(1,3);
console.log(citrus)

const fruits1 = ["Banana", "Orange", "Apple", "Mango"];
fruits1.splice(2, 0, "Lemon", "Kiwi");
console.log(fruits1)

console.log(fruits1.sort())