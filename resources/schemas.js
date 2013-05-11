var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    ProjectSchema, IssueSchema, CommentSchema,
    Project, Issue, Comment

require('sugar')


//Shemas
ProjectSchema = new Schema({
    name  :  { type: String },
    cratedDate  :  { type: Date, default: Date.now },
    issues:  [{ type: Schema.ObjectId, ref: 'Issue' }]
})

IssueSchema = new Schema({
    name  :  { type: String },
    cratedDate  :  { type: Date, default: Date.now },
    comments:  [{ type: Schema.ObjectId, ref: 'Comment' }]
})

CommentSchema = new Schema({
    cratedDate  :  { type: Date, default: Date.now },
    text:  { type: String }
})


//Pre statements
ProjectSchema.pre('remove', function(next){
    this.issues.each(function(id){
        Issue.findById(id,function(err, issue){
            if(err){
                console.log("Error when getting issue with id "+ id +": "+ err)
            } else {
                issue.remove(function(err){
                    if(err){
                        console.log("Error when removing issue("+ id +") from project("+ this._id +");", err)
                    }
                })
            }
        })
    })
    next()
})

IssueSchema.pre('remove', function(next){
    this.comments.each(function(id){
        Comment.findById(id,function(err, comments){
            if(err){
                console.log("Error when getting comment with id "+ id +": "+ err)
            } else {
                comments.remove(function(err){
                    if(err){
                        console.log("Error when removing comment("+ id +") from issue("+ this._id +");", err)
                    }
                })
            }
        })
    })
    next()
})


//Post statements
ProjectSchema.post('remove', function(model){
    console.log("Removed project:", model)
})
IssueSchema.post('remove', function(model){
    console.log("Removed issue:", model)
})
CommentSchema.post('remove', function(model){
    console.log("Removed comment:", model)
})


//Exports
exports.Comment = Comment = mongoose.model('Comment', CommentSchema)
exports.Issue = Issue = mongoose.model('Issue', IssueSchema)
exports.Project = Project = mongoose.model('Project', ProjectSchema)
