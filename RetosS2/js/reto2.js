/*Sowei es un local que vende sanduches y lo contrató a usted para que le programe el software que van
a utilizar para registrar las ventas y mostrar por pantalla la factura del pedido.
La compra de sanduches en Sowei se hace por pasos.
El cliente primero elige el tipo de pan que desea:
Pan tradicional
Pan con Orégano
Después el cliente debe elegir la carne:
Jamón
Pollo
Pavo
Finalmente el cliente elige un acompañante:
Queso
Mayonesa
Verduras

Esta la tabla de precios según el sanduche que se arma el cliente:

Detalle Precio
Sanduche Pan Tradicional Jamón y Queso 8550
Sanduche Pan Tradicional Pavo y Mayonesa 11000
Demás sanduches 10800

El sistema permite que el cajero escriba por el teclado las opciones elegidas por el cliente. El sistema
funciona solo para un sanduche.
Despues de ingresar el pedido, se debe mostrar por pantalla la factura con la descripción del pedido, los
descuentos, el valor a pagar y el nombre del cliente.
Antes de imprimir la factura se le debe preguntar al cliente la edad. Si el cliente tiene 65 años o más, se
le hace un descuento del 2%.
Cada factura tiene un número. El número de la factura es generado por el sistema de forma aleatoria. El
número mayor de factura es 900.

EJEMPLO DE EJECUCIÓN DEL SOFTWARE

Cuando se ejecuta el programa, se debe imprimir por pantalla lo siguiente:

*******************SOWEI*******************

==============================================
TIPO DE PAN. Escriba el número del producto con el teclado.
=============================================
1. Pan tradicional
2. Pan con Orégano
1 (Ejemplo de opción escrita por el cajero)
==============================================
CARNE. Escriba el número del producto con el teclado.
=============================================

1. Jamón
2. Pollo
3. Pavo
2 (Ejemplo de opción escrita por el cajero)
==============================================
ACOMPAÑANTE. Escriba el número del producto con el teclado.
=============================================
1. Queso
2. Mayonesa
3. Verduras
3 (Ejemplo de opción escrita por el cajero)

****Escriba el nombre del cliente****
Sebastian (Ejemplo de texto escrito por el cajero)
****Escriba la edad del cliente****
68 (Ejemplo de texto escrito por el cajero)

Generando Factura......
===========================================================
Factura Número 566
SOWEI MEDELLIN
PEDIDO CLIENTE Sebastian
Pan Tradicional Pollo Verduras $10800
Descuento (2%) $216
TOTAL A PAGAR................................................................................. $10584
===========================================================*/

pedido = tomarPedido();
detallePedido = valorPedido(pedido);
console.log(pedido);
cliente = tomarDatos();
descuento = validarDescuento(detallePedido, cliente);
generarFactura(detallePedido, cliente, descuento);

function tomarPedido(){
    tipoPan=prompt('TIPO DE PAN. Escriba el número del producto con el teclado. 1. Pan tradicional 2. Pan con Orégano','');
    tipoCarne=prompt('CARNE. Escriba el número del producto con el teclado. 1. Jamón 2. Pollo 3. Pavo', "");
    acompañante=prompt('ACOMPAÑANTE. Escriba el número del producto con el teclado. 1. Queso 2. Mayonesa 3. Verduras','');
    
    return [tipoPan, tipoCarne, acompañante];
}

function valorPedido(pedido){
    pan = (pedido[0] == 1)? 'Pan Tradicional' :'Pan con oregano';
    carne = (pedido[1] == 1)? 'Jamon' : (pedido[1] == 2 ? 'Pollo' : 'Pavo');
    acompañante = (pedido[2] == 1)? 'Queso' : (pedido[2] == 2 ? 'Mayonesa' : 'Verduras');

    if(pedido[0] == 1 && pedido[1] == 1 && pedido[2] == 1){
        console.log('Pan Tradicional Jamón y Queso 8550');
        return detallePedido = [pan, carne, acompañante, 10800];
    }else if(pedido[0] == 1 && pedido[1] == 3 && pedido[2] == 2){
        console.log('Sanduche Pan Tradicional Pavo y Mayonesa 11000');
        return detallePedido = [pan, carne, acompañante, 10800];
    }else{
        console.log('Sanduches 10800');
        return detallePedido = [pan, carne, acompañante, 10800];
    }
}

function tomarDatos(){
    nombreCliente = prompt('Ingrese el nombre del cliente','');
    edadCliente = prompt('Ingrese la edad del cliente','')
    descuento = false;
    if(edadCliente > 64){
        descuento = true;
    }
    return datos = [nombreCliente, edadCliente, descuento];
}

function validarDescuento(detallePedido, cliente){
    if(cliente[2]){
        return descuento = detallePedido[3] * 0.02;
    }else{
        return descuento = 0;
    }
}

function generarFactura(detallePedido, cliente, descuento){
    console.log(detallePedido);
    console.log('Generando Factura......');
    factura = Math.floor(Math.random() * (900-1 + 1)) + 1;
    console.log(`Factura Número ${factura}`);
    console.log('SOWEI MEDELLIN');
    console.log(`PEDIDO CLIENTE ${cliente[0]}`);
    console.log(detallePedido[0]+" "+detallePedido[1]+" "+detallePedido[2]+" "+detallePedido[3]);
    console.log(`Descuento (2%) $${descuento}`);
    console.log("TOTAL A PAGAR........................... $" + (detallePedido[3] - descuento));
}

