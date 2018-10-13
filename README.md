# route-er

A package that enables you to decouple your routes from controllers and organise all routes in a single place.

## Version 1.0.0

## Getting started

The controller (the business logic functions) that you want to attach to a route should be kept in separate files and exported as below.

controller1.js
```
module.exports = {
    route1:function(req,res){
        res.send('You are in route 1');
    },
    route2:function(req,res){
        res.send('You are in route 2')        
    }
}
```


### Simple Routes

For Simple routes ie. routes that doesnot need any custom middleware functions, You can decalre it in a **route.js** file in root easily as below.


route.js
```
var controller1 = require('./controller1.js');
module.exports = {
    'get /route1': controller1.route1,
    'post /route1': controller1.route2,
    }
```

PS: If you want to rename the file or keep it in another location you can use **setRoutePath()** and pass the absolute path of you file.

### Complex routes

Most of the times you need to work with middlewares and nested routes. But dont worry we got you covered. You can decalre it as.

```
'get':[
        {
            path:'/route1',
            middleware:[],
            controller: controller1.route1,
            children:[{
                path:'/childRoute',
                controller:controller1.childRoute
            }
            ]
        },
        .
        .
        .
        .
        {
            path:'/route2',
            controller: controller1.route2
        }
    ],
'post':[
        {
            path:'/route2',
            middleware:[],
            controller: controller1.route2
        }
        .
        .
        .
        .
]
```

you can decalre sub routes with help of **children** key, it accespts an array of child routes. If you are from angular background you will find it similar to the routing used there.


### Initialising the routes

```
var routeEr = require('route-er')
routerModule.setRoutePath(__dirname + '/route.js');  // Needed if the file name and location are different 
app.use('/',routeEr.init('byMethod'));

```

**byMethod** parameter should be passed to **init()** if you want to use the complex route, If you want to use the simple route just leave it blank.



### Methods

#### setRoutePath(path_of_file)

Accepts the path of file where routes are declared. 
Note: Accepts only absolute part, you can use **__dirname** to get it 

#### init(type)

Accepts **'byMethod'** for complex routes. Empty for simple




