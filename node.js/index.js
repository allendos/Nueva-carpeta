/*console.log("hola mundo")
// una funcion que reciba dos numeros por parametros y muestre el resultadp em consola
function num (num1,num2)
{   
    let num3=num1/num2
    console.log("resultado: "+num3)
}
console.log(num(10,10))*/
// FileSysten
const fs= require("fs");
const primerTxt = fs.readFileSync("./archivos/primero.txt","utf-8");
console.log(primerTxt);
//estamos agregando texto al archivo txt, y con flag hacemos que se añada el texto a continuacion del archivo sin sobre escribir
let content = " Hola estoy agregando este texto";
fs.writeFileSync("./archivos/segundo.txt",content,{flag: "a"});

//vamos a crear una promesa que devolvera un texto en un archivo
function getText(pathFile){
    return new Promise((resolve,reject)=>{
      fs.readFile(pathFile,"utf-8",(err,data)=>{
          if(err){
              reject(err)
          }
          resolve(data)
      })  
    })
}
getText("./archivos/segundo.txt")
.then((result)=>{
    console.log(result);
})
.catch((error)=>{
    console.log(error)
});
