module.exports = {
    route1:function(req,res){
        res.send('You are in route 1');
    },
    route2:function(req,res){
        res.send('You are in route 2')        
    },
    childRoute:function(req,res){
        res.send('You are in child route')        
    }
}