const express = require('express');
const app = express();


app.use(express.static('public'))
app.use('/css',express.static(__dirname + 'public/css'))
app.use('/js',express.static(__dirname + 'public/js'))
app.use('/images',express.static(__dirname + 'public/images'))
// app.get('/',function(req,res){
//  res.sendFile(__dirname + '/index.html');

// });

// view
app.set('views','./views');
app.set('view engine','ejs');
///home
//home
app.get('',(req,res)=>{
    res.render('home');
});

// app.get('/about',function);
app.listen(3000,function(req,res){
    console.log('Server is running >>>');
});