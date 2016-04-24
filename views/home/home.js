'use strict';

angular.module('app.home', ['ngRoute'])

.controller('HomeCtrl', ['$scope', '$http', '$rootScope', 'appConfig',
    function ($scope, $http, $rootScope, appConfig) {
        $scope.sliderImages = [
            '/images/slider-images/1.jpg',
            '/images/slider-images/2.jpg',
            '/images/slider-images/3.jpg',
            '/images/slider-images/4.jpg',
            '/images/slider-images/5.jpg',
            '/images/slider-images/6.jpg',
            '/images/slider-images/7.jpg'
        ];
    }]);