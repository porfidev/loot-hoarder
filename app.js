/**
 * Created by elporfirio on 11/11/16.
 */

var express = require('express');
var Pusher = require('pusher');

var app = express();

app.use(express.static('public'));

app.listen(3000, function(err){
    console.log("Trabajando con express en el puerto: " + 3000)
});

app.get('/saludo', function (req, res) {
    res.send('Hola Mundo');
});

var pusher = new Pusher({
    appId: '269307',
    key: '27f4c767b00d761a5c0c',
    secret: '81b95031803263d4a46c',
    encrypted: true
});

pusher.trigger('test_channel', 'my_event', {
    "message": "hello world"
});

// setInterval(function(){
//     pusher.trigger('test_channel', 'my_event', {
//         "message": "Welcome to the jungle",
//         "heartstone": "elporfirio#1234"
//     });
// }, 3000);