var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    id = 'CapitalCamelCase'


//Mongoose schema:
var CapitalCamelCase = mongoose.model(id,
    new Schema({
        name  :  { type: String, default: '<dummy string>' },
        cratedDate  :  { type: Date, default: Date.now }
    })
);


//express-resources operations:
exports.index = function(req, res){
    res.send('lowerCamelCase index');
};

exports.create = function(req, res){
    res.send('create lowerCamelCase');
};

exports.show = function(req, res){
    res.send('show lowerCamelCase ' + req.params.lowerCamelCase);
};

exports.update = function(req, res){
    res.send('update lowerCamelCase ' + req.params.lowerCamelCase);
};

exports.destroy = function(req, res){
    res.send('destroy lowerCamelCase ' + req.params.lowerCamelCase);
};