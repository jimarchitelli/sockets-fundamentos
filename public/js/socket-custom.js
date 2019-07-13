var socket = io();

socket.on('connect', function(){
    console.log('conectado al servidor');
})

//Escuchar
socket.on('disconnect', function(){
    console.log('desconectado del servidor');
});

socket.on('enviarMensaje', (mensaje) => { console.log(mensaje);})

//Emitir
socket.emit('enviarMensaje', { usuario: 'Juan', mensaje: 'Hola mundo'}, function(mensaje) {
    console.log(mensaje);
});