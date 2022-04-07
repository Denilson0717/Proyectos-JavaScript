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
listaAutores = [];
listaLibros = [];

objAutor = new Autor();
objLibro = new Libro();




objAutor.añadirAutor('Denilson', 'denilson1747@ts.com', 'M');

objLibro.añadirLibro('test', 200, 10, listaAutores);
objLibro.añadirLibro('melo', 100, 20, listaAutores);

objAutor.añadirAutor('Esteban', 'admin@ts.com', 'M');

objLibro.añadirLibro('Estesi', 50, 50, listaAutores);
objLibro.añadirLibro('estessi', 400, 5, listaAutores);

objAutor.añadirAutor('Prueba', 'tets@ts.com', 'T');

console.log(listaLibros);

console.log("El stock es de");
console.log(objLibro.totalStockLibros());

console.log("El valor total de los libros es");
console.log(objLibro.valorTotalLibros());

console.log("libros con el nombre test");
console.log(objLibro.buscarLibrosNombre('test'));

console.log("libros con el autor Denilson");
console.log(objLibro.buscarLibrosAutor('Denilson'));

console.log("libros con el autor Esteban");
console.log(objLibro.buscarLibrosAutor('Esteban'));
