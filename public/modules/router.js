/**
 * Created by elporfirio on 12/11/16.
 */
angular.module('loothoader')
    .config(function($stateProvider) {
        var helloState = {
            name: 'hello',
            url: '/hello',
            template: '<h3>hello world!</h3>'
        };

        var aboutState = {
            name: 'about',
            url: '/about',
            template: '<h3>Its the UI-Router hello world app!</h3>'
        };

        var mainState = {
            name: 'main',
            url: '/main',
            templateUrl: 'modules/Register/register.template.html',
            controller: 'registerController',
            controllerAs: 'regctrl'
        };

        $stateProvider.state(helloState);
        $stateProvider.state(aboutState);
        $stateProvider.state(mainState);
    });