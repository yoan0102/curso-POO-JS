class Usuario {
  constructor(nombre, apellidos, correo, edad) {
    this.nombre = nombre;
    this.apellidos = apellidos;
    this.correo = correo;
    this.edad = edad;
  }

  saludar() {
    return document.write(`
            <div>
                <p>
                    Hola, mi nombre es ${this.nombre}
                </p>
            </div>
        `);
  }
}

class Profesor extends Usuario {
  constructor(nombre, apellidos, correo, edad, experiencia, lenguaje) {
    super(nombre, apellidos, correo, edad);
    this.experiencia = experiencia;
    this.lenguaje = lenguaje;
  }
}

class Estudiante extends Usuario {
  constructor(nombre, apellidos, correo, edad, activado) {
    super(nombre, apellidos, correo, edad);
    this.activado = activado;
  }
}

let alvaro = new Profesor(
    "Alvaro", 
    "Felipe",
    "alvaro@ed.team",
    54
    )