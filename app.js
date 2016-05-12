'use strict';

angular.module('app', [
    'ngRoute',
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngAnimate',
    'ngTouch',
    'ui.router',
    'ui.bootstrap.tpls',
    'ui.bootstrap.carousel',
    'ui.bootstrap.tooltip',
    'ui.bootstrap.popover',
    'ui.bootstrap.datepicker',
    'ui.bootstrap.modal',
    'ui.bootstrap.buttons',
    'ui.bootstrap.dropdown',  
    'angulartics',
    'angulartics.google.analytics',
    'app.route',
    'app.services',
    'app.directives',
    'app.home',
    'app.case',
    'app.productDetails',
    'app.reviews',
    'app.news',
    'app.contacts'
]).config([
    '$stateProvider', '$urlRouterProvider', '$httpProvider',
    function ($stateProvider, $urlRouterProvider, $httpProvider) {
        //$httpProvider.defaults.withCredentials = true;
        //$httpProvider.defaults.useXDomain = true;
        //delete $httpProvider.defaults.headers.common["X-Requested-With"];
        //$httpProvider.defaults.headers.common['Content-Type'] = 'text/plain; charset=utf-8';
        //$httpProvider.defaults.headers.common["Access-Control-Allow-Origin", "*"];
        //$httpProvider.defaults.headers.common.Accept = 'text/plain';
        //$httpProvider.defaults.useXDomain = true;
        //delete $httpProvider.defaults.headers.common['X-Requested-With'];

        $urlRouterProvider.otherwise("/home");

        /*$locationProvider.html5Mode({
            enabled: true,
            requireBase: false
        });*/        
    }
]).value("appConfig", {
    clientUrl: ''
}).run(['$rootScope', '$http', '$state', 'appConfig', '$location', '$sce', '$timeout', '$routeParams', '$window', '$filter',
    function ($rootScope, $http, $state, appConfig, $location, $sce, $timeout, $routeParams, $window, $filter) {
        //$http.defaults.useXDomain = true;
        //delete $http.defaults.headers.common['X-Requested-With'];
        //var xhr = new XMLHttpRequest();
        //xhr.setRequestHeader("Origin", null);

        $rootScope.productMainFilter = '';
        $rootScope.productFilter = '';
        $rootScope.encodeURIComponent = encodeURIComponent;

        $rootScope.locationBack = function () {
            window.history.back();
        }

        $rootScope.isState = function(state) {
            return $state.is(state);
        }

        $rootScope.goState = function (state) {
            $state.go(state);
        }

        $rootScope.filterByProduct = function (productName, mainFilter) {
            if (mainFilter) {
                $rootScope.productMainFilter = productName;
                $rootScope.productFilter = ''; //reset productFilter
            } else {
                $rootScope.productFilter = productName;
            }
            
        }

        //$rootScope.setActive = function (localPath) {
        //    return $location.path() === localPath;
        //}

        $rootScope.$on('$routeChangeStart', function (e, current, pre) {
            
        });

        $rootScope.$on('$routeChangeSuccess', function (e, current, pre) {

        });

    }])
    .filter('replace', function () {
        return function (value, find, replace) {
            if (!value) return '';
            return value.replace(new RegExp(find, 'g'), replace);
        }
    })	
    .filter('limitText', function () {
        return function (value, limit) {
            if (!value) return '';
            if (!limit) return value;
            if (value.length <= limit) {
                return value;
            } else {
                value = value.substr(0, limit) + '...';
            }
            return value;
        }
    })
;