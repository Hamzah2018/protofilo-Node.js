const express = require('express');
const app = express();
app.set('view engine','ejs');
app.get('/',function(req,res){
    res.sendFile(__dirname + '/index.html');
});
app.get('/headfooter',(req,res)=>{
    res.render('headfooter',{titl_name:'Hamzah'})
});
var list =[
    {
        name:'Hamzah',
        age:'27'
    },
    {
        name:'Ali',
        age:'25'
    },
    {
        name:'Khaild',
        age:'30'
    },
    {
        name:'Wedad',
        age:'23'
    },
    {
        name:'Hamzah',
        age:'27'
    },
]

// app.get('/about',function);
app.listen(3000,function(req,res){
    console.log('Server is running >>>');
});