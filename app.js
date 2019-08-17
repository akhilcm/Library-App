const Express = require('express');

var app = new Express();

app.set('view engine','ejs'); 

app.use(Express.static(__dirname+"/public"));

nav= [{
    link:'/books',
    title:'Books'
},
{
    link:'/authors',
    title:'Authors'
}];
app.get('/',(req,res)=>{
    res.render('index',{nav,title:'Library'});
});

app.get('/books',(req,res)=>{
    res.render('books',{book,title:'Books'});
});

app.get('/authors',(req,res)=>{
    res.render('author',{author,title:'Author'});
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
    'picture':'/images/sanya-malhotr-aa_d.jpg.jpg',
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
    'doB':'9 March 1984',
    'place':'India',
    'books': 'Firewall'
}];
app.get('/booksingle/:id',(req,res)=>{
    const x= req.params.id;
    res.render('booksmore',{books:book[x]});
});



app.get('/authorsingle/:id',(req,res)=>{
    const y= req.params.id;
    res.render('authormore',{author:author[y]});
});




app.listen(3001);