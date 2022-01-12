array_nombre_del_alumno = [];

function submit()
{
var nombre_1 = document.getElementById("nombre_del_alumno1").value;
var nombre_2 = document.getElementById("nombre_del_alumno2").value;
var nombre_3 = document.getElementById("nombre_del_alumno3").value;
var nombre_4 = document.getElementById("nombre_del_alumno4").value;
array_nombre_del_alumno.push(nombre_1);
array_nombre_del_alumno.push(nombre_2);
array_nombre_del_alumno.push(nombre_3);
array_nombre_del_alumno.push(nombre_4);

console.log(array_nombre_del_alumno);

document.getElementById("display_nombre").innerHTML = array_nombre_del_alumno;
document.getElementById("botón_enviar").style.display = "none";
document.getElementById("botón_ordenar").style.display = "inline.block";
}
function sorting()
{
array_nombre_del_alumno.sort();
console.log(array_nombre_del_alumno);
document.getElementsById("display_npmbre").innerHTML = array_nombre_del_alumno;
}
