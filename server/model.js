const mongoose=require("mongoose");

const userschema= new mongoose.Schema({
    knowledge:{type:String,required:true},
    learn:{type:String,required:true},
    firstname:{type:String,required:true},
    lastname:{type:String,required:true},
    areacode:{type:Number,required:true},
    number:{type:Number,required:true},
    email:{type:String,required:true},
    occupation:{type:String,required:true},
    company:{type:String,required:true},
    job:{type:String,required:true},
    dates:{type:String,required:true},
    payment:{type:String,required:true},
    extra:{type:String,required:false},
    findus:{type:String,required:true},
    
})

const usermodel=mongoose.model('model',userschema);

module.exports=usermodel;

