// Express...
const express = require('express');
const db = require('./db');
const app = express();

app.use(express.json());

// app.get()
// app.post()
// app.patch()
// app.put()

app.get('/', (request, response) => {
    response.send("Hello from express js!");
})

// app.get('/another', (request, response) => {
//     response.send("I am another response!");
// })

// app.get('/students', (request, response) => {
//     response.send(JSON.stringify(["Rahim", "Karim"]));
// })

app.get('/api/students', (req, res) => {
    db.getDbStudents()
        .then(students => {
            res.send(students);
        })
});

app.post('/api/students', (req, res) => {
    const student = req.body;
    db.getDbStudents()
        .then(students => {
            students.push(student);
            db.insertDbStudent(students)
                .then(data => {
                    res.send(student);

                })
        })
});

app.get('/api/students/:id', (req, res) => {
    const id = parseInt(req.params.id);
    db.getDbStudents()
        .then(students => {
            const student = students.find(s => s.id === id);
            if (!student) res.status(404).send("No student found with this id!");
            else res.send(student);
        });
});

app.put('/api/students/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const updatedData = req.body;
    db.getDbStudents()
        .then(students => {
            const student = students.find(s => s.id === id);
            if (!student) res.status(404).send("No student found with this id!");
            else {
                const i = students.findIndex(s => s.id === id);
                students[i] = updatedData;
                db.insertDbStudent(students)
                    .then(msg => res.send(updatedData));
            }
        });
});

app.delete('/api/students/:id', (req, res) => {
    const id = parseInt(req.params.id);
    db.getDbStudents()
        .then(students => {
            const student = students.find(s => s.id === id);
            if (!student) res.status(404).send("No student found with this id!");
            const updatedStudents = students.filter(s => s.id !== id);
            db.insertDbStudent(updatedStudents)
                .then(msg => res.send(student))
        });
})

const port = 5000;
app.listen(port, () => {
    console.log(`Listing on port ${port}...`);
})