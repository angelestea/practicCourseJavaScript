
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
//Triángulo isóseles
console.group("Triángulo isóceles");

function heightIsoscelesTriangle(value1, value2, value3){
    side1 = parseFloat(value1);
    side2 = parseFloat(value2);
    side3 = parseFloat(value3);

    let h, text;
    if((side1 == side2) && (side1 != side3) || (side2 == side3) && (side2 != side1) || (side1 == side3) && (side1 != side2)) {
        text = "It is isosceles triangle, its height is: ";
        if(side1 == side2 && side1 != side3){
            side1 *= side1;
            side3 /= 2;
            side3 *= side3;

            h = parseFloat(Math.sqrt( side1 - side3 ));
            return text + h
        }
        if(side3 == side2 && side3 != side1){
            side3 *= side3;
            side1 /= 2;
            side1 *= side1;

            h = parseFloat(Math.sqrt( side3 - side1 ));
            return text + h
        }
        if(side1 == side3 && side1 != side2){
            side1 *= side1;
            side2 /= 2;
            side2 *= side2;

            h = parseFloat(Math.sqrt( side1 - side2 ));
            return text + h
        }
    }else{
        return "No es un triángulo isóseles";
    }

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

//Isosceles triangle
//height
function calcularAlturaTrianguloIsosceles(){
    const input1 = parseFloat(document.getElementById('InputSide1IsoscelesTriangle').value);
    const input2 = parseFloat(document.getElementById('InputSide2IsoscelesTriangle').value);
    const input3 = parseFloat(document.getElementById('InputSide3IsoscelesTriangle').value);

    const height = heightIsoscelesTriangle(input1,input2,input3);
    alert(height);
}