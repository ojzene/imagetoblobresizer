var app = angular.module('starter', ['ionic', 'ionic-material',  'starter.controllers', 'starter.service', 'ngCordova']);
app.run(function($ionicPlatform, $ionicPopup, $ionicHistory, $http) {
    "use strict";
    $ionicPlatform.ready(function() {
        if(window.Connection) {
            if(navigator.connection.type === window.Connection.NONE) {
                $ionicPopup.confirm({
                    title: "Internet Disconnected on your device",
                    content: "App requires Network Connection...",
                    buttons: [{text: 'Ok', type: 'button-assertive'}]
                })
                .then(function(result) {
                    if(!result) {
                        ionic.Platform.exitApp();
                    }
                });
            }
        }
        if(window.cordova && window.cordova.plugins.Keyboard) {
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        }
        if(window.StatusBar) {
            StatusBar.styleDefault();
        }
    });
});
app.config(function($stateProvider, $urlRouterProvider, $httpProvider) {
    "use strict";
    $stateProvider
        .state('app', {
            url: '/app',
            abstract: true,
            templateUrl: 'templates/menu.html',
            controller: 'AppCtrl'
        })
        .state('app.resize_image', {
            cache: false,
            url: '/resize_image',
            views: {
                'menuContent': {
                    templateUrl: 'templates/resize_image.html',
                    controller: 'ResizeImageCtrl'
                }
            }
        })
    ;
    $urlRouterProvider.otherwise('/app/resize_image');


});