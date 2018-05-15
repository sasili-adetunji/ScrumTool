(function(){
    'use strict';
    angular.module('scrum.demo')
        .directive('scrumCard', cardDirective);
    function cardDirective(){
        return {
            templateUrl: '/static/scrum/card.html',
            restrict: 'E',
            controller: [ '$scope', '$http', function($scope, $http) {
                var url = '/scrum/cards/' + $scope.card.id + '/';
                $scope.update = function(){
                    $http.put(
                              url,
                              $scope.card
                           );
                        };

                        $scope.modelOptions = {
                            debounce: 500
                        };
                $scope.delete = function(){
                    $http.delete(url).then(function(){
                        var cards = $scope.list.cards;
                        cards.splice(cards.indexOf($scope.card), 1);
                    })
                }
            }]
        };
    }

})();