
let http = require("http");
let fs = require("fs");
let jsonFile = "clients.json";
let port = "7000";

let mainFileHTML = fs.readFileSync("clientSide/main.html").toString();
let styleCss = fs.readFileSync("clientSide/style.css").toString();
let bootStrapCss = fs.readFileSync("clientSide/bootstrap.css").toString();
let bootStrapJs = fs.readFileSync("clientSide/bootstrap.js").toString();
let myIcon = fs.readFileSync("clientSide/favicon.ico");
let welcomeFileHTML = fs.readFileSync("clientSide/welcome.html").toString();

let profileFileHTML = fs.readFileSync("clientSide/profile.html").toString();
let clientsFileHTML = fs.readFileSync("clients.json").toString();

var httpServer = http.createServer((req,res)=>{
  let reqUrl = req.url;
  let reqMethod = req.method;

  //#region GET
  if(reqMethod == "GET")
  {
    switch(reqUrl){
      case "/main.html":
        res.write(mainFileHTML);
        break;

      case "/style.css":
        res.write(styleCss);
        break;

      case "/bootstrap.css":
        res.write(bootStrapCss);
        break;

      case "/bootstrap.js":
        res.write(bootStrapJs);
        break;

      case "/favicon.ico":
        res.writeHead(200,"ok",{"content-type":"image/vnd.microsoft.icon"})
        res.write(myIcon)
        break;

      case "/welcome.html":
        res.write(welcomeFileHTML)
        break;
      case "/clients.json":
        res.write(clientsFileHTML);
        break;


      default:

        break;
      
    }
    res.end();
  }
  //#endregion

  //#region POST
  else if(reqMethod == "POST")
  {
    switch (reqUrl) {
      case "/profile.html":
        req.on("data",(data)=>{

          const parsedData = new URLSearchParams(data.toString());
          const dataObj = {};
          for (var pair of parsedData.entries()) {
            dataObj[pair[0]] = pair[1];
          }
          
          name = dataObj["name"];
          email = dataObj["email"];
          //email = formData[1].split("=")[1].replace("%40",'@');
          mobile = dataObj["mobile"];
          address = dataObj["address"];
    
        });
    
        req.on("end",()=>{
    
          profileFileHTML = profileFileHTML.replace("{clientName}",name)
          profileFileHTML = profileFileHTML.replace("{MobileNumber}",email);
          profileFileHTML = profileFileHTML.replace("{Email}",mobile)
          profileFileHTML = profileFileHTML.replace("{Address}",address)
          res.write(profileFileHTML);
    
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
    
          res.end();
        })
        break;    
      default:
        break;
    }

  }
  //#endregion

});


httpServer.listen(port,function () {
  console.log(`http://localhost:${port}`);
})