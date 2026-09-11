const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());
app.use(express.json());
const mongoose = require("mongoose");
const schema = new mongoose.Schema({
    name:{type:String,required:true},
    father_name:{type:String,required:true},
    date_of_birth:{type:Date,required:true},
    date_of_joining:{type:Date,required:true},
    salary:{type:Number},
    department_name:{type:String},
    Address:{type:String},
    designation:{type:String}
})
const employee_master = mongoose.model("employees",schema);
async function connectdb(){
    try{
        const connection = await mongoose.connect("mongodb://localhost:27017/employee_master");
        console.log("database established");

    }
    catch(err){
        console.log(err.message);
    }
}
connectdb();
app.post("/api/send",async(req,res)=>{
    const{name,father_name,dob,doj,salary,address,designation,department} = req.body;
    try{
          if(!name){
        return res.status(400).json({message:"name is not present"});
       
    }
    if(!father_name){
         return res.status(400).json({message:"fathername is not present"});
    }
    if(!dob){
       return res.status(400).json({message:"dob is not present"});
    }
    if(!doj){
       return res.status(400).json({message:"doj is not present"});
    }
    if(!salary){
        return res.status(400).json({message:"salary is not present"});
    }
    if(!address){
        return res.status(400).json({message:"address is not present"});
    }
    if(!designation){
         return res.status(400).json({message:"desgination is not present"});
    }
    if(!department){
         return res.status(400).json({message:"department is not present"});
    }
    const data = new employee_master({
        name:name,
        father_name:father_name,
        date_of_birth:dob,
        date_of_joining:doj,
        salary:salary,
        department_name:department,
        Address:address,
        designation:designation
    });
    await data.save();
    return res.status(200).json({success:true,message:"hogaya safe"});


    }
    catch(err){
        return res.status(400).json({success:false,message:` bahi fail kar gaya error:${err.message}`});
    }
  
});
app.listen(3000,()=>{
    console.log("port running on 3000");
})