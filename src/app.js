 const express = require('express');
 const app=express();
 require('./conn');
 const Student=require('./db');

 
 const port=process.env.PORT || 3200;

 app.use(express.json());

 app.get("/",(req,res)=>{
     res.send("Hello from the default side")
 })

 app.post('/students',(req,res)=>{
    console.log(req.body);
    const user=new Student(req.body);
    user.save().then(()=>{
        res.status(201).send(user)
    }).catch((err)=>{
        res.status(400).send(err);
    })
    
 })

app.get('/students',async(req,res)=>{
    try{
        const studentsData= await Student.find();
        res.send(studentsData);
    }catch(e){
        res.send(e);
    }
})



app.get('/students',async(req,res)=>{
    try{
        const studentsData= await Student.find();
        res.send(studentsData);
    }catch(e){
        res.send(e);
    }
})


// http://localhost:3200/students/604139cba1a8bb05407070e4
app.get('/students/:id',async(req,res)=>{
    try{
        const _id=req.params.id;
        const studentsData= await Student.findById(_id);
        if(!studentsData){
            return res.status(404).send()
        }else{
            res.send(studentsData)
        }
    }catch(e){
        res.status(500).send(e);
    }
})


 app.listen(port,()=>{
     console.log(`Connection is established at ${port}`);
 })