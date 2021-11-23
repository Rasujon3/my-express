// Express...
const express = require('express');
const app = express();
const studentRouter = require('./routers/studentRouter');

app.use(express.json()); // post/put/patch => json obj =>req.body
app.use('/api/students', studentRouter);


// app.get()
// app.post()
// app.patch()
// app.put()

app.get('/', (request, response) => {
    response.send("Hello from express js!");
});



const port = 5000;
app.listen(port, () => {
    console.log(`Listing on port ${port}...`);
})