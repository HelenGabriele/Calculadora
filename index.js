const express = require("express");
const app = express();
var usuarioRoute = require("./routes/usuarioRoute");

app.get('/soma/:num1/:num2',function(req,res){
  var soma = req.params.num1+req.params.num2
  res.send('O resultado da soma é: '+ soma)
})


app.listen(3000,function(){
  console.log('Servidor iniciado!');
})
