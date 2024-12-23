const prisma = require("../prisma/index");

//creating new student
exports.createRecord = async (req, res) => {
  try {
    const {
      studentName,
      cohort,
      course1,
      course2,
      dateJoined,
      lastLogin,
      status,
    } = req.body;

    try {
      const student = await prisma.students.create({
        data: {
          studentName,
          cohort,
          course1,
          course2,
          dateJoined,
          lastLogin,
          status,
        },
      });
      res.status(201).json(student);
    } catch (error) {
      console.error("Error adding student:", error);
      res.status(500).json({ error: "Failed to add student" });
    }

    res.status(200);
  } catch (error) {
    throw new Error(error);
  }
};


// Reading all available records 
exports.getAllRecords = async (req, res) => {
  try {
    const students = await prisma.students.findMany();
    res.status(200).json(students);
  } catch (error) {
    console.error("Error fetching students:", error);
    res.status(500).json({ error: "Failed to fetch students" });
  }
};


// Updating a record
exports.updateRecord = async (req, res) => {
  const { id } = req.params;
  const {
    studentName,
    cohort,
    course1,
    course2,
    dateJoined,
    lastLogin,
    status,
  } = req.body;
  try {
    const updatedStudent = await prisma.students.update({
      where: { id: parseInt(id) },
      data: {
        studentName,
        cohort,
        course1,
        course2,
        dateJoined,
        lastLogin,
        status,
      },
    });
    res.status(200).json(updatedStudent);
  } catch (error) {
    console.error("Error updating student:", error);
    res.status(500).json({ error: "Failed to update student" });
  }
};


// Deleting a record
exports.deleteRecord = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedStudent = await prisma.students.delete({
      where: { id: parseInt(id) },
    });
    res.status(200).json(deletedStudent);
  } catch (error) {
    console.error("Error deleting student:", error);
    res.status(500).json({ error: "Failed to delete student" });
  }
};
