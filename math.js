//Aqui creo un objecto
const Math = {};

function sumar(x1,x2){
    return x1+x2
}

function restar(x1,x2){
    return x1-x2
}

function dividir(x1,x2){
    if(x2==0){
        return 0
    }else{
        return x1/x2
    }
}

function multiplicar(x1,x2){
    return x1*x2
}


//Aqui agrego las propiedades al objecto
Math.sumar=sumar;
Math.restar=restar;
Math.multiplicar=multiplicar;
Math.dividir=dividir;

//Aqui estoy exportando el objecto
module.exports=Math;

/*
exports.sumar=sumar;
exports.restar=restar;
exports.dividir=dividir;
exports.multiplicar=multiplicar;
*/