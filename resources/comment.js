var Project = require('./schemas').Project,
    Issue = require('./schemas').Issue,
    Comment = require('./schemas').Comment
require('sugar')

exports.index = function(req, res){
    console.log("Got index[GET] request")
    Comment.find(function(err, docs){
        if (err){
            res.send(500, "Caught exception on index: "+ err)
        }
        else{
            res.send(docs.map(function(doc){
                return convertToRegularId(doc.toObject())
            }))
        }
    })
}

exports.create = function(req, res){
    console.log("Got create[POST] request")
    Project.findById(req.params.project, function(err, project){
        Issue.findById(req.params.project, function(err, issue){
            var comment = new Comment(convertToMongodbId(req.body))
            comment.save(function(err, doc){
                if(!doc){
                    res.send(500, "Caught exception on model save: "+ err)
                } else {
                    issue.comments.push(comment)
                    res.send(convertToRegularId(doc.toObject()))
                }
            })
        })
    })
}

exports.show = function(req, res){
    console.log("Got show[GET] request")
    Comment.findById(req.params.issue, function(err, issue){
        if (err){
            res.send(500, 'Caught exception: ' + err)
        } else {
            if(!issue){
                res.send(404, "Could not find issue with ID: "+req.params.issue)
            } else {
                res.send(convertToRegularId(issue.toObject()))
            }
        }
    })
}

exports.update = function(req, res){
    console.log("Got update[PUT] request")
    Comment.update({_id: req.params.issue},
        req.body,
        function(err){
            res.send(500, 'Caught exception: ' + err)
        })
}

exports.destroy = function(req, res){
    console.log("Got destroy[delete] request")
    Comment.findById(req.params.comment, function(err, issue){
        if (err){
            res.send(500, "Caught exception on model delete: "+ err)
        } else {
            if(!issue){
                res.send(404, "Could not find issue with ID: "+req.params.issue)
            } else {
                issue.remove(function(err){
                    if (err){
                        res.send(500, "Caught exception on model delete #2: "+ err)
                    } else {
                        res.send(issue);
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
