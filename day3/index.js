const express = require('express')

const app = express();

app.get("/books",allbooks,(req,res)=>{
return res.send("books");
})

app.get("/books/:name", singlebook,(req,res) =>{
    return res.send(req.name);
})

function singlebook(req,res,next){
   req.name = req.params.name;
   if(req.name == "HarryPotter" || req.name == "GameOfThornes"){
       return next();
   } else {
    //    console.log("books not found"); both can work
       return res.send("books not found");
   }
}

function allbooks(req,res,next){
console.log("fetching all books")
return next();
}

app.listen(5000,()=>{
    console.log("listening on port 5000")
})