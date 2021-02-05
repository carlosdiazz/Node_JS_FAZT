const net = require('net');

const server = net.createServer();

server.on('connection', (socket)=>{
    socket.on('data', (data)=>{
        console.log('Mensaje Recibido desde el cliente: '+ data)
        socket.write('Recibido')
    });

    socket.on('close',()=>{
        console.log('Comunicacion finalizo ')
    });

    socket.on('error',(err)=>{
        console.log(err.message)
    });
})

server.listen(4000, ()=>{
    console.log("El servidor esta escuchando en la puerta: ",server.address().port)
});

