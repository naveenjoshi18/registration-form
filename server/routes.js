const express=require("express");
const route=express.Router();
const User = require('./model');

route.get('/users',(req,res)=>{
    res.send("Hello from server");
})


route.post("/users",async(req,res)=>{
    console.log(req.body);
    try{
        let user= new User();
        user.knowledge=req.body.knowledge;
        user.learn=req.body.learn;
        user.firstname=req.body.firstname;
        user.lastname=req.body.lastname;
        user.areacode=req.body.areacode;
        user.number=req.body.number;
        user.email=req.body.email;
        user.occupation=req.body.occupation;
        user.company=req.body.company;
        user.job=req.body.job;
        user.dates=req.body.dates;
        user.payment=req.body.payment;
        user.extra =req.body.extra;
        user.findus=req.body.findus;
        await user.save();
        res.json({message:"Success",user})
    }catch(err){
        res.status(400).json({errMsg:err.message});
    }
})



module.exports=route;