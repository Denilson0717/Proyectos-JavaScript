/*Crear una clase Biblioteca que va a tener los métodos de
añadir libro,
buscar libros por nombre,
buscar libros por autor,
obtener el total del stock de libros,
obtener valor total de todos los libros (suma total del resultado de cada stock de libro multiplicado por el precio).

Un Libro tiene: Nombre Precio Stock Autores
Un Autor tiene: Nombre Email Género

NOTAS:
- En los métodos de buscar, debería de buscar por una palabra clave y no solo por el valor exacto.
- Las clases deben de tener los getters y setters
- Para el atributo autores del Libro debe de tener getter, método para añadir y método para eliminar un autor */
class Libro {

    constructor(nombre, precio, stock, autores){
        this.nombre = nombre;
        this.precio = precio;
        this.stock = stock;
        this.autores = autores;
    }

    añadirLibro(nombre, precio, stock, autores){
        objLibro = new Libro(nombre, precio, stock, autores);
        listaLibros = [...listaLibros, objLibro];

    }

    buscarLibrosNombre(nombreBuscar){
        let resultado = listaLibros.filter( libro => libro.nombre == nombreBuscar);
        return resultado;
    }

    buscarLibrosAutor(autorBuscar){
        let resultado = [];
        listaLibros.forEach(libro => {
            const autores = libro.autores;
            for (let i = 0; i < autores.length; i++) {
                //console.log(autores[0].nombre);
                if(autores[i].nombre == autorBuscar){
                    resultado = [...resultado, libro]
                }
            }

            //autores.forEach(autor => {
            //    if(autores.nombre == autorBuscar){
            //        resultado = [...resultado, autores]
            //    }
            //});
            //let filtro = autores.filter( autores => autores.nombre == autorBuscar);
            //if (filtro.length > 0){
            //    resultado = [...resultado, filtro]
            //}
        });
        return resultado;
    }

    totalStockLibros(){
        let totalStock = 0;
        listaLibros.forEach(libro => {
            totalStock += libro.stock;
        });
        return totalStock;
    }

    valorTotalLibros(){
        let totalValor = 0;
        listaLibros.forEach(libro => {
            totalValor += (libro.stock * libro.precio);
        });
        return totalValor;
    }

}

