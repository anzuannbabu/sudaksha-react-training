//typescript - angular
//es6 - react
//npm install -g typescript
//app.ts
// compile ts file -> create .js file
//tsc.cmd -v greet.ts
//run the file
// node greet.js
var Greeting = /** @class */ (function () {
    function Greeting() {
        console.log("class has been initialized");
    }
    Greeting.prototype.greet = function () {
        console.log("Welcome toTypescript");
    };
    Greeting.prototype.show = function () {
        console.log("my show function");
        return 1;
    };
    return Greeting;
}());
//class definition
/*object creation for a class  */
var obj = new Greeting();
obj.show();
obj.greet();
//TODO: to run this code run:- tsc greet.ts --outDir dist && node  dist/greet.js
//TODO: this will generate js file in dist and run the dist 
