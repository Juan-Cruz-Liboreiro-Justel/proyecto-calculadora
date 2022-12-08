//PEDIR DATOS

let nombre = prompt("hola ingrese su nombre por favor.");
let peso = parseInt(prompt("indique su peso en kg."));
let altura = parseInt(prompt("indique su altura en cm."));
let edad = parseInt(prompt("indique su edad."));
let sexo = parseInt(prompt("indique su sexo, con 1 para hombre, o 2 para mujer."));
let actividad = parseInt(prompt("indique su nivel de ACTIVIDAD: 1 para nada activo, 2 para poco activo, 3 para activo, 4 para muy activo, 5 para extremadamente activo."));

let alturaMts = altura / 100;


//IMC

let imc = peso / (alturaMts * alturaMts);

alert(nombre + " tu indice de masa corporal es: " + parseInt(imc));


//CANTIDAD DE PROTEINA DIARIA

let NA = 0.8;
let PA = 1;
let A = 1.2;
let MA = 1.6;
let EA = 1.9; 


if (actividad == 1) {
  alert("usted debe consumir " + (NA * peso) + "gr de proteina diarios.");
} else if (actividad == 2){
  alert("usted debe consumir " + (PA * peso) + "gr de proteina diarios.");
}else if (actividad == 3){
  alert("usted debe consumir " + (A * peso) + "gr de proteina diarios.");
}else if (actividad == 4){
  alert("usted debe consumir " + (MA * peso) + "gr de proteina diarios.");
}else if (actividad == 5){
  alert("usted debe consumir " + (MA * peso) + "gr de proteina diarios.");
};



//CANTIDAD DE KCAL DIARIAS

let basalHombre = 66 + (13.7 * peso) + (5 * altura) - (6.8 * edad);
let basalMujer = 655 + (9.6 * peso) + (1.8 * altura) - (4.7 * edad);

let sedentarioH = 1.1;
let sedentarioM = 1;
let pocoActivoH = 1.2;
let pocoActivoM = 1.2;
let ligeroH = 1.5;
let ligeroM = 1.5;
let moderadoH = 1.8;
let moderadoM = 1.6;
let intensoH = 2.1;
let intensoM = 1.8;

if (sexo == 1) {
  if (actividad == 1) {
    alert("usted debe consumir " + parseInt(basalHombre * sedentarioH) + "kcal a diario.")
  }
  else if (actividad == 2) {
    alert("usted debe consumir " + parseInt(basalHombre * pocoActivoH) + "kcal a diario.")
  }
  else if (actividad == 3) {
    alert("usted debe consumir " + parseInt(basalHombre * ligeroH) + "kcal a diario.")
  }
  else if (actividad == 4) {
    alert("usted debe consumir " + parseInt(basalHombre * moderadoH) + "kcal a diario.")
  }
  else if (actividad == 5) {
    alert("usted debe consumir " + parseInt(basalHombre * intensoH) + "kcal a diario.")
  }
}else if(sexo == 2) {
  if (actividad == 1) {
    alert("usted debe consumir " + parseInt(basalMujer * sedentarioM) + "kcal a diario.")
  }
  else if (actividad == 2) {
    alert("usted debe consumir " + parseInt(basalMujer * pocoActivoM) + "kcal a diario.")
  }
  else if (actividad == 3) {
    alert("usted debe consumir " + parseInt(basalMujer * ligeroM) + "kcal a diario.")
  }
  else if (actividad == 4) {
    alert("usted debe consumir " + parseInt(basalMujer * moderadoM) + "kcal a diario.")
  }
  else if (actividad == 5) {
    alert("usted debe consumir " + parseInt(basalMujer * intensoM) + "kcal a diario.")
  }
};