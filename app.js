const express = require('express');
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const userRouter = require('./routes/user.route');
// const port = 3000

// middleware
app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
    res.send('Hello World!')
});

// user create 
app.use('/api/v1/user', userRouter);



module.exports = app;
