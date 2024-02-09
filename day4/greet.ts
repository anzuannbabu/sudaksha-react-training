//typescript - angular
//es6 - react
//npm install -g typescript
//app.ts
// compile ts file -> create .js file
//tsc.cmd -v greet.ts
//run the file
// node greet.js
class Greeting
{
    constructor() {
        console.log("class has been initialized");
    }

    greet() : void
     {
    console.log("Welcome toTypescript");
     }
     show():number {
        console.log("my show function")
        return 1;
     }

}
//class definition
/*object creation for a class  */
var obj=new Greeting();
obj.show()
obj.greet();


//TODO: to run this code run:- tsc greet.ts --outDir dist && node  dist/greet.js
//TODO: this will generate js file in dist and run the dist 