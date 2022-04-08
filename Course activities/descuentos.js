
function calcularPrecioConDescuento(precio, descuento){
    const porcentajePrecioConDescuento = 100 - descuento;

    const precioConDescuento = ( precio * porcentajePrecioConDescuento ) / 100;

    return precioConDescuento;
}

function onClickButtonPriceDiscount(){

    const inputPrice = document.getElementById("InputPrice");

    const priceValue = parseFloat(inputPrice.value);

    const inputDiscount = document.getElementById("InputDiscount");

    const discountValue = parseFloat(inputDiscount.value);

    const precioConDescuento = calcularPrecioConDescuento(priceValue, discountValue)

    const resultP = document.getElementById("ResultPrice");

    resultP.innerText = "The price with descount is: " + precioConDescuento + " dollars";

}

function couponDescount(){

    const price = parseFloat(document.getElementById("price").value);

    const value = document.getElementById("InputCoupon");

    const inputCoupon = value.value;

    const resultp = document.getElementById("resultPri")

    let descount = 0;

    if(inputCoupon === "JuanDC_es_Batman"){
        descount = 15;
    }else if(inputCoupon === "pero_no_le_digas_a_nadie"){
        descount = 30;
    }else if(inputCoupon === "es_un_secreto"){
        descount = 25;
    }else{
        descount = 0;
    }
    
    if(descount === 0){
        resultp.innerText = "El cupon no tiene descuento ..";
    }else{
        const precioConDescuento = calcularPrecioConDescuento(price, descount)
        resultp.innerText = "The price with your coupon is "  + precioConDescuento + "!!";
    }
    
}

