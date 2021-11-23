const express = require('express');
const { student, Student } = require('../models/students');
const router = express.Router();


const studentList = async (req, res) => {
    const students = await Student.find()
        .sort({ name: 1 });
    res.send(students);
}

const newStudent = async (req, res) => {
    const student = new Student(req.body)
    try {
        const result = await student.save();
        res.send(result);
    } catch (err) {
        const errMsgs = [];
        for (field in err.errors) {
            errMsgs.push(err.errors[field].message)
        }
        return res.status(400).send(errMsgs);
    }

}

const studentDetail = (req, res) => {
    const id = parseInt(req.params.id);

}

const studentUpdate = (req, res) => {
    const id = parseInt(req.params.id);
    const updatedData = req.body;

}

const studentDelete = (req, res) => {
    const id = parseInt(req.params.id);

}

router.route('/')
    .get(studentList)
    .post(newStudent);

router.route('/:id')
    .get(studentDetail)
    .post(studentUpdate)
    .delete(studentDelete);

module.exports = router;