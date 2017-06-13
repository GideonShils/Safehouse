'use strict'

let auth = function(req, res){
     res.send(JSON.stringify({code: 12345}));
}


let requestHandlers = {
    auth 
}

module.exports = requestHandlers;