/*const express= require('express')

var app= express();


app.get('/',function(req,res){
    res.send("start server")
})

 app.get('/user',function(req,res){
    res.send("nazera")

})

app.get('/fact/:num',function(req,res){
    //req.body -> payload for the request
    //req.params -> part from url 
    // console.log(req.params.num)
    // var myfact =fact(req.params.num)
    res.json("fib is" + req.params.num*2)
})

app.get('/multiply/:num',function(req,res){
    const num = parseInt(req.params.num); 
    const multiplicationTable = {};
    for (let i = 1; i <= 10; i++) {
        multiplicationTable[i] = num * i}
    
    res.json(multiplicationTable);
})
app.get('/cumulativesum/:num', function(req, res) {
    const num = parseInt(req.params.num); 
    let cumulativeSum = 0;

    
    for (let i = 1; i <= num; i++) {
        cumulativeSum += i;
    }

    res.json("Cumulative sum is " + cumulativeSum); 
});
app.get('/fib/:num', function(req, res) {
    const num = parseInt(req.params.num); // Parse the parameter to ensure it's a number

    let fibPrev = 0; // Initialize the Fibonacci number at index 0
    let fibCurr = 1; // Initialize the Fibonacci number at index 1

    // Calculate the Fibonacci number at the specified index
    for (let i = 2; i <= num; i++) {
        const fibNext = fibPrev + fibCurr; // Calculate the next Fibonacci number
        fibPrev = fibCurr; // Update fibPrev to current Fibonacci number
        fibCurr = fibNext; // Update fibCurr to next Fibonacci number
    }

    res.json({ fibNum: fibCurr }); // Send JSON response with the Fibonacci number at the specified index
});
app.get('/string/:ward', function(req, res) {
    const word = req.params.ward; 
    const reversedWord = word.split('').reverse().join(''); 
    const same = word === reversedWord; 
    res.json({ same: true }); 
})

var server= app.listen(7000, function()
{
    var host = server.address().address  
    var port = server.address().port 
})*/


const express= require('express')

var app= express();

//var json= require('json')

app.get('/',function(req,res)
{
    res.send("start server")
})

app.get('/form', function(req,res)
{
    res.sendFile(__dirname+'/form.html')
})

var bodyParser= require('body-parser')

var urlEncoded= bodyParser.urlencoded({extended:false})

app.post('/submitform',urlEncoded,function(req,res){
    res.send("data submitted"+req.body.email+req.body.password)
})

var server= app.listen(7000, function()
{
    var host = server.address().address // local one  
    var port = server.address().port 
})
    