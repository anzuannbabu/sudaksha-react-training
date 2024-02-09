var map = new Map();  
    map.set('John', 'author');  
    map.set('arry', 'publisher');  
    map.set('Mary', 'subscriber');  
    map.set('James', 'Distributor');  

console.log(map.size);  
console.log(map); 
var colors = new Map([   
    ['1', 'Red'],   
    ['2', 'Green'],   
    ['3', 'Yellow'],  
    ['4', 'Violet']   
 ]);  
for (let key of colors.keys()) {  
    console.log(key);  
} 
 for (let col of colors.values()) {  
     console.log(col);  
 }  
   
 console.log(" ")  
   
 for(let col of colors.entries())   
 console.log(`${col[0]}: ${col[1]}`);