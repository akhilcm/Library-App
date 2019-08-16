const Express = require('express');
var app=new Express();
app.set('view engine','ejs');
app.use(Express.static(__dirname+"/public"));

app.get('/',(req,res)=>{
    res.render('index',{nav:[{link:'/books',title:'books'},{
        link:'/author',author:'author'}],title:'Library'});

});
app.listen(3000);