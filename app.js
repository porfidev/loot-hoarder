/**
 * Created by elporfirio on 11/11/16.
 */

var express = require('express');
var Pusher = require('pusher');
var bodyParse = require('body-parser');

var app = express();

app.use(express.static('public'));
app.use(bodyParse.json());
app.use(bodyParse.urlencoded({extended: false}));

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

pusher.trigger('presence-loothoader', 'my_event', {
    "message": "hello world"
});

app.post('/pusher_auth', function(req,res){

    console.log('INICIANDO AUTH');
    console.log(req.body);
    var socketId = req.body.socket_id;

    //var channel = req.body.channel_name;
    var channel = 'presence-loothoader';

    var presenceData = {
        user_id: 'unique_user_id',
        user_info: {
            name: 'Mr Pusher',
            twitter_id: '@pusher'
        }
    };

    var auth = pusher.authenticate(socketId, channel, presenceData);
    res.send(auth);
});

// setInterval(function(){
//     pusher.trigger('test_channel', 'my_event', {
//         "message": "Welcome to the jungle",
//         "heartstone": "elporfirio#1234"
//     });
// }, 3000);