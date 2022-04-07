class Biblioteca{

    listaLibros = [];

    getLibros(){
        return this.listaLibros;
    }

    añadirLibro(libro){
        this.listaLibros = [...this.listaLibros, libro];
    }
    
    buscarLibrosNombre(nombreBuscar){
        //let resultado = listaLibros.filter( libro => libro.nombre == nombreBuscar);
        let resultado = listaLibros.filter( libro => libro.nombre.includes(nombreBuscar));
        return resultado;
    }

    buscarLibrosAutor(autorBuscar){
        return this.listaLibros.filter((libro) => {
            const autores = libro.autores.filter((autor) => autor.nombre.includes(autorBuscar))
            return autores.length > 0;
        });
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
