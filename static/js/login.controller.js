(function(){
    'use strict';

    angular
        .module('scrum.demo')
        .controller('LoginController',
            ['$scope', '$http', '$location', 'Login', LoginController]);

        function LoginController($scope, $http, $location, Login) {
            $scope.login = function(){
                Login.login($scope.user)
                    .then(function(){
                        $location.url('/')
                    },
                    function() {
                        $scope.login_error='Invalid usrname or password'
                 });
        }

        if (Login.isLoggedIn()) {
            $location.url('/')
        }

    }
})()