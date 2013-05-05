var express = require('express'),
    Resource = require('express-resource'),
    app = express(),
    path = require('path'),
    mongoose = require('mongoose'),
    port = 8000

mongoose.connect('mongodb://localhost/myDB');

app.configure('development', function(){
    app.set('title', 'My Application');
    app.use(express.bodyParser());
    app.use(express.static(path.join(__dirname, 'public')));
})

app.resource('projects', require('./resources/project'))

app.listen(port)

console.log("started node on port " + port)
