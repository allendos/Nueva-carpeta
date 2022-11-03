//funcion que devulve 5 nombre y saluda a los que comienzan con ma
let nombres=["maria","felipe","martin","jason","felix"];
function recopilar(){  
    nombres.forEach(nombre=>{ 
        console.log("nombre :"+nombre)
        if(nombre.startsWith("ma")){
            console.log("hola "+nombre)}
        });
        }
    recopilar();    

    console.log("operador logico and &&")

    console.log(45 && true)//true
    console.log(false && 25)//false
    console.log("-------------------------------------------------------")
    //operador or || devuelve a si es verdadero o si no b 
    //operador ?? devuelve b cuando es null o undefined
    console.log(null|| false)
    console.log(true || true)
    //tenemos una data donde tenemos almacenado la cantidad de balas que le quedan ala persona
    //necesitamos mostrar al usuario visulamente si se ha que dado sin balas o no utilizaremos
    //si quisieramos sumar la cantidad de balas que tiene con los proyectiles utilizariamos?
    
    const data = {balas:0};
    console.log(data.balas || "sin balas");
    console.log(data.balas ?? "sin balas");

    const requerido = true;
    const saludar = function saludo (){ "Hola Clase!"};
    console.log(requerido&&saludar)
    const celular ={
        color:"blue",
        modelo:"vivo",
        ram:"3GB",
        camaras:"4",
        bateria:"4800Aph",
        sonarAlarma:()=>"BEP BEP 4:00 AM",
        apagarCel: function(){
            console.log("apagar")
        }
    }
    console.log(celular.modelo);
    console.log(celular.apagarCel());
    