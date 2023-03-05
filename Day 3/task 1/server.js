
const express = require("express");
const app = express();

const path = require("path");
const fs = require("fs");

let PORT = process.env.PORT || "7000";

let profileFileHTML = fs.readFileSync("Client/profile.html").toString();
let jsonFile = "clients.json";




app.get("/main.html",(req,res)=>{
  res.sendFile(path.join(__dirname + "/Client/main.html"));

});


app.get("/style.css",(req,res)=>{
  res.sendFile(path.join(__dirname + "/Client/style.css"));
});


app.get("/bootstrap.css",(req,res)=>{
  res.sendFile(path.join(__dirname + "/Client/bootstrap.css"));
});


app.get("/bootstrap.js",(req,res)=>{
  res.sendFile(path.join(__dirname + "/Client/bootstrap.js"));
});

app.get("/favicon.ico",(req,res)=>{
  res.sendFile(path.join(__dirname + "/Client/favicon.ico"));
});


app.get("/welcome.html",(req,res)=>{
  res.sendFile(path.join(__dirname + "/Client/welcome.html"));
});

app.get("/clients.json",(req,res)=>{
  res.sendFile(path.join(__dirname + "/clients.json"));
});


app.post("/profile.html",(req,res)=>{

  req.on("data",(data)=>{

    const parsedData = new URLSearchParams(data.toString());
    const dataObj = {};

    for (var pair of parsedData.entries()) {
      dataObj[pair[0]] = pair[1];
    }

    name = dataObj["name"];
    email = dataObj["email"];
    mobile = dataObj["mobile"];
    address = dataObj["address"];

  });

  req.on("end",()=>{

    profileFileHTML = profileFileHTML.replace("{clientName}",name)
    profileFileHTML = profileFileHTML.replace("{MobileNumber}",email);
    profileFileHTML = profileFileHTML.replace("{Email}",mobile);
    profileFileHTML = profileFileHTML.replace("{Address}",address);


    let user = {
      name,
      email,
      mobile,
      address
    }

    let readJson = fs.readFileSync(jsonFile,"utf-8");

    let jsonArray = [];
    if(readJson === ""){

      jsonArray.push(user);
      fs.appendFileSync(jsonFile,JSON.stringify(jsonArray));

    }else{

      let jsonArray = fs.readFileSync(jsonFile,"utf-8");
      jsonArray = JSON.parse(jsonArray);

      jsonArray.push(user);
      fs.writeFileSync(jsonFile,JSON.stringify(jsonArray))

    }

    res.send(profileFileHTML);

  })
});

app.all("*",(req,res)=>{
  res.send("Page Not Found");
})

app.listen(PORT,() =>{
  console.log(console.log("http://localhost:" + PORT ));
});