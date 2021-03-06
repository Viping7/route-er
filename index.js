var express = require('express');
var routes;
var router = express.Router();

function setRoutePath(path){
    if(path)
     routes = require(path);
    else
     routes = require('../../route.js');
}

function init(type) {
    switch (type) {
        case 'byMethod': return byMethod();
            break;
        default: for (var key in routes) {
            let splits = key.split(' ');
            let method = splits[0];
            let route = splits[1];
            router[method](route, routes[key]);
        }
            return router;
            break;
    }

}


function byMethod() {
    try {
        for (var key in routes) {
            let value = routes[key];
            value.forEach(route => {
                route.middleware = route.middleware || [];
                var childRoutes = route.children || [];
                if(childRoutes.length > 0){
                    childRoutes.forEach(childRoute=>{
                        childRoute.middleware = childRoute.middleware || [];
                        let middlewares = [];
                        middlewares = route.middleware.concat(childRoute.middleware);
                        if(childRoute.controller){
                            router[key](route.path+childRoute.path,middlewares,childRoute.controller);
                        }
                        else{
                            throw "No Controller Defined for "+ childRoute.path
                        }
                    })
                }
                if(route.controller){
                    router[key](route.path, route.middleware, route.controller);
                }   
            });
        };
        return router;
    }
    catch (error) {
        console.log(error);
        return;
    }
}


module.exports = {
    init: init,
    setRoutePath: setRoutePath
};