const Express = require('express');
const Mongoose = require('mongoose');
var request = require('request');
const Addbooks=Mongoose.model("bookdetails",{
    title: String ,
    picture: String,
    author: String,
    publisher:String,
    dop: String,
    distributer: String,
    price:String,
    description: String});
const Addauthor = Mongoose.model("authordetails",{
        name:String,
        picture:String,
        DoB:String,
        Place:String,
        Books:String
    });
const UserModel= Mongoose.model("users",{
        ename:String,
        eaddress:String,
        egender:String,
        edob:String,
        eemail:String,
        euname:String,
        epass:String,
        ecpass:String
    });
    


// Mongoose.connect("mongodb://localhost:27017/bookdb"); 
Mongoose.connect("mongodb+srv://dbcm:dbcm@clustermy-zwohv.mongodb.net/bookdb?retryWrites=true&w=majority")
var bodyParser= require('body-parser');    
var app = new Express();
app.set('view engine','ejs'); 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

app.use(Express.static(__dirname+"/public"));
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200' );

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

nav= [{
    link:'/books',
    title:'Books'
},
{
    link:'/authors',
    title:'Authors'
}];
app.get('/',(req,res)=>{
    res.render('login');
});
app.get('/index',(req,res)=>{
    res.render('index',{nav,title:'Library'});
});

// app.get('/books',(req,res)=>{
//     res.render('books',{book,title:'Books'});
// });

// app.get('/authors',(req,res)=>{
//     res.render('author',{author,title:'Author'});
// });

app.get('/addbooks',(req,res)=>{
    res.render('addbooks',{title:'AddBooks'});
});
app.get('/addauthors',(req,res)=>{
    res.render('addauthors',{title:'AddAuthors'});
});

book=[{
    'title': 'THE JURASSIC ADVENTURE',
    'author': 'ARHAM BANTHIA',
    'publisher': 'Blue Rose',
    'dop': '25-02-2019',
    'distributer': 'Blue',
    'price': '249',
    'description': 'My Jurassic adventure',
    'picture':'/images/THE-JURASSIC-ADVENTURE1-321x500.jpg'
},
{
    'title': 'Firewall',
    'author': 'ANUP KUMAR MANDAL',
    'publisher': 'Blue Rose',
    'dop': '25/02/2019',
    'distributer': 'Blue',
    'price': '249',
    'description': 'In India, every year, hundreds of people are killed and seriously...',
    'picture':'/images/Firewall1-325x500.jpg'

},
{
    'title': 'OUSHADHASARVASWAM',
    'author': 'THAHIMON. P.A',
    'publisher': 'Blue Rose',
    'dop': '25/08/2019',
    'distributer': 'Blue',
    'price': '1200',
    'description': 'Oushadhasarvaswam is first of its kind on modern medicine....',
    'picture':'/images/o.jpg'

},
{
    'title': 'The Poor Grandmaster',
    'author': 'Sumitendray Singh',
    'publisher': 'Blue Rose',
    'dop': '15/02/2019',
    'distributer': 'Blue',
    'price': '100',
    'description': 'This book takes you through the life of a poor.....',
    'picture':'/images/The-Poor-Grandmaster1-325x500.jpg'

},
{
    'title': 'PRODUCTIVITY & Global Management Practices',
    'author': 'RAMESH K SHAH',
    'publisher': 'Blue Rose',
    'dop': '05/12/2019',
    'distributer': 'Blue',
    'price': '249',
    'description': 'My Jurassic adventure',
    'picture':'/images/prod.jpg'

},
{
    'title': 'Mindful Eating',
    'author': 'Priti sandeep gaglani',
    'publisher': 'Blue Rose',
    'dop': '25/02/2019',
    'distributer': 'Blue',
    'price': '499',
    'description': 'The book focuses on Lifestyle Modification, rather than only low calorie eating.',
    'picture':'/images/mind.jpg'
},
{
    'title': 'One Action — Towards women’s dreams and ambitions',
    'author': 'Sanya Khurana',
    'publisher': 'Blue Rose',
    'dop': '25/08/2019',
    'distributer': 'Blue',
    'price': '225',
    'description': 'As a teenager, Sanya Khurana had very low self-esteem and was disgusted ....',
    'picture':'/images/oneaction.jpg'
},
{
    'title': 'Life in Pieces',
    'author': 'Sonal Vashisht',
    'publisher': 'Blue Rose',
    'dop': '25/03/2019',
    'distributer': 'Blue',
    'price': '175',
    'description': 'The story is truly a great example of a journey called ‘Life’',
    'picture':'/images/life in .jpg',
},
{ 
    'title': 'Love-Tennis',
    'author': 'Jitender kumar',
    'publisher': 'Blue Rose',
    'dop': '25/09/2019',
    'distributer': 'Blue',
    'price': '175',
    'description': 'Will love win again as always',
    'picture':'/images/love tennis.jpg'
}];

author=[{
    'name':'Jitender kumar',
    'picture':'/images/Jitender Kumar.jpg',
    'DoB':'1 September 1990 ',
    'Place':'Khairthal, Alwar, India',
    'Books': 'Love-Tennis'
},{
    'name':'Sonal Vashisht',
    'picture':'/images/K_Sonal_Choudhary.jpg',
    'DoB':'31 July 1965',
    'Place':'Gurugram, Haryana',
    'Books': 'Life in Pieces'
},{
    'name':'Sanya Khurana',
    'picture':'/images/sanya-malhotr-aa_d.jpg',
    'DoB':'18 November 1987',
    'Place':'Chandigarh, India',
    'Books': 'One Action'
},{
    'name':'Priti sandeep gaglani',
    'picture':'/images/pritiimage.jpg',
    'DoB':'8 April 1989',
    'Place':'United States',
    'Books': 'Mindful Eating'
},{
    'name':'ANUP KUMAR MANDAL',
    'picture':'/images/anup.jpeg',
    'DoB':'9 March 1984',
    'place':'India',
    'books': 'Firewall'
}];

