function calcularMediana(lista){

    
    //Manera de ordenar la lista
    lista = lista.sort(comprobation);

    function comprobation(a, b){
        return a - b;
    }
    //

    function calcularMediaAritmetica(lista){

        const sumaLista = lista.reduce(
            function (valorAcumulado = 0, nuevoElemento){
                return valorAcumulado + nuevoElemento;
            }
        );

        const promedioLista = sumaLista / lista.length
            
        return promedioLista   
    }


    const mitadLista = parseInt(lista.length / 2);

    function esPar(number){
        if(number % 2 === 0){
            return true;
        } else{
            return false;
        }
    }

    let mediana;

    if( esPar(lista.length)){
        const elemento1 = lista[mitadLista-1];
        const elemento2 = lista[mitadLista];

        const promedioElemento1y2 = calcularMediaAritmetica ([elemento1, elemento2]);

        mediana = promedioElemento1y2;

    }else{
        mediana = lista[mitadLista]

    }

    return mediana

}
