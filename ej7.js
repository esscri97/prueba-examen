let propPeli = new String(`{"nombre" : "Harry Potter", "actores" : "['act1', 'act2']"}`);



class Pelicula{
    constructor(datos){
        this.peliJSON = JSON.parse(datos);
        this.nombre = this.peliJSON.nombre;
        this.actores = this.peliJSON.actores;
    }

    mostrarDatos(){
        console.log(`Nombre: ${this.nombre} | Actores: ${this.actores}`);
    }
}

let harry = new Pelicula(propPeli);
harry.mostrarDatos();