
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


//Perímetro
function perimetroTriangulo(lado1, lado2, lado3){
    return lado1 + lado2 + lado3;
}


//Área del triangulo
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

//Cuadrado
//Perimeter
function calcularPerimetroCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}

//Area
function calcularAreaCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);
    alert(area);
}

//Triángulo
//Perimeter
function calcularPerimetroTriangulo(){
    const input1 = parseFloat(document.getElementById('InputTriangulo1').value);
    const input2 = parseFloat(document.getElementById('InputTriangulo2').value);
    const input3 = parseFloat(document.getElementById('InputBaseTriangulo').value);

    const perimeter = perimetroTriangulo(input1,input2,input3);
    alert(perimeter);
}

//Area
function calcularAreaTriangulo(){
    const input = parseFloat(document.getElementById("InputAltura").value);
    const input1 = parseFloat(document.getElementById("InputBase").value);

    const area = triangleArea(input, input1);
    alert(area);
}

//Circle
//Perimeter
function calcularCircunferenciaCirculo(){
    const input = document.getElementById("InputCirculo");
    const value = input.value;

    const perimeter = circumferenceCircle(value);
    alert(perimeter);
}

//Diameter
function calcularDiametroCirculo(){
    const input = document.getElementById("InputCirculo");
    const value = input.value;

    const diameter = circleDiameter(value);
    alert(diameter);
}

//Area
function calcularAreaCirculo(){
    const input = document.getElementById("InputCirculo");
    const value = input.value;

    const area = circleArea(value);
    alert(area);
}