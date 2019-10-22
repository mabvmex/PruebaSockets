
const {io} = require('../server');

io.on('connection', (client) => {
    console.log('Usuario Conectado')

    client.emit('enviarMensaje', {
        usuario: 'Administrador',
        mensaje: 'Bienvenido a mi app',
    });

    client.on('disconnect', () => {
        console.log('Usuario ha salido o se desconectado');
    });

    // Escuchar cliente
    client.on('enviarMensaje', (data, callback) => {

        // console.log(data)

        client.broadcast.emit('enviarMensaje', data);

        // if (mensaje.usuario) {
        //     callback({
        //         respuesta: 'Todo salió bien',
        //     })
        // } else {
        //     callback ({
        //         respuesta: 'Todo salio mal'
        //     });
        // }

    });
});