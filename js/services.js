var appServices = angular.module('app.services', ['ngResource']);

appServices.factory('CaseService', ['$resource',
    function ($resource) {
        return $resource('https://script.google.com/macros/s/AKfycbyC_30YN1rfZtrrve0WiquuIHbNBL_EGWsRca09wlkpFbSzQII/exec', {}, {
            query: { method: 'GET', isArray: false }
        });
    }
]);

appServices.factory('DetailsServices', ['$resource',
    function ($resource) {
        return $resource('https://script.google.com/macros/s/:gasId/exec', {}, {
            query: { method: 'GET', params: { serviceId: 'services' }, isArray: true }
        });
    }
]);

//отзывы
appServices.factory('ReviewsServices', ['$resource',
    function ($resource) {
        return $resource('https://script.google.com/macros/s/AKfycbwQZFrR8d8p6wE6zSa3Il7rSAimWlb8TvUvtet0T1fk_xWq1CIU/exec', {}, {
            query: { method: 'GET', isArray: false }
        });
    }
]);

//news
appServices.factory('NewsServices', ['$resource',
    function ($resource) {
        return $resource('https://script.google.com/macros/s/AKfycbwB7-oR5Ea04z8X1dPwSYJCMQFf8EaVV60CMuP59hS6J9HWczY/exec', {}, {
            query: { method: 'GET', isArray: false }
        });
    }
]);

/*appServices.factory('UtensilsService', ['$resource',
    function ($resource) {
        return $resource('https://script.google.com/macros/s/AKfycbw2-WoE7UtKsx1GAfOVy5yL7tvnXj1SxcxuMy_bYjSwD5BZ6XYy/exec', {}, {
            query: { method: 'GET', isArray: false }
        });
    }
]);

appServices.factory('СlothingService', ['$resource',
    function ($resource) {
        return $resource('https://script.google.com/macros/s/AKfycbywn2-MlI2LtDftp5C-dzEQgF_LZjs6UjnmneTWDeG3gcCkHO8/exec', {}, {
            query: { method: 'GET', isArray: false }
        });
    }
]);

appServices.factory('PuzzleService', ['$resource',
    function ($resource) {
        return $resource('https://script.google.com/macros/s/AKfycbwPZkxz0-OgSpIGgpsCYeinLhsxkxyRwje76eGVGd0fhY_m4SZC/exec', {}, {
            query: { method: 'GET', isArray: false }
        });
    }
]);*/

/*appServices.factory('DetailsServices', ['$resource',
    function ($resource) {
        return $resource('https://script.google.com/macros/s/:gasId/exec', {}, {
            query: { method: 'GET', params: { serviceId: 'services' }, isArray: true }
        });
    }
]);*/