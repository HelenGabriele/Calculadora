var express = require("express");
var app = express();
var calculadoraRoute = require("./routes/calculadoraRoute");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.set("view engine", "ejs");

app.listen(3000,function(){
  console.log('Servidor iniciado!');
})
