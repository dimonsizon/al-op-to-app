'use strict';

angular.module('app.route', ['ngRoute'])

.config(['$stateProvider', function ($stateProvider) {
    $stateProvider
        .state('home', {
            url: "/home",
            templateUrl: '/views/home/home.html',
            controller: 'HomeCtrl'
        })
        .state('cases', {
            url: "/cases",
            templateUrl: "/views/products/cases/case.html",
            controller: 'CaseCtrl'
        })
        .state('details', {
            url: "/:productType/:gasId",
            templateUrl: "/views/products/product-details.html",
            controller: 'ProductDetailsCtrl'
        })
        .state('reviews', {
            url: "/reviews",
            templateUrl: "/views/reviews/reviews.html",
            controller: 'ReviewsCtrl'
        })
    ;
}]);