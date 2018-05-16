(function(){
    'use strict';
    angular.module('scrum.demo', ['ngRoute'])
        .controller('ScrumController',
            ['$scope', '$http', ScrumController]);
        function ScrumController($scope, $http) {
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

            $scope.data = [];
            $http.get('/scrum/lists/').then(function(response){
                $scope.data = response.data;
            });
    }
}());