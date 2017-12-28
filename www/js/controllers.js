angular.module('starter.controllers', ['ngCordova'])
.controller('AppCtrl', function($scope, $rootScope, $state, $http, $ionicModal, $ionicPopup, $ionicPopover, $timeout,  $location, $kanmitfactory) {
        // Form data for the login modal
        "use strict";
        var navIcons = document.getElementsByClassName('ion-navicon');
        for (var i = 0; i < navIcons.length; i++) {
            navIcons[i].addEventListener('click', function() {
                this.classList.toggle('active');
            });
        }

    })
.controller('ResizeImageCtrl', function($scope, $state, $rootScope,  $window, $http,  $stateParams, $timeout,  $kanmitfactory) {
   "use strict";
    $scope.sendData={img: ""};
    $scope.fileReaderSupported = window.FileReader !== null;
    $scope.photoChanged = function(files){
        if (files !== null) {
            var file = files[0];
            if ($scope.fileReaderSupported && file.type.indexOf('image') > -1) {
                $timeout(function() {
                    $kanmitfactory.resizeImage({
                        file: file,
                        maxSize: 500
                    }).then(function (resizedImage) {
                        var fileReader = new FileReader();
                        fileReader.readAsDataURL(resizedImage);
                        fileReader.onload = function(e) {
                            $timeout(function(){
                                $scope.sendData.img = e.target.result;
                                console.log($scope.sendData.img);
                            });
                        };
                    }).catch(function (err) {
                        console.error(err);
                    });

                });
            }
        }
    };

})