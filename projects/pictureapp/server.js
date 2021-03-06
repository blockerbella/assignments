const express = require("express");
const app = express();
const PORT = 2080;
require("dotenv").config();
const mongoose = require("mongoose");
const expressJwt = require("express-jwt");

app.use(express.json());

app.use("/", require("./userRouter"));


mongoose.connect('mongodb://localhost:27017/picture-app',{useNewUrlParser: true})
.then(()=> console.log("Connected to MongoDB"))
.catch(err => console.error(err));

app.use((err, req, res, next) => {
    console.error(err);
    if (err.name === "UnauthorizedError") {
        // express-jwt gives the 401 status to the err object for us
        res.status(err.status);
    }
    return res.send({ message: err.message });
 });
 
 app.use("/auth", require("./routes/auth"));
 app.use("/api", expressJwt({secret: process.env.SECRET}));

 
 
 app.listen(PORT, () => {
    console.log(`App is listening on port ${PORT}`);
 });