//login
app.get('/loginAPI',(req,res)=>{
    var item1 = req.query.euname;
    var item2 = req.query.epass;
    var result = UserModel.find({$and:[{euname:item1},{epass:item2}]},(error,data)=>{
        if(error)
        {
            throw error;
            res.send(error);
        }
        else
        {
            res.send(data);
        }
        
    })

})
// const APIurl5 = "https://libraryap.herokuapp.com/loginAPI"
const APIurl5 = "http://localhost:3001/loginAPI"

app.post('/employeelogin',(req,res)=>{
    var item1 = req.body.euname;
    var item2 = req.body.epass;

    request(APIurl5+"/?euname="+item1+"&&epass="+item2,(error,response,body)=>{
        var data = JSON.parse(body);


        console.log(data);
        if(data.length>0){

            if(item1==data[0].euname && item2==data[0].epass)
            {
                //res.send(data.euname);
                res.send("<script>alert('Login Successfull')</script><script>window.location.href='/index'</script>");
            }


        }
        else{
            res.send("<script>alert('Login unSuccessfull')</script><script>window.location.href='/'</script>");
            
        }


    });
});

//signup
app.get('/register',(req,res)=>{
    res.render('signup');
});

app.post('/employeeregister',(req,res)=>{
    //var items=req.body;
    //res.render('read',{item:items});

    var user = new UserModel(req.body);
    var result = user.save((error,data)=>{
        if(error)
        {
            throw error;
            res.send(error);
        }
        else
        {
            res.send("<script>alert('User Successfully Inserted')</script><script>window.location.href='/register'</script>");
        }
    });

});
app.post('/employeeregister1',(req,res)=>{
    //var items=req.body;
    //res.render('read',{item:items});

    var user = new UserModel(req.body);
    var result = user.save((error,data)=>{
        if(error)
        {
            throw error;
            res.send(error);
        }
        else
        {
            res.send(data);
        }
    });

});





app.post('/read',(req,res)=>{
    console.log(req.body);
    var book= Addbooks(req.body);
    var result = book.save( (error,data)=>{
        if(error){
            throw error;
            res.send(error);
        }
        else{
            res.send('user created');
        }
    });
});


app.get('/getdatas',(req,res)=>{
    result = Addbooks.find( (error,data)=>{
         if(error){
             throw error;
         }
         else{
             res.send(data);
         }
     });
});
// const getdataApi="https://libraryap.herokuapp.com/getdatas";
const getdataApi="http://localhost:3001/getdatas";


app.get('/books',(req,res)=>{
    request(getdataApi,(error,response,body)=>{
        var book=JSON.parse(body);
        console.log(book);
        res.render('books',{book,title:'Books'});

    });
});


app.get('/bookone',(req,res)=>{
    var item = req.query.q;
    var result = Addbooks.findOne({_id:item},(error,data)=>{
        if(error)
        {
            throw error;
            res.send(error);
        }
        else
        {
            res.send(data);
        }
    });
});
// const getdataApi1 = "https://libraryap.herokuapp.com/bookone";
const getdataApi1 = "http://localhost:3001/bookone";


app.get('/booksingle/:id',(req,res)=>{
    const x= req.params.id;
    request(getdataApi1+"/?q="+x,(error,response,body)=>{
        var book = JSON.parse(body);
        console.log(book);
        res.render('booksmore',{book:book});
    });
});

app.post('/readdata',(req,res)=>{
    console.log(req.body);
    var author= Addauthor(req.body);
    var result = author.save( (error,data)=>{
        if(error){
            throw error;
            res.send(error);
        }
        else{
            res.send('user created');
        }
    });
});


app.get('/getauthordatas',(req,res)=>{
    result = Addauthor.find( (error,data)=>{
         if(error){
             throw error;
             res.send(error);
         }
         else{
             res.send(data);
         }
     });
});
// const getdataApi3="https://libraryap.herokuapp.com/getauthordatas";
const getdataApi3="http://localhost:3001/getauthordatas";

app.get('/authors',(req,res)=>{
    request(getdataApi3,(error,response,body)=>{
        var author=JSON.parse(body);
        console.log(author);
        res.render('author',{author,title:'Authors'});

    });
});


app.get('/authorone',(req,res)=>{
    var item = req.query.q;
    var result = Addauthor.findOne({_id:item},(error,data)=>{
        if(error)
        {
            throw error;
            res.send(error);
        }
        else
        {
            res.send(data);
        }
    });
});
// const getdataApi4 = "https://libraryap.herokuapp.com/authorone";
const getdataApi4 = "http://localhost:3001/authorone";


app.get('/authorsingle/:id',(req,res)=>{
    const x= req.params.id;
    request(getdataApi4+"/?q="+x,(error,response,body)=>{
        var author = JSON.parse(body);
        console.log(author);
        res.render('authormore',{author:author});
    });
});
app.post('/viewauthorsingle',(req,res)=>{
    const x = req.body.authorid;
    var result = Addauthor.findOne({_id:x},(error,data)=>{
        if(error)
        {
            throw error;
            res.send(error);
        }
        else
        {
            res.send(data);
        }
    });
});

app.post('/viewbooksingle',(req,res)=>{
    const x = req.body.bookid;
    var result = Addbooks.findOne({_id:x},(error,data)=>{
        if(error)
        {
            throw error;
            res.send(error);
        }
        else
        {
            res.send(data);
        }
    });
});


app.listen(process.env.PORT || 3001,()=>{
    console.log("Server running on port: http://localhost:3001");
});