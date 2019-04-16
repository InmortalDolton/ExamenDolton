function inicio() {
	document.getElementById("inicio").style.display= "block";
	document.getElementById("ventas").style.display= "none";
	document.getElementById("reportes").style.display= "none";
	document.getElementById("clientes").style.display= "none";
	document.getElementById("productos").style.display= "none";
}
function ventas() {
	document.getElementById("inicio").style.display= "none";
	document.getElementById("ventas").style.display= "block";
	document.getElementById("reportes").style.display= "none";
	document.getElementById("clientes").style.display= "none";
	document.getElementById("productos").style.display= "none";
}
function reportes() {
	document.getElementById("inicio").style.display= "none";
	document.getElementById("ventas").style.display= "none";
	document.getElementById("reportes").style.display= "block";
	document.getElementById("clientes").style.display= "none";
	document.getElementById("productos").style.display= "none";
}
function clientes() {
	document.getElementById("inicio").style.display= "none";
	document.getElementById("ventas").style.display= "none";
	document.getElementById("reportes").style.display= "none";
	document.getElementById("clientes").style.display= "block";
	document.getElementById("productos").style.display= "none";
}
function productos() {
	document.getElementById("inicio").style.display= "none";
	document.getElementById("ventas").style.display= "none";
	document.getElementById("reportes").style.display= "none";
	document.getElementById("clientes").style.display= "none";
	document.getElementById("productos").style.display= "block";
}