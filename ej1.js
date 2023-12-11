class Aula{
    constructor(alumnos, materia){
        this.alumnos = alumnos;
        this.materia = materia;
    }

    mostrarDatos(){
        console.log(`Alumnos: ${this.alumnos} | Materia: ${this.materia}`);
    }
}

class Musica extends Aula{
    constructor(alumnos, materia, instrumento){
        super(alumnos, materia);
        this.instrumento = instrumento;
    }

    mostrarDatos(){
        console.log(`Alumnos: ${this.alumnos} | Materia: ${this.materia} | Instrumento: ${this.instrumento}`);
    }
}


let piano = new Musica(25, "Música", "Piano");
piano.mostrarDatos();