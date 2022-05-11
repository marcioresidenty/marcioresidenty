function criptografiaDeTexto() {
  var criptoE = /e/gi;
  var criptoI = /i/gi;
  var criptoA = /a/gi;
  var criptoO = /o/gi;
  var criptoU = /u/gi;

  var elementoResultado = document.getElementById("resultado");
  var frase = document.getElementById("textoDigitado").value;
  var fraseConvertida1 = frase.replace(criptoE, "enter");
  var fraseConvertida2 = fraseConvertida1.replace(criptoI, "imes");
  var fraseConvertida3 = fraseConvertida2.replace(criptoA, "ai");
  var fraseConvertida4 = fraseConvertida3.replace(criptoO, "ober");
  var fraseConvertida5 = fraseConvertida4.replace(criptoU, "ufat");

  elementoResultado.innerHTML = fraseConvertida5;
}

function Descriptografar() {
  var criptoE = /enter/gi;
  var criptoI = /ufat/gi;
  var criptoA = /ober/gi;
  var criptoO = /ai/gi;
  var criptoU = /imes/gi;
  var elementoResultado = document.getElementById("resultado");
  var frase = document.getElementById("textoDigitado").value;
  elementoResultado.innerHTML = frase;
}

function copiarTexto() {
  var textoCopiado = document.getElementById("textoDigitado");
  textoCopiado.select();
  textoCopiado.setSelectionRange(0, 99999);
  document.execCommand("copy").value;
}
