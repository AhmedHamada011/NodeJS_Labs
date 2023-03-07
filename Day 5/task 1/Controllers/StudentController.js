
let StudentsModel = require("../Models/StudentModel");

let getAllStudents = async (req,res) =>{
  let studentsJson =  await StudentsModel.find();
  res.json(studentsJson);
}


let getStudentsByCourseName = async (req,res) =>{
  let studentsJson =  await StudentsModel.find({"courses.title":req.params.courseName});
  res.json(studentsJson);
}

let addNewStudent = async (req,res) => {
  let newStudent = req.body;
  let newStudentModal = new StudentsModel(newStudent);
  await newStudentModal.save();
  res.json(newStudentModal);
}


let deleteStudentByID = async (req,res)=> {
  await StudentsModel.findByIdAndDelete(req.params.id);
  res.json("deleted successfully");
}

module.exports = {
  getAllStudents,
  getStudentsByCourseName,
  addNewStudent,
  deleteStudentByID
}