const mongoose = require("mongoose");

const connect = ()=>{
    return mongoose.connect(
        "mongodb+srv://aviviral:aviviral@cluster0.cbdyo.mongodb.net/validator?retryWrites=true&w=majority"
    )
}
module.exports=connect;