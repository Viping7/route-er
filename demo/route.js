var controller1 = require('./controller1.js');
var controller2 = require('./controller2.js');

module.exports = {

    
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
        
        {
            path:'/route2',
            middleware:[],
            controller: controller1.route2
        }
    ],

}