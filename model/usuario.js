var conexao = require("./conexao");

var UsuarioScheme = conexao.Schema({
  num1: { type: String },
  num2: { type: String },
  
});

module.exports = conexao.model("Usuario", UsuarioScheme);