(function(){
    'use strict';
    angular.module('scrum.demo', [])
        .controller('ScrumController', ['$scope', '$http', ScrumController]);
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
            $scope.login = function () {
                $http.post('/auth_api/login/', {
                    username: 'sasil', password: 'AjibolA2016?'})
            };
            $scope.data = [];
            $http.get('/scrum/lists/').then(function(response){
                $scope.data = response.data;
            });
    }
}());