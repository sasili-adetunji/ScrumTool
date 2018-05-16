( function() {
    'use strict';
    angular.module('scrum.demo')
        .config(['$routeProvider', config])
        .run(['$http', run])

    function config ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: '/static/html/scrum.html',
                controller: 'ScrumController',
            })
            .when('/login', {
                templateUrl: '/static/html/login.html',
                controller: 'LoginController',
            })
            .otherwise('/');
    }

    function run ($http) {
        $http.defaults.xsrfHeaderName = 'X-CSRFToken';
        $http.defaults.xsrfCookieName = 'csrftoken';

    }
})();