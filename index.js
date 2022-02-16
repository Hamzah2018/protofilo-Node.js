const express = require('express');
const app = express();
app.set('view engine','ejs');
app.get('/',function(req,res){
    res.sendFile(__dirname + '/index.html');
});

// app.get('/about',function);
app.listen(3000,function(req,res){
    console.log('Server is running >>>');
});