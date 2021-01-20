var valor;
var resultado;
function botao(num) {
  valor = document.calc.visor.value += num;
}
function reseta() {
  document.calc.visor.value = '';
}
function calcula() {
  resultado = eval(valor);
  document.calc.visor.value = resultado.toLocaleString('pt-br');
}

document.addEventListener("keydown", function(e){
	if (e.keyCode == 103){
		// e.preventDefault();
    // alert("CTRL+S pressionado!");
    console.log('tecla 7 pressionada');
    valor = document.calc.visor.value += 7;
	}
	if (e.keyCode == 104){
		// e.preventDefault();
    // alert("CTRL+S pressionado!");
    console.log('tecla 8 pressionada');
    valor = document.calc.visor.value += 8;
	}
	if (e.keyCode == 105){
		// e.preventDefault();
    // alert("CTRL+S pressionado!");
    console.log('tecla 9 pressionada');
    valor = document.calc.visor.value += 9;
	}
	if (e.keyCode == 111){
		// e.preventDefault();
    // alert("CTRL+S pressionado!");
    console.log('tecla / pressionada');
    valor = document.calc.visor.value += '/';
  }
  
  if (e.keyCode == 100){
		// e.preventDefault();
    // alert("CTRL+S pressionado!");
    console.log('tecla 4 pressionada');
    valor = document.calc.visor.value += 4;
	}
	if (e.keyCode == 101){
		// e.preventDefault();
    // alert("CTRL+S pressionado!");
    console.log('tecla 5 pressionada');
    valor = document.calc.visor.value += 5;
	}
	if (e.keyCode == 102){
		// e.preventDefault();
    // alert("CTRL+S pressionado!");
    console.log('tecla 6 pressionada');
    valor = document.calc.visor.value += 6;
	}
	if (e.keyCode == 106){
		// e.preventDefault();
    // alert("CTRL+S pressionado!");
    console.log('tecla * pressionada');
    valor = document.calc.visor.value += '*';
  }
  
  if (e.keyCode == 97){
		// e.preventDefault();
    // alert("CTRL+S pressionado!");
    console.log('tecla 1 pressionada');
    valor = document.calc.visor.value += 1;
	}
	if (e.keyCode == 98){
		// e.preventDefault();
    // alert("CTRL+S pressionado!");
    console.log('tecla 2 pressionada');
    valor = document.calc.visor.value += 2;
	}
	if (e.keyCode == 99){
		// e.preventDefault();
    // alert("CTRL+S pressionado!");
    console.log('tecla 3 pressionada');
    valor = document.calc.visor.value += 3;
	}
	if (e.keyCode == 109){
		// e.preventDefault();
    // alert("CTRL+S pressionado!");
    console.log('tecla - pressionada');
    valor = document.calc.visor.value += '-';
  }
  
  if (e.keyCode == 67){
		// e.preventDefault();
    // alert("CTRL+S pressionado!");
    console.log('tecla C pressionada');
    document.calc.visor.value = '';
	}
	if (e.keyCode == 96){
		// e.preventDefault();
    // alert("CTRL+S pressionado!");
    console.log('tecla 0 pressionada');
    valor = document.calc.visor.value += 0;
	}
	if (e.keyCode == 13){
		// e.preventDefault();
    // alert("CTRL+S pressionado!");
    console.log('tecla = pressionada');
    resultado = eval(valor);
    document.calc.visor.value = resultado.toLocaleString('pt-br');
	}
	if (e.keyCode == 107){
		// e.preventDefault();
    // alert("CTRL+S pressionado!");
    console.log('tecla + pressionada');
    valor = document.calc.visor.value += '+';
	}
}, false);