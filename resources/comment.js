var Project = require('./schemas').Project,
    Issue = require('./schemas').Issue,
    Comment = require('./schemas').Comment
require('sugar')

exports.index = function(req, res){
    console.log("Got index[GET] request")
    Issue.findById(req.params.issue).populate('comments').exec(function(err, issue){
        if (err){
            res.send(500, "Caught exception on index: "+ err)
        } else {
            res.send(issue.comments.map(function(comment){
                return convertToRegularId(comment.toObject())
            }))
        }
    })
}

exports.create = function(req, res){
    console.log("Got create[POST] request")
    Project.findById(req.params.project, function(err, project){
        Comment.findById(req.params.comment, function(err, comment){
            var comment = new Comment(convertToMongodbId(req.body))
            comment.save(function(err, doc){
                if(err){
                    res.send(500, "Caught exception on model save: "+ err)
                } else {
                    res.send(convertToRegularId(doc.toObject()))
                }
            })
        })
    })
}

exports.show = function(req, res){
    console.log("Got show[GET] request")
    Comment.findById(req.params.comment, function(err, comment){
        if (err){
            res.send(500, 'Caught exception: ' + err)
        } else {
            if(!comment){
                res.send(404, "Could not find comment with ID: "+req.params.comment)
            } else {
                res.send(convertToRegularId(comment.toObject()))
            }
        }
    })
}

exports.update = function(req, res){
    console.log("Got update[PUT] request")
    Comment.update({_id: req.params.comment},
        req.body,
        function(err){
            res.send(500, 'Caught exception: ' + err)
        })
}

exports.destroy = function(req, res){
    console.log("Got destroy[delete] request")
    Comment.findById(req.params.comment, function(err, comment){
        if (err){
            res.send(500, "Caught exception on model delete: "+ err)
        } else {
            if(!comment){
                res.send(404, "Could not find comment with ID: "+req.params.comment)
            } else {
                comment.remove(function(err){
                    if (err){
                        res.send(500, "Caught exception on model delete #2: "+ err)
                    } else {
                        res.send(comment);
                    }
                })
            }
        }
    })
}

//Helper functions
function convertToMongodbId(obj){
    if( obj.hasOwnProperty('id') ){
        obj['_id'] = obj['id']
        delete obj['id']
    }
    return obj
}

function convertToRegularId(obj){
    if( obj.hasOwnProperty('_id') ){
        obj['id'] = obj['_id']
        delete obj['_id']
    }
    return obj
}
