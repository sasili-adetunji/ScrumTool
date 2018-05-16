( function() {
    'use strict';
    angular.module('scrum.demo').run(['$http', run])

    function run ($http) {
        $http.defaults.xsrfHeaderName = 'X-CSRFToken';
        $http.defaults.xsrfCookieName = 'csrftoken';

    }
})();