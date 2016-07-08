/**
 * Created by neo on 07-07-16.
 */

var socket = io.connect("http://localhost:3000");
socket.connect();


socket.on('connect',function () {
});

socket.emit('message','Hola mundo cruel');
socket.emit('disconnect');



socket.on('response',function (message) {
    var response = document.getElementsByClassName('response');
    var msg = JSON.parse(message);
    console.log(typeof msg);
    for(var x in msg){

        console.log(msg[x], 'valor de X');
        var e = document.createElement('span');
        e.innerHTML = msg[x];
        response[0].appendChild(e);
    }
    // console.log(message);
});
