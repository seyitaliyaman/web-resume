var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var nodemailer = require('nodemailer');

var mailController = require('./controller/MailController');
var app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use('/sendMail',mailController);
app.use(express.static('public'))

4
//make way for some custom css, js and images
app.use('/css', express.static(__dirname + '/public/css'));
app.use('/js', express.static(__dirname + '/public/js'));
app.use('/images', express.static(__dirname + '/public/images'));
app.use('/scripts', express.static(__dirname + '/public/scripts'));
app.use('/styles', express.static(__dirname + '/public/styles'));

app.set('views',path.join(__dirname,'/views/'));

var server = app.listen(8081, function(){
    var port = server.address().port;
    console.log("Server started at http://localhost:%s", port);
});