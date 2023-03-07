
//#region Config
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 7000;
const logging = require("./MiddleWares/logging");
const StudentRoutes = require("./Routes/StudentRoutes");
const CourseRoutes = require("./Routes/CourseRoutes");
//#endregion

//#region MiddleWares
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(logging);
//#endregion


//#region Student
app.use("/api/students",StudentRoutes)
//#endregion


//#region Courses
app.use("/api/courses",CourseRoutes)
//#endregion









app.listen(PORT,()=>{
  console.log("http://localhost:" + PORT);
})