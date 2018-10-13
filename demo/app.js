var express = require('express');
var app = express();
var routerModule = require('../index.js');
routerModule.setRoutePath(__dirname + '/route.js');
app.use('/',routerModule.init('byMethod'));
app.listen(3000,function(){
    console.log('listening')
})