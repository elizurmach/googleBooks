'use strict';

angular.module('myBooks.book-list', ['ngRoute'])
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider
            .when('/book-list', {
                templateUrl: 'book-list/book-list.html',
                controller: 'bookListCtrl'
            })
        }])
    .controller('bookListCtrl', ['$scope', '$http', '$cacheFactory', function ($scope, $http, $cacheFactory) {
        $scope.querry = 'harry potter';
        
        $scope.indexes = [];
        $scope.maxResults = 10;
        $scope.favorites = [];

        $scope.isFavorite = function (id) {
            let isFavorite = $scope.favorites.indexOf(id);
            return isFavorite > -1;
        }
        $scope.tougleFavorite = function (id) {
            let isFavorite = $scope.favorites.indexOf(id);
            if (isFavorite < 0) {
                $scope.favorites.push(id)
            }
            else $scope.favorites.splice(isFavorite,1);
        }
        
        $scope.search = function (pageNumber) {
            if (!$scope.querry)
                return;
            $scope.currentPage = pageNumber;
            $scope.startIndex = ($scope.currentPage - 1) * $scope.maxResults;
            $scope.data = {};
            $scope.totalItems = 0;
            $scope.lastPage = 1
            let url = 'https://www.googleapis.com/books/v1/volumes';

            $http.get(url, {
                params: {
                    q: $scope.querry.replace(" ", "+"),
                    stratIndex: $scope.startIndex,
                    maxResults: $scope.maxResults,
                    fields: 'totalItems,items',
                    timestamp: new Date().getTime()
                }
            }).then(function (response) {
                $scope.data = response.data;
                $scope.totalItems = response.data.totalItems;
                $scope.lastPage = Math.ceil($scope.totalItems / $scope.maxResults);
                setupPaginationIndexes();
            });
        };
        $scope.search(1);
        function setupPaginationIndexes() {
            $scope.indexes = [];
            let start = Math.max(1, $scope.currentPage - 2);
            let end = Math.min($scope.currentPage + 2, $scope.lastPage);
            for (var i = start; i <= end; i++) {
                $scope.indexes.push(i);
            }
        }
    }]);


