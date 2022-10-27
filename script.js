//addEventListener recibe >>> evento y funcion <<<<
//cuando sucede ese evento ejecutamos la fx que definimos

//addEventListener

//Defino valor entrada
let valorEntrada = 200
let cantidadEntradas = document.getElementById('cantidadEntradas')

let botonResumen = document.getElementById('botonResumen')

let categoria = document.getElementById('categoria')

let totalCompra = document.getElementById('totalCompra')


function resumen() {
    let valorEntrada = 200
    let cantidadEntradas = document.getElementById('cantidadEntradas')
    let categoria = document.getElementById('categoria')
    let totalCompra = document.getElementById('totalCompra')

    totalCompra.innerHTML= "Total a Pagar: $ " + (cantidadEntradas.value * valorEntrada * categoria.value);
  }

    