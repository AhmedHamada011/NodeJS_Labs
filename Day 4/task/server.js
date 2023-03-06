const express = require("express");
const app = express();

// const ejs = require("ejs");

let PORT = process.env.PORT || "7000";


app.get("/",(req,res)=>{
  res.render("index.ejs",{userName:"ahmed"});
})


app.listen(PORT,()=>{console.log("http://localhost:" + PORT)})
