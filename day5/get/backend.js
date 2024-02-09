const express = require("express");
const path = require('path')

const app = express();

app.get("/", (req, res) => {
    res.sendFile(__dirname + '/index.html')
});

app.get("/send", (req, res) => {
    res.send("This is home page with post request.");
});

// PORT
const PORT = 3003;

app.listen(PORT, () => {
    console.log(`Server is running on PORT: ${PORT}`);
});