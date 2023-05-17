const express = require('express');
const app= express();
const port =8000;
const router = require('./routes');
const expresslayouts= require('express-ejs-layouts');

//static files
app.use(express.static('./assets'))

app.use(expresslayouts);

//setting the style and css in layout page 
app.set('layout extractStyles',true)
app.set('layout extractScripts',true)

// Excessing the router
app.use('/',require('./routes'));

//setup view engine
app.set('view engine','ejs');
app.set('views','./views');


//Listner
app.listen(port,function(err){
    if(err){
        console.log(`Error:${err}`);
        return;
    }
    console.log(`Server is running on port : ${port}`);
})