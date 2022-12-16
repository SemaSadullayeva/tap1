const employee=[
    {id:1,name:'Sema',age:20},
    {id:2,name:'Zerife',age:20},
    {id:3,name:'Fidan',age:20}];
    
    const express=require('express');
    const server=express();
    server.get('/',(req,res)=>
    {
     res.send(employee);
    
    });
    server.listen(3000,()=>{
        console.log('Server is started!')
    })
