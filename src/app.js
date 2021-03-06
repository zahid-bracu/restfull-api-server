 const express = require('express');
 const app=express();
 require('./conn');
 const Student=require('./db');
 const port=process.env.PORT || 3200;
 const router=require('./studentRouter')

//  must include
 app.use(express.json());
 app.use(router);
 app.listen(port,()=>{
     console.log(`Connection is established at ${port}`);
 })