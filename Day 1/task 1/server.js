
var http = require("http");
var port = "5000";

var httpServer = http.createServer((req,res)=>{
  var reqUrl = req.url;
  if(reqUrl !== "/favicon.ico")
  {
    let reqArray = reqUrl.split("/").slice(1,);

    let num1 = Number(reqArray[1]);
    let num2 = Number(reqArray[2]);
    let op = reqArray[0];

    switch (op) {
      case "add":
        res.write(`<h1>${num1} + ${num2} = ${num1 + num2}</h1>`);
        break;
      case "sub":
        res.write(`<h1>${num1} - ${num2} = ${num1 - num2}</h1>`);
        break;
      case "div":
        if(num2 !== 0)
          res.write(`<h1>${num1} / ${num2} = ${num1 / num2}</h1>`);
        break;
      case "mul":
        res.write(`<h1>${num1} * ${num2} = ${num1 * num2}</h1>`);
        break;    
      default:
        res.write("invalid operation");
        break;
    }
  }
  res.end();
});





httpServer.listen(port,function () {
  console.log(`Listening to port ${port}`);
})


