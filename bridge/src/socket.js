/**
 * Created by neo on 06-07-16.
 */
var server = require('http').Server();
var api = require('request');

var io = require('socket.io')(server);

io.sockets.on('connection', function (client) {

    client.on('message', function (message) {
        apiService(function (error, response, body) {
            client.emit('response', body);
        }, message);
    });

    client.on('disconnect', function () {});
});

server.listen(3000);

function apiService(callback, message) {
    var options = {
        uri : 'http://back:8000/robot/?message='+message,
        method : 'GET'
    };
    // var res = '';
    console.log(options);
    api(options, function (error, response, body) {
        // if (!error && response.statusCode == 200) {
        //     res = body;
        // }
        // else {
        //     res = 'Not Found';
        // }
        callback(error, response, body);
    });

    // var router = express.Router();
    // console.log(message, 'llege a la funcion');
    // router.get('http://localhost:8000/robot/?message='+message, function (err, res) {
    //     if (!err && res.statusCode == 200) {
    //         return callback(res);
    //     }
    //
    // });

    // module.exports = router;
}