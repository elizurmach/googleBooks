'use strict';

angular.module('myBooks.login', ['ngRoute'])

  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/login', {
      templateUrl: 'login/login.html',
      controller: 'loginCtrl'
    });
  }])

  .controller('loginCtrl', ['$scope', function ($scope) {
    $scope.username = '';
    $scope.password = '';
    $scope.login = function () {
      let params = {
        'clientid': '38598294373-muera0mod5nt5ndes4ika1o7b5fs9783.apps.googleusercontent.com',
        'cookiepolicy': 'single_host_origin',
        'callback': function (result) {

        },
        'approvalprompt': 'force',
        'scope': 'https://www.googleapis.com/auth/plus.login https://www.googleapis.com/auth/plus.profile.emails.read'
      }
      gapi.auth.signIn(params);
    }
  }]);
