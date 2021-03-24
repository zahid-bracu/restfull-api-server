const mongoose = require('mongoose');

const db="mongodb+srv://demoUser:9augustbd@cluster0.rwjuz.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

mongoose.connect(db,{
    useCreateIndex:true,
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useFindAndModify: false
}).then(()=>{
    console.log("Yes Connected")
}).catch((err)=>{
    console.log("Failed Connection ")
})