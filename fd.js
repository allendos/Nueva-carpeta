console.log("funciones");
for(let a=0; a<=10; a++){
    console.log("vez que me repito")}
    let abc = 0;
while(abc !=2){
    console.log("bitcoins en tu cuenta")
    abc=abc+1;}
    let nombres=["jose","juan","maria","valvez"]
    let apellidos=["jose","juan","maria","valvez"]
    for(let i=0; i<=3; i++){
        console.log("mi nombre es "+nombres[i])};
        nombres.forEach(valor=>{
            console.log(valor)
        });

       apellidos.map(valor =>{
            console.log(valor)
        })
        console.log(apellidos)
       function suma(){
       let resultado = 10+10;
       console.log("suma:" + resultado)
       }
       suma();
       
       function restar (num1,num2){
         
       console.log(num1-num2);
       }
       restar(10,20)
       /* name = parametro por defecto*/
       //arows duntions = funcioneqs de flecha
       const saludar = (name="Allen")=>{
           return console.log("hola "+name)
       }
       saludar("juan");