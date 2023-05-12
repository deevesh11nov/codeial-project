const express = require('express');
const app= express();
const port =8000;
const router = require('./routes');

// Excessing the router
app.use('/',require('./routes'));




//Listner
app.listen(port,function(err){
    if(err){
        console.log(`Error:${err}`);
        return;
    }
    console.log(`Server is running on port : ${port}`);
})