const app = require("express")();
const http = require("http").Server(app);

const io = require("socket.io")(http);

let PORT = process.env.PORT || "7000";


app.get('/', function(req, res) {
  res.render("index.ejs");
});


io.on('connection', (socket) => {

  socket.on('send-message', (msg) => {
    socket.broadcast.emit("receive-msg",msg);
  });

});


http.listen("7000",()=>{
  console.log("http://localhost:" + PORT);
})