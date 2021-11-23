// Express...
const express = require('express');
const app = express();
const morgan = require('morgan');
const studentRouter = require('./routers/studentRouter');

// req,res

app.use(express.json()); // post/put/patch => json obj =>req.body

app.use(express.urlencoded({ extended: true })); // id = 1 & name = sujon

app.use(express.static('public'));

app.use(morgan('short'));

app.use((req, res, next) => {
    console.log("I am middleware 1!");
    next();
});
app.use((req, res, next) => {
    console.log("I am middleware 2!");
    next();
});
app.use('/api/students', studentRouter);

app.get('/about', () => { });

app.get('/', (req, res, next) => {
    // res.send("Another Response!");
    next();
});

app.get('/', (request, response) => {
    console.log("I am get Request Middleware!");
    response.send("Hello from express js!");
});





const port = 5000;
app.listen(port, () => {
    console.log(`Listing on port ${port}...`);
})