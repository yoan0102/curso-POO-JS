class Usuario{
    constructor(nombre, apellidos, correo, password){
        this.nombre = nombre
        this.apellidos = apellidos
        this.correo = correo
        this.password = password
    }
}




let form1 = document.querySelector('#formulario')


form1.addEventListener('submit', (e) => {
    e.preventDefault()
    let nombre = e.target.nombre.value
    let apellidos = e.target.apellidos.value
    let correo = e.target.correo.value
    let password = e.target.password.value

    let usuario = new Usuario(
        nombre,
        apellidos,
        correo,
        password,
    ) 

    console.log(usuario)
})
