'use strict';

angular.module('myBooks.book-info', ['ngRoute'])
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider
            .when('/book-info', {
                templateUrl: 'book-info/book-info.html',
                controller: 'bookInfoCtrl'
            })
    }])
    .controller('bookInfoCtrl', ['$scope', '$http', '$routeParams', function ($scope, $http, $routeParams) {
        $scope.id = $routeParams['id'];
        if ($scope.id) {
            let url = 'https://www.googleapis.com/books/v1/volumes/' + $scope.id
            $http.get(url)
                .then(function (response) {
                    $scope.item = response.data;
                    $('.description').prop('innerHTML', $scope.item.volumeInfo.description);
                })
        }
    }]);