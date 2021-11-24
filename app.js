// Express...
const express = require('express');
const app = express();
const studentRouter = require('./routers/studentRouter');
const userRouter = require('./routers/userRouter');
const authRouter = require('./routers/authRouter');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/my-student-2', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log("Connected to MongoDB!"))
    .catch(err => console.error("MongoDB Connection Failed!"));

// req,res

app.use(express.json()); // post/put/patch => json obj =>req.body

app.use('/api/students', studentRouter);
app.use('/api/user', userRouter);
app.use('/api/auth', authRouter);

app.get('/', (req, res) => {
    res.send("Hello from express js!");
});

const port = 5000;
app.listen(port, () => {
    console.log(`Listing on port ${port}...`);
})

// Mongooose -> Model -> Collection
// Import Model
// Connect Database

// Authentication -> Login
// User-> table/collection -> email,password

// Authorization -> Access to content/data