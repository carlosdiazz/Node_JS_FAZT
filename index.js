const math =require('./math.js');
const os = require('os');
const fs = require('fs');
const http = require('http');


const handleServer = function(req, res){
    res.writeHead(200, {'content-type' : 'text/html'});
    res.write('<h1>Hola Mundo  NodeJS</h1>');
    res.end();
}

const server = http.createServer(handleServer);

server.listen(3000, function(){
    console.log('Server on port 3000');
});

//Aqui tengo metodo tradicional para crear un Server
/*
//Aqui como parametro request o req, es diciendo que tendra una peticion.
//Aqui como parametro response o res, es diciendo que tendra que devolver una respeusta
http.createServer(function(req, res){
    res.writeHead(200, {'content-type' : 'text/html'});
    res.write('<h1>Hola Mundo  NodeJS</h1>');
    res.end()
}).listen(3000);
*/



//Aqui tengo ejmplo del modulo FS
/*
fs.writeFile('./texto.txt',"Linea 1,\nLinea 2", function(err){
    if(err){
        console.log(err);
    }
    console.log("Archivo Creado");
})

fs.readFile('./texto.txt',function(err,data){
    if (err){
        console.log(err);
    }
    //Aqui con la funcion toString convierto el texto en String
    console.log(data.toString());
})

console.log("Ultima linea del codigo")
*/

//Aqui tengo ejemplo del modulo OS
/*
console.log(os.platform());
console.log(os.release());
console.log('Memoria Libre: ',os.freemem())
console.log('Memoria Total: ',os.totalmem())
*/


//Aqui tengo ejemplo del modulo que cree Math
/*
console.log(math.sumar(5,5));
console.log(math.restar(5,5));
console.log(math.multiplicar(5,5));
console.log(math.dividir(5,5));
console.log(math.dividir(5,0));
*/