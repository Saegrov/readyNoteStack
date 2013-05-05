var Project = require('./schemas').Project
require('sugar')

exports.index = function(req, res){
    console.log("Got index[GET] request")
    Project.find(function(err, docs){
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
    var project = new Project(convertToMongodbId(req.body))
    project.save(function(err, doc){
        if(!doc){
            res.send(500, "Caught exception on model save: "+ err)
        } else {
            res.send(convertToRegularId(doc.toObject()))
        }

    })
}

exports.show = function(req, res){
    console.log("Got show[GET] request")
    Project.findById(req.params.project, function(err, project){
        if (err){
            res.send(500, 'Caught exception: ' + err)
        } else {
            if(!project){
                res.send(404, "Could not find project with ID: "+req.params.project)
            } else {
                res.send(convertToRegularId(project.toObject()))
            }
        }
    })
}

exports.update = function(req, res){
    console.log("Got update[PUT] request")
    Project.update({_id: req.params.project},
        req.body,
        function(err){
            res.send(500, 'Caught exception: ' + err)
        })
}

exports.destroy = function(req, res){
    console.log("Got destroy[delete] request")
    Project.findById(req.params.project, function(err, project){
        if (err){
            res.send(500, "Caught exception on model delete: "+ err)
        } else {
            if(!project){
                res.send(404, "Could not find project with ID: "+req.params.project)
            } else {
                project.remove(function(err){
                    if (err){
                        res.send(500, "Caught exception on model delete #2: "+ err)
                    } else {
                        res.send('project deleted' + project);
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
