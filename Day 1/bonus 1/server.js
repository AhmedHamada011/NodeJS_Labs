
var http = require("http");
var port = "7000";

var httpServer = http.createServer((req,res)=>{
  var reqUrl = req.url;
  if(reqUrl !== "/favicon.ico")
  {
    let reqArray = reqUrl.split("/").slice(1,);

    let op = reqArray[0];
    let numbers = reqArray.splice(1,)
    numbers = numbers.map((strNum)=> parseInt(strNum));

    switch (op) {
      case "add":
        var result = 0;
        numbers.forEach(element => {result += element});
        res.write(`<h1>${numbers.join(" + ")} = ${result}</h1>`);
        break;
      case "sub":
        var result = 0;
        numbers.forEach(element => {result -= element});
        res.write(`<h1>${numbers.join(" - ")} = ${result}</h1>`);
        break;
      case "div":
        if(numbers[0] !== 0){
        var result = 1;
        numbers.forEach(element => {result /= element});
        res.write(`<h1>${numbers.join(" / ")} = ${result}</h1>`);
      }else{
        res.write(`<h1>invalid division operation</h1>`);
      }
        break;
      case "mul":
        var result = 1;
        numbers.forEach(element => {result *= element});
        res.write(`<h1>${numbers.join(" * ")} = ${result}</h1>`);
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


