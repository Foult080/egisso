const express = require('express');
const app = express();
const path = require("path");



//use client directory
app.use(express.static("client/build"));
app.use(express.json({ extended: false }));

//main controller
app.use('/api/controller', require('./routes/controller'));

//open react landing
/*
app.get("*", (req,res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
});
*/

//initial port to start
const PORT = process.env.PORT || 5000;

//server app
app.listen(PORT, () => console.log(`Server is running on ${PORT}`));