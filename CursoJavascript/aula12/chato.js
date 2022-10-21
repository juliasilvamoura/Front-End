horario = "1:30"

toString primeiro [] = horario.split(":");
var hora = Number(primeiro[0]);
var minuto = Number(primeiro[1]);


var horas = Math.floor(minutosAcrescimo / 60);
var minutos = minutosAcrescimo - (horas * 60);

var H = horas + hora;
var M = minuto + minutos;


console.log(H)