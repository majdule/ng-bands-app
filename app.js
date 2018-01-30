var app = angular.module('bands', []);

app.controller('mainController', function ($scope, $http) {
  $scope.bands = [];

  $http({
    method : "get",
    url : ""
  });
});