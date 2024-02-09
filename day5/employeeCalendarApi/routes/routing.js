const express = require('express');
const routing = express.Router();
const empLeaveService = require('../services/employeeLeave');

//---------------------------------------------------------------------------------------

//retreive all movies
routing.get('/EmpLeaves', (req, res) => {
	result = empLeaveService.getAll();
    res.json(result);
})

//retrieve particular movie
routing.get('/EmpLeaves/:empId',(req, res) => {
    empId = req.params.empId;
    console.log(empId)
	result = empLeaveService.getById(empId);
    if(result)
        res.json(result);
    else
        res.json("No details found!!")
})

//post method
routing.post('/EmpLeaves', (req, res) => {
   var body = JSON.stringify(req.body);
   result = empLeaveService.add(body);
    if(result)
        res.json("successfully requested");
    else
        res.json("Error!!")
    
})

//Delete
//moviename - to be deleted 
routing.delete('/EmpLeaves/:empId',(req,res) =>{
     empId   =req.params.empId;
     result = empLeaveService.delete(empId);
    if(result)
        res.json("leave request canceled");
    else
        res.json("Error!!")
})

//moviename to be updated , movie - key,value pair to be updated.
// routing.put('/Movie/:moviename/:key/:value',(req,res) =>{
//      moviename   =req.params.moviename;
//      key = req.params.key;
//      value = req.params.value;
//      result = movie.updateMovieDetails(moviename,key,value);
//     if(result)
//         res.json("successfully updated the movie");
//     else
//         res.json("Error!!")
// })


module.exports = routing; 
