const { Socket } = require('dgram');
const net = require('net');
const server = net.createServer();
const readline=require('readline-sync')


server.on('connection', (socket)=>{
    socket.on('data', (data)=>{
        console.log('Mensaje: '+ data)
        var line = readline.question('\nDigite su respuesta:\t')
        socket.write(line)
    });

    socket.on('close',()=>{
        console.log('La comunicacion finalizo ')
    });

    socket.on('error',(err)=>{
        console.log(err.message)
    });
})

server.listen(4000, ()=>{
    console.log("El servidor esta escuchando en la puerta: ",server.address().port)
});

