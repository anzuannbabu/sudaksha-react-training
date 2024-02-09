class Car {     //parent, super, base
    color:string   
    
    constructor(color:string) {   
       this.color = color  
    }  
    show() :void{
        console.log("in parent..")
    } 
 }   
 class Audi extends Car {    //child, sub, derived
     price: number  
     constructor(color: string, price: number) {  
         super(color);  
         this.price = price;  
     }  
     display():void {  
         console.log("Color of Audi car: " + this.color);  
         console.log("Price of Audi car: " + this.price);  
     }  
 }  
 let c=new Car("red") //parent
 c.show()
 let o = new Audi(" Black", 8500000 );   //child
 o.display();