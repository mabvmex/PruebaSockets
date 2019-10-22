// Aquí agregamos funciones que queremos que se disparen cuando recibimos/enviamos info del servidor

// io es una función que aparece por la librería importada.
// Se usa var para aumentar la compatibilidad con navegadores, no todos soportan "let"
// io() es el mismo objeto que definimos en server.js Lo usaremos para la comunicación en ambos lugares.
var socket = io(); // Usamos 'var' para aumentar la compatibilidad con los navegadores

// Escuchan información
socket.on('connect', function () {
    console.log('Conectado al servidor');
});

// Escucha conexión
socket.on('disconnect', function () {
    console.log('Se perdió la conexión con el servidor');
});

// Envian información
socket.emit('enviarMensaje', {
    usuario: 'mabvmex',
    mensaje: 'Hola Mundo',
}, function (resp) {
    console.log('Se disparó el CALLBACK', resp)
});

// Escuchar información
socket.on('enviarMensaje', function (mensaje) {
    console.log('mensaje del Servidor:', mensaje);
});