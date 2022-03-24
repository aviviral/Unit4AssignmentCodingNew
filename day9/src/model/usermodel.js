const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    first_name:{type:String,require:true}, 
    last_name:{type:String,require:true}, 
    email:{type:String,require:true,unique:true}, 
    pincode:{type:Number,require:true}, 
    age:{type:Number,require:true}, 
    gender:{type:String,require:true}
},{
    versionKey:false,
    timestamps:true

})

const user=mongoose.model("user",userSchema)

module.exports=user