const express = require ("express");
const { router } = require("../app");
const route = express.Router();

router('/register').get((req,res)=>{
    res.sendFile(__dirname  + '/register.html')
    
 }).post ((req,res)=>{
console.log(req.body);
res.send("Registartion sucessfully compleated!");
});


module.exports= router;