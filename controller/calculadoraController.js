async function
 abreCalculadora(req, res) {  res.render("calculadora.ejs", {});}

async function calcula(req, res) { 
   var num1 = req.body.num1;  
   var num2 = req.body.num2;  
   var operacao = req.body.operacao; 
    var result;
  if (operacao == "+")
 {    result = parseInt(num1) + parseInt(num2); 
      } else if (operacao == "-")
       {    result = parseInt(num1) - parseInt(num2); 
       } else if (operacao == "/")
        {    result = parseInt(num1) / parseInt(num2); 
         } else if (operacao == "*")
          {    result = parseInt(num1) * parseInt(num2); 
           }
  res.render("resultado.ejs",
 {    resultado: result,    operacao: operacao,    num1: num1,    num2: num2,  });}

 
module.exports = { abreCalculadora, calcula };