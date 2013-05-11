var Project = require('./schemas').Project,
    Issue = require('./schemas').Issue
require('sugar')

exports.index = function(req, res){
    Project.findById(req.params.project).populate('issues').exec(function(err, project){
        if(err){
            res.send(500, "Caught exception on getting index: "+ err)
        } else {
            res.send(project.issues.map(function(issue){
                return convertToRegularId(issue.toObject())
            }))
        }
    })
}

exports.create = function(req, res){
    console.log("Got create[POST] request")
    Project.findById(req.params.project, function(err, project){
        var issue = new Issue(convertToMongodbId(req.body))
        issue.save(function(err, doc){
            if(err){
                res.send(500, "Caught exception on model save: "+ err)
            } else {
                project.issues.push(issue)
                project.save(function(err, project){
                    res.send(convertToRegularId(doc.toObject()))
                })
            }
        })
    })
}

exports.show = function(req, res){
    console.log("Got show[GET] request")
    Issue.findById(req.params.issue, function(err, issue){
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
    Issue.update({_id: req.params.issue},
        req.body,
        function(err){
            if(err){
                res.send(500, 'Caught exception: ' + err)
            } else {
                res.send(req.body)
            }
        })
}

exports.destroy = function(req, res){
    console.log("Got destroy[delete] request")
    Issue.findById(req.params.issue, function(err, issue){
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
                        Project.findById(req.params.project, function(err, project){
                            if (err){
                                res.send(500, "Caught exception on model delete #3: "+ err)
                            } else {
                                project.issues.remove(issue)
                                project.save(function(err){
                                    if(err){
                                        res.send(500, "Caught exception on model save in issue.destroy: "+ err)
                                    } else {
                                        res.send(issue);
                                    }
                                })
                            }
                        })
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
