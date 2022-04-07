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
const contenedorTabla = document.querySelector('#lista-libro tbody');
const btnBuscar = document.querySelector('#btnBuscar');
//const btnAgregarAutor = document.querySelector('#agregarAutor');
//const modalAutor = document.querySelector('#agregarAutorModal');
objAutor = new Autor();
objLibro = new Libro();
objBiblioteca = new Biblioteca();

llenarArrays();
tablaHTML();
cargarEventListeners();
totales();

function cargarEventListeners() {
    btnBuscar.addEventListener('click', filtrarLibros);

    //btnAgregarAutor.addEventListener('click', modalAutor('show'));
}

function llenarArrays(){
    //Creamos y asignamos los autores y libros
    autor1 = new Autor('Denilson', 'denilson1747@ts.com', 'M');
    autor2 = new Autor('Esteban', 'admin@ts.com', 'M');
    autor3 = new Autor('Prueba', 'tets@ts.com', 'T');
    autor4 = new Autor('David', 'car@ts.com', 'M');

    objLibro.añadirAutor(autor1);
    objLibro.añadirAutor(autor2);
    objLibro.añadirAutor(autor3);
    objLibro.añadirAutor(autor4);

    libro1 = new Libro('test', 200, 10, [autor1, autor2, autor3]);
    libro2 = new Libro('melo', 100, 20, [autor1]);
    libro3 = new Libro('Estesi', 50, 50, [autor1, autor2, autor3]);
    libro4 = new Libro('estessi', 400, 5, [autor4, autor1]);

    objBiblioteca.añadirLibro(libro1);
    objBiblioteca.añadirLibro(libro2);
    objBiblioteca.añadirLibro(libro3);
    objBiblioteca.añadirLibro(libro4);

    objLibro.borrarAutor(libro1, 'Denilson');
}

function totales(){
    //Realizamos las consultas y las mostramos en pantalla
    totalStock = objBiblioteca.totalStockLibros();
    document.querySelector("#totalStock").value = totalStock;
    totalValor = objBiblioteca.valorTotalLibros();
    document.querySelector("#valorTotal").value = totalValor;
}

function filtrarLibros(e){
    e.preventDefault();
    let listaBusqueda = [];
    //tomamos los datos ingresados por pantalla
    const curso = e.target.parentElement.parentElement;
    nombreBuscar = curso.querySelector('#buscarNombre').value;
    nombreBuscarAutor = curso.querySelector('#buscarAutor').value;
    //Validamos que datos fueron ingresados y retornamos la lista de coincidencias
    if(nombreBuscar.length > 0){
        listaBusqueda = objBiblioteca.buscarLibrosNombre(nombreBuscar);
    }else if(nombreBuscarAutor.length > 0){
        listaBusqueda = objBiblioteca.buscarLibrosAutor(nombreBuscarAutor);
    }
    //validamos que la lista no este vacia y la pintamos
    if(listaBusqueda.length > 0){
        console.log('valido lista busqueda');
        pintarTablaBusqueda(listaBusqueda);
    }else{
        //pintarTablaBusqueda(listaBusqueda);
        tablaHTML();
    }
}

function pintarTablaBusqueda(lista){
    //llamamos el metodo para borrar la tabla
    vaciarTabla();
    //Recorremos la lista que recibimos en la busqueda y pintamos una fila por cada libro
    lista.forEach(libro => {
         const row = document.createElement('tr');
         row.innerHTML = `
              <td scope="row">${libro.nombre}</td>
              <td>${libro.precio}</td>
              <td>${libro.stock}</td>
              <td>
              ${libro.autores.map(autor => autor.nombre).join(', ')}
              </td>
         `;
         contenedorTabla.appendChild(row);
    });
}

function tablaHTML() {
    //llamamos el metodo para borrar la tabla
    vaciarTabla();
    //Recorremos la lista y pintamos una fila por cada libro
    listaLibros = objBiblioteca.getLibros();
    listaLibros.forEach(libro => {
         const row = document.createElement('tr');
         row.innerHTML = `
              <td scope="row">${libro.nombre}</td>
              <td>${libro.precio}</td>
              <td>${libro.stock}</td>
              <td>
                ${libro.autores.map(autor => autor.nombre).join(', ')}
              </td>
         `;
         contenedorTabla.appendChild(row);
    });
}

function vaciarTabla() {
    // Borramos la tabla que se esta mostrando en pantalla
    while(contenedorTabla.firstChild) {
        contenedorTabla.removeChild(contenedorTabla.firstChild);
    }
}
