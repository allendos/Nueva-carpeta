console.log("cargando Banner ...")
console.log("Cargando Textos ...")
let tarea_asincronica = ()=> {
    let promesa = new Promise ((resolve,reject)=>{
        setTimeout(function(){
            console.log("mensajes cargados asincronicamente");
            resolve();
        },1300)
    })
    return promesa
}
tarea_asincronica();
console.log("cargando footer")