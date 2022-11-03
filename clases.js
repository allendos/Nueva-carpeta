//import Persona from "src/"
class Persona {
    // Dentro de la clase van todas la propiedades y metodos de una persona
    // El constructor es lo primero que se ejecuta cuando ejecutamos una clase
    constructor(nombre,age,especie ){
     this.nombre = nombre;
     this.age = age;
     this.especie = especie;
    }
    saludar(){
        console.log("Hola a Todos!"+this.nombre);
    }

    
    mostrarinformaacion(){
    console.log( ` nombre:${this.nombre} age:${this.age} especie:${this.especie}`);
  }

}
// estamos heredadando de la clase persona
class profesor extends Persona{
    constructor(nombre,age,raza,profesion){
        super(nombre,age,raza)
        this.profesion = profesion;
    }
    infoProfesor(){
        console.log( ` nombre:${this.nombre} age:${this.age} especie:${this.especie} profesion: ${this.profesion}`);
    }
}

//nombre:marc
//año.45
//raza: reptil
// $ {}



//Vamos a instanciar la clase persona en person
let person = new Persona("mark",42,"reptil"); 
let prof = new profesor("jesualdo",40,"humano","ing.");
person.saludar()// Hola a Todos!
person.mostrarinformaacion();
prof.infoProfesor();
