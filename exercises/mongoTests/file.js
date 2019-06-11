const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/demo',{useNewUrlParser: true})
.then(()=> console.log("Connected to MongoDB"))
.catch(err => console.error(err));