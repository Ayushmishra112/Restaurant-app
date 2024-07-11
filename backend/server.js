const express = require('express');
const cors = require('cors');
const app = express();
const data = require('./meals.json');
const port = 8000;

app.use(cors());

app.get('/api/meals', (req, res) => {
    res.json(data.meals);
});

app.get('/api/tags', (req, res) => {
    res.json(data.labels);
});

app.listen(port, () => {
    console.log(`server is running on https://localhost:${port}`);
});
