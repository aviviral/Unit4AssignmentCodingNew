const express = require("express");
const connect = require("./configs/db");

const app = express();

const Usercontroller = require("./controller/usercontroller")

app.use("user",Usercontroller)

app.listen(5000,async()=>{
    await connect();
    console.log("hurry baba");
})

