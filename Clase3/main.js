class Forma{
    constructor(alto, ancho, color ){
        this.alto = alto
        this.ancho = ancho
        this.color = color
    }

    dibujar(){
        return document.body.innerHTML = `
            <div
                style="
                    width: ${this.ancho}px;
                    height:${this.alto}px;
                    background: ${this.color};"
            >
            </div>
        `
    }
}



class Cuadrado extends Forma{
    constructor(lado, color){
        super(lado, lado, color)
    }
}

let figuraCuadrada = new Cuadrado(400, "green")
