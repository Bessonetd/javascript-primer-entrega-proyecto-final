class Producto {
    constructor(nombre, precio) {
        this.nombre  = nombre;
        this.precio  = parseFloat(precio);
    }
}

const productos = [];
productos.push(new Producto("Traba Puerta", "500"));
productos.push(new Producto("Cestos", "600"));
productos.push(new Producto("Almohada", "550"));
    
console.log(productos)

function descuento(parametro1, parametro2) {
    return resultadoDescuento = parametro1 * parametro2
}
function cantidadTotal(parametro1, parametro2) {
    return precioTotal = parametro1 * parametro2
}

    let producto = parseInt(prompt("Ingrese el numero de la opcion que desea \n 1) Traba Puerta $500 \n 2) Cestos $600 \n 3) Almohada $550 \n Ingrese 0 para cancelar la operacion"))

    let cantidad = parseInt(prompt("Cuantos quiere?"))

    while(producto != 0){
        switch(producto){
            case 1:
                
                cantidadTotal(cantidad, 500)
                console.log(precioTotal)

                descuento(precioTotal, 0.2)
                break;
            case 2:
                cantidadTotal(cantidad, 600)
                console.log(precioTotal)

                descuento(precioTotal, 0.2)
                break;
            case 3:
                cantidadTotal(cantidad, 550)
                console.log(precioTotal)

                descuento(precioTotal, 0.2)
                break;
            default:
                alert("Eleccion no valida")
                break;    

        }
        alert("Usted eligio:" + "\n" + "Producto: " + producto + "\n" + "Cantidad: " + cantidad + "\n" + "Total: " + precioTotal + "\n" + "Descuento: " + resultadoDescuento)
        break;
    }