const express=require('express');
    const server=express();
    const fs = require('fs');

fs.readFile('./employee.json', 'utf8', (err, data) => {
    if (!err) {
        server.get('/',(req,res)=>
        {
         res.send(data);
        });
      } 
      else console.error(err);});
    server.listen(3000,()=>{
        console.log('Server is started!')
    })