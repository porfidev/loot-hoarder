/**
 * Created by ActinverI on 14/11/16.
 */
angular.module('loothoader')
.controller('registerController', registerControllerFn);

function registerControllerFn() {
    var self = this;

    self.channel = null;

    self.joinPresence = function(){
        var pusher = new Pusher('27f4c767b00d761a5c0c', {
            encrypted: true,
            //authTransport: 'jsonp',
            authEndpoint: '/pusher_auth'
        });

        self.channel = pusher.subscribe('presence-loothoader');

        self.channel.bind('pusher:subscription_succeeded', function(members){

            console.info('Miembros Activos: ', members.count);

            console.warn(members);
        });
    };

    self.joinNew = function () {
        self.joinPresence();
    };
}