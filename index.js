var express = require('express');
var app = express();
const serveport = 3000

app.set('view engine','ejs')

// routes 
app.use('/', function(req, res, next){
    return res.render('index')
})


app.listen(serveport, function () {
  console.log(`[+] Listening ${serveport}`);
})

