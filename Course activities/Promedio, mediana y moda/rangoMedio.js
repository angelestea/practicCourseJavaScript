function calcularRangoMedio(lista){

    const listaCount = {};

    lista.map(
        function (elemento){
            if(listaCount[elemento]){
                listaCount[elemento] += 1;
            }else{
                listaCount[elemento] = 1;
            } 
        }
    );


    const listaArray = Object.entries(listaCount).sort(
        function (elementoA, elementoB){
            return elementoA[1] - elementoB[1];
        }
    );

    let rangoMedio = (parseFloat(listaArray[listaArray.length - 1][0]) + parseFloat(listaArray[0][0])) / 2;

    return rangoMedio;

}