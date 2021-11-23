const express = require('express');
const { student, Student } = require('../models/students');
const router = express.Router();


const studentList = async (req, res) => {
    const students = await Student.find()
        .sort({ name: 1 });
    res.send(students);
}

const newStudent = (req, res) => {
    const student = req.body;

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