const express=require('express');
const router=new express.Router();
const Student=require('./db')

//  default page
router.get("/",(req,res)=>{
    res.send("Hello from the default side")
})



// post data
router.post('/students', async(req,res)=>{
    try{
        const user = new Student(req.body);
        const createUser= await user.save();
        res.status(201).send(createUser);
    }catch(err){
        res.status(400).send(err);
    }
})


//delete single data
router.delete('/students/:id',async(req,res)=>{
   try{
       const _id=req.params.id;
       const studentsData= await Student.findByIdAndDelete(_id);
       if(!studentsData){
           return res.status(400).send()
       }else{
           res.send(studentsData)
       }
   }catch(e){
       res.status(500).send(e);
   }
})



// show all data --> GET Method
router.get('/students',async(req,res)=>{
   try{
       const studentsData= await Student.find();
       res.send(studentsData);
   }catch(e){
       res.send(e);
   }
})


// find one particular data by ID
// http://localhost:3200/students/604139cba1a8bb05407070e4
router.get('/students/:id',async(req,res)=>{
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


// update data
//http://localhost:3200/students/6042af658b2d60123c331dcd
router.patch('/students/:id',async(req,res)=>{
   try{
       const _id=req.params.id;
       const studentsData= await Student.findByIdAndUpdate(_id,req.body,{
           new:true
       });
       if(!studentsData){
           return res.status(404).send()
       }else{
           res.send(studentsData)
       }
   }catch(e){
       res.status(500).send(e);
   }
})




module.exports=router;