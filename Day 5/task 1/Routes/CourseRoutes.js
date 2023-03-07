const express = require("express");
const CourseController = require("../Controllers/CourseController");
let router = express.Router();

router.get("/",CourseController.getAllCourses);

router.post("/create",CourseController.addNewCourse);

router.delete("/:id",CourseController.deleteCourseByID);


module.exports = router;