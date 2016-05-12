'use strict';

angular.module('app.home', ['ngRoute'])

.controller('HomeCtrl', ['$scope', '$http', '$rootScope', 'appConfig', 'NewsServices', 'ReviewsServices', '$filter',
    function ($scope, $http, $rootScope, appConfig, NewsServices, ReviewsServices, $filter) {
        $scope.currentDate = $filter('date')(new Date(), 'dd.MM.yy');
        $scope.sliderImages = [
            '/images/slider-images/1.jpg',
            '/images/slider-images/2.jpg',
            '/images/slider-images/3.jpg',
            '/images/slider-images/4.jpg',
            '/images/slider-images/5.jpg',
            '/images/slider-images/6.jpg',
            '/images/slider-images/7.jpg'
        ];

        //NewsServices.get(function (data) {
        //    $scope.news = data.items.reverse();
        //}).error(function (error) {
        //    $scope.error = error;
        //});

        NewsServices.query(function (data) {
            $scope.news = data.items.reverse();
        }, function (error) {
            $scope.error = error;
        });

        //$http.get('https://script.google.com/macros/s/AKfycbwB7-oR5Ea04z8X1dPwSYJCMQFf8EaVV60CMuP59hS6J9HWczY/exec').
        //    success(function (data) {
        //        $scope.news = data.items.reverse();
        //    }).error(function (error) {
        //        $scope.error = error;
        //    });

        ReviewsServices.get(function (data) {
            $scope.reviews = data.items;
        });
    }]);