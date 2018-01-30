angular.module('dbService', [])
  .service('db', function($http){
    this.getData = function(){
      return $http({
        method: "get",
        url: "https://majdule.github.io/ng-bands-app/bands.json"
      })
    }
  })