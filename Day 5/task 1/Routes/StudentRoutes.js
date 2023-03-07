const express = require("express");
const StudentController = require("../Controllers/StudentController");
let router = express.Router();

router.get("/",StudentController.getAllStudents);

router.get("/:courseName/courses",StudentController.getStudentsByCourseName);


router.post("/create",StudentController.addNewStudent);

router.delete("/:id",StudentController.deleteStudentByID);


module.exports = router;