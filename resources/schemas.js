var mongoose = require('mongoose'),
    Schema = mongoose.Schema

exports.Comment = mongoose.model('Comment', new Schema({
    cratedDate  :  { type: Date, default: Date.now },
    text:  { type: String }
}));

exports.Issue = mongoose.model('Issue', new Schema({
    name  :  { type: String },
    cratedDate  :  { type: Date, default: Date.now },
    comments:  [{ type: Schema.ObjectId, ref: 'Comment' }]
}));

exports.Project = mongoose.model('Project', new Schema({
    name  :  { type: String },
    cratedDate  :  { type: Date, default: Date.now },
    issues:  [{ type: Schema.ObjectId, ref: 'Issue' }]
}));
