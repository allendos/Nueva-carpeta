console.log("Strings");
let texto = "Cinco palabras uno dos tres cuatro cinco";
console.log(texto)
let prueba=texto.startsWith("Recorcholis");
if(prueba){
    console.log("Esto es una mala palabra")
}else{console.log("puede seguir escribiendo")}
console.log(prueba ? "esto es una mala palabra" : "puede seguir escribiendo")
console.log(texto.startsWith("Cinco"));
console.log(texto.endsWith("cinco"));
//si la encuentra muestra su posicion sino muestra -1
let e=(texto.indexOf("s"));
if(e>=0){console.log("usted ha sido baneado")}
else(console.log("todo bien"))
console.log(texto.indexOf("c",10))
//funciones anonimas
/*const fUno = function(){
    console.log ("soy la funcion numero 1")
}*/
const fUno = ()=>{
    console.log ("soy la funcion numero 1")
}