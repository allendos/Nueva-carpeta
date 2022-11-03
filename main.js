let precio=0;
let cantidad=0;
console.log("Empezamos")
let primer ="primera variable"
var antes ="antes se usaba"
const estatico ='soy un contenido estatico'
/*
function contar(precio,cantidad){
    console.log("precio")
    console.log (precio);
    console.log("cantidad")
    console.log (cantidad);
    multi=precio*cantidad
    console.log("cantidad total a pagar ")
    console.log(multi)

    console.log ("ejecutado con exito")
if(multi>100){porcentaje=multi*10/100
pagar=multi-porcentaje
console.log("descuento aplicado",pagar)}}*/
//scope
var a=100;
console.log("por fuera equivalgo a:"+a)
function ambito(){
    console.log("2 sigo valiendo "+a)
    var a= 80;
    console.log("3. ahora valgo:" +a)}
console.log(ambito());
console.log(a)

let b=100;
console.log("por fuera equivalgo a:"+b)
function ambito2(){
    let b=80;   
    console.log("2 sigo valiendo "+b)
    
    console.log("3. ahora valgo:" +b)}
console.log(ambito2());
console.log(b)