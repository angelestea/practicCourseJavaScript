function calcularMediaAritmetica(lista){
    

    // let sumalista = 0;

    // for (let i = 0; i < lista.length; i++){
    //     sumalista += lista[i];
    // }


    const sumaLista = lista.reduce(
        function (valorAcumulado = 0, nuevoElemento){
            return valorAcumulado + nuevoElemento;
        }
    );

    const promedioLista = sumaLista / lista.length
        
    return promedioLista   
}