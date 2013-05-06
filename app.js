var express = require('express'),
    Resource = require('express-resource'),
    app = express(),
    path = require('path'),
    mongoose = require('mongoose'),
    port = 8000,
    projects, issues, comments

mongoose.connect('mongodb://localhost/myDB');

app.configure('development', function(){
    app.set('title', 'My Application');
    app.use(express.bodyParser());
    app.use(express.static(path.join(__dirname, 'public')));
})

projects = app.resource('projects', require('./resources/project'))
issues = app.resource('issues', require('./resources/issue'))
comments = app.resource('comments', require('./resources/comment'))

projects.add(issues)
issues.add(comments)


app.listen(port)

console.log("started node on port " + port)
