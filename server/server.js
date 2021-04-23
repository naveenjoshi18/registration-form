const express = require('express');
const bodyparser =require("body-parser");
const cors=require("cors");
const mongoose=require('mongoose');
const app=express();
const route=require('./routes')
const User=require('./model')


const mongo_url='mongodb+srv://naveen:naveen450@clusternaveen.5gi7h.mongodb.net/registeration?retryWrites=true&w=majority'
mongoose.connect(mongo_url,{useNewUrlParser: true, useUnifiedTopology: true})


app.use(bodyparser.json())
app.use(cors());
app.use("/",route);
const port=process.env.PORT || 3000;

app.listen(port,()=> {
    console.log("Server is running at: "+ port);
})