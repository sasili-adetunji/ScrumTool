(function(){
    'use strict';
    angular.module('scrum.demo', [])
        .controller('ScrumController', ['$scope', '$http', ScrumController]);
        function ScrumController($scope, $http) {
            $scope.add = function (list, title) {
                    var card = {
                        title: title
                    };
                    list.cards.push(card);
            };
            $scope.data = [];
            $http.get('/scrum/lists').then(function(response){
                $scope.data = response.data;
            });
    }
}());