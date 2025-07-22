var monSanbox = angular.module('monSanbox', ['ngMessages', 'ngResource']);

monSanbox.controller('mainController', ['$scope', '$log', '$filter', '$timeout', function($scope, $log, $filter, $timeout) {
  
  console.log($scope);
  $scope.name = "CHVAL";
  $scope.nomApplication = $filter('uppercase')($scope.name);
  $log.info($scope.uppercaseName);
  $scope.message = "Hello, World!";      

  console.log($log);
  $log.info("This is an info message");
  $log.warn("This is a warning message");
    
  let things = [1, '2', 3, 'four', 5];
  $log.debug(things);

      
  $timeout(function() {
        $scope.nomApplication = 'CHV';
    }, 3000);

}]);