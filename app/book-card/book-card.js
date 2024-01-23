'use strict';

angular.module('myBooks.book-card', [])
    .directive('bookCard', [function () {
        return {
            restrict: 'EA',
            scope: {
                item: '=',
                favorites: '='
            },
            templateUrl: 'book-card/book-card.html',
            controller: function ($scope) {
                $scope.isFavorite = function (id) {
                    let isFavorite = $scope.favorites.indexOf(id);
                    return isFavorite > -1;
                }
                $scope.tougleFavorite = function (id) {
                    let isFavorite = $scope.favorites.indexOf(id);
                    if (isFavorite < 0) {
                        $scope.favorites.push(id)
                    }
                    else $scope.favorites.splice(isFavorite, 1);
                }
            }
        }
    }]);
