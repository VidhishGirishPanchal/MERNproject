const mongoose = require("mongoose");

// mongoose connecting line
const DB = process.env.DATABASE;
mongoose.connect(DB, 
    {useNewUrlParser: true, 
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false})
    .then(()=>{
        console.log("Connected to MongoDB");
    })
    .catch((err)=>{
        console.log(err);
    });
