class Libro {

    listaAutores = [];

    constructor(nombre, precio, stock, autores){
        this.nombre = nombre;
        this.precio = precio;
        this.stock = stock;
        this.autores = autores;
    }

    añadirAutor(autor){
        this.listaAutores = [...this.listaAutores, autor];
    }

    borrarAutor(libro, autorBorrar){
        const autor = libro.autor;
        autor.forEach(autor => {
            (autor.nombre == autorBorrar)? libro.autor.splice(autor, 1) :'';
        });
        //libro.autor.filter(autor => autor.nombre == autorBorrar);
    }
}

