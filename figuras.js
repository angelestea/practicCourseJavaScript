
//Código del cuadrado
console.group("Cuadrado");

function perimetroCuadrado(lado){
    return lado * 4;
};

function areaCuadrado(lado){
    return lado * lado;
};

console.groupEnd();

//Código del trángulo
console.group("Triangulo");

function perimetroTriangulo(lado1, lado2, lado3){
    return lado1 + lado2 + lado3;
}

function triangleArea(base, altura){
    return ( base * altura ) / 2;
}

console.groupEnd();

//Código del circulo
console.group("Círculo");



//Diameter
function circleDiameter(radio){
    return radio * 2;
}


//pi value

const pi1 = 3.1415;
const pi2 = Math.PI;

// Circumference - perimeter

function circumferenceCircle(radio){
    return circleDiameter(radio) * pi2;
}


//Área

function circleArea(radio){
    return (radio * radio) * pi2;
}

console.groupEnd();

// Interacción con html

function calcularPerimetroCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}


function calcularAreaCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);
    alert(area);
}