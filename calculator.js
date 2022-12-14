//import dependency
const exp = require("express");
const bp = require("body-parser");

const app = exp();
//integrate bodyParser with express
app.use(bp.urlencoded({extended: true}));

app.get("/", function(req, res){
  res.sendFile(__dirname + "/index.html");
});

app.post("/", function(req, res){
  var num1 = Number(req.body.num1);
  var num2 = Number(req.body.num2);

  res.send("The result of the calculation is "+ (num1+num2));
});

app.listen(process.env.PORT||3000, function(){
  console.log("Port 3000 Listening begins");
});
