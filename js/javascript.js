function calcNum(num) {
   if (typeof gvisor == 'undefined') {
      document.calc.visor.value = '';
   }
   document.calc.visor.value = document.calc.visor.value + num;
   gvisor = 1;
}

function limpar() {
   document.forms[0].reset();
}

function calcOper(oper, valor1, valor2) {
   if (oper == "somar") {
      var valor = parseFloat(valor1) + parseFloat(valor2);
   } else {
      if (oper == "subtrair"){
         var valor = valor1 - valor2;
      } else {
         if (oper == "multiplicar") {
            var valor = valor1 * valor2;
         } else {
            var valor = valor1 / valor2;
         }
      }
   }

   return(valor);
}

function calcParse(oper) {
   var valor = document.calc.visor.value;
   delete gvisor;

   if (typeof goper != 'undefined' && oper == 'resultado') {
      gvalor = calcOper(goper, gvalor, valor);
      document.calc.visor.value = gvalor;
      delete op;
      delete gvalor;
      return(0);
   }

   if (typeof gvalor != 'undefined') {
      gvalor = calcOper(goper, gvalor, valor);
      goper = oper;
      document.calc.visor.value = gvalor;
   } else {
      gvalor = valor;
      goper = oper;
   }

}