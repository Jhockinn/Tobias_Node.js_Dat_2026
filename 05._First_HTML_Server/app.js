const express = require('express');
const app = express()

app.use(express.json());

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
})

let counter = 0;

app.get('/api/counter', (req, res) => {
    res.send({ data: ++counter });
});

const PORT = 8080;
app.listen(PORT, () => {
    console.log(`Server is running on: ${PORT}`)
})