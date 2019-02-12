var express =require("express");
var app = express();

app.use(express.static("public"));

var request = require("request");

app.get("/",function(req,res){
   res.render("home.ejs"); 
});


app.get("/result",function(req,res){
    var options = req.query.option;
    var value = req.query.numValue;
    var url = "http://numbersapi.com/"+value+options ;
    request(url,function(error,response,body){
        if(!error&&response.statusCode==200){
            res.render("result.ejs",{data:body,num:value});
            
            
        }
    });
});

app.listen(process.env.PORT,function(){
   console.log("Your server has started."); 
});