(function(){
    'use strict';
    angular.module('scrum.demo', ['ngRoute'])
        .controller('ScrumController',
            ['$scope', '$http', 'Login',ScrumController]);
        function ScrumController($scope, $http, Login) {
            $scope.add = function (list, title) {
                    var card = {
                        list: list.id,
                        title: title
                    };
                    $http.post('/scrum/cards/', card)
                        .then(function(response){
                           list.cards.push(response.data);
                        },
                        function(){
                            alert('Could not create a card')
                        }
                    );
            };
            Login.redirectIfNotLoggedIn();
            $scope.data = [];
            $scope.logout = Login.logout
            $http.sortBy='story_points';
            $http.reverse=true;
            $http.showFilters=false

            $http.get('/scrum/lists/').then(function(response){
                $scope.data = response.data;
            });


    }
}());