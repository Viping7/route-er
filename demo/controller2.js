module.exports = {
    route1:function(req,res){
        res.send('You are in route 1 of second controller');
    },
    route2:function(req,res){
        res.send('You are in route 2 of second controller')        
    },
    childRoute:function(req,res){
        res.send('You are in child route of second controller')        
    }
}