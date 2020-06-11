var express = require("express");
var app = express()
var port = 5000


app.get('/',function(req,res){
    res.send("hello world.")
})


app.listen(port,function(){
    console.log("app listening at port "+port)
})