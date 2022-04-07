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

class Autor{

    constructor(nombre, email, genero){
        this.nombre = nombre;
        this.email = email;
        this.genero = genero;
    }

    añadirAutor(nombre, email, genero){
        objAutor = new Autor(nombre, email, genero);
        listaAutores = [...listaAutores, objAutor];
    }
    
    eliminarAutor(autor){
        
    }

}
