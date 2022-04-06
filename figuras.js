
//Código del cuadrado
console.group("Cuadrado");
//valores constantes
// const ladoCuadrado = 5;
// console.log("Los lados del cuadrado miden: " + ladoCuadrado + " cm");

function perimetroCuadrado(lado){
    return lado * 4;
};
// console.log("El perímetro del cuadrado es: " + perimetroCuadrado + " cm");

//const areaCuadrado = ladoCuadrado * ladoCuadrado;
// console.log("El área del cuadrado es: " + areaCuadrado + " cm ^2");

function areaCuadrado(lado){
    return lado * lado;
};

console.groupEnd();

//Código del trángulo
console.group("Triangulo");
//valores constantes
// const ladoTriangulo1 = 6;
// const ladoTriangulo2 = 6;
// const baseTriangulo = 4;
// const alturaTriangulo = 5.5;

// console.log("Los lados del triángulo miden: " + ladoTriangulo1 + " cm, " + ladoTriangulo2 + " cm, " + baseTriangulo + " cm");
// console.log("La altura del triángulo es de: " + alturaTriangulo + " cm");

//const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
function perimetroTriangulo(lado1, lado2, lado3){
    return lado1 + lado2 + lado3;
}
//console.log("El perímetro del triángulo es: " + perimetroTriangulo + " cm");

// const areaTriangulo = ( baseTriangulo * alturaTriangulo ) / 2;
// console.log("El área del triángulo es: " + areaTriangulo + " cm ^2");

function triangleArea(base, altura){
    return ( base * altura ) / 2;
}

console.groupEnd();

//Código del circulo
//valores constantes
console.group("Círculo");

//Radio
//valores constantes
// const radioCirculo = 4;
// console.log("El radio del círculo es: " + radioCirculo + " cm");

//Diámetro
function circleDiameter(radio){
    return radio * 2;
}
//valores constantes
// const diametroCirculo = radioCirculo * 2;
// console.log("El diámetro del círculo es: " + diametroCirculo + " cm");

//pi

const pi1 = 3.1415;
const pi2 = Math.PI;
//console.log("Pi es: " + pi2 + " cm");

// Circunferencia

function circumferenceCircle(radio){
    return circleDiameter(radio) * pi2;
}

//const perimetroCirculo = diametroCirculo * pi;
//console.log("La circunferencia del círculo es: " + perimetroCirculo + " cm");


//Área
//valores constantes

// const areaCirculo = (radioCirculo * radioCirculo) * pi;
// console.log("El área del círculo es: " + areaCirculo + " cm^2");
function circleArea(radio){
    return (radio * radio) * pi2;
}

console.groupEnd();