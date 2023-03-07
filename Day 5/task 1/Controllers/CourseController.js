
let CoursesModel = require("../Models/CourseModel");

let getAllCourses = async (req,res) =>{
  let coursesJson =  await CoursesModel.find();
  res.json(coursesJson);
}

let addNewCourse = async (req,res) => {
  let newCourse = req.body;
  let newCourseModal = new CoursesModel(newCourse);
  await newCourseModal.save();
  res.json(newCourseModal);
}


let deleteCourseByID = async (req,res)=> {
  await CoursesModel.findByIdAndDelete(req.params.id);
  res.json("deleted successfully");
}

module.exports = {
  getAllCourses,
  addNewCourse,
  deleteCourseByID
}