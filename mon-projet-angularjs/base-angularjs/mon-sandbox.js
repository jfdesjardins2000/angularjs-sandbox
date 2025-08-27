// var app = angular.module('monSanbox', ['ngMessages', 'ngResource']);

// app.controller('mainController', ['$scope', '$log', '$filter', '$timeout', function($scope, $log, $filter, $timeout) {
  
//   console.log($scope);
//   $scope.name = "chval";
//   $scope.nomApplication = $filter('uppercase')($scope.name);
//   $log.info($scope.uppercaseName);
//   $scope.message = "Hello, World!";      

//   console.log($log);
//   $log.info("This is an info message");
//   $log.warn("This is a warning message");
    
//   let things = [1, '2', 3, 'four', 5];
//   $log.debug(things);

      
//   $timeout(function() {
//         $scope.nomApplication = 'CHV';
//     }, 3000);

// }]);

angular.module('monSanbox', [
          'ngMessages', 
          'ngResource'
        ])
        .controller('mainController', ['$scope', '$log', '$filter', '$timeout', function($scope, $log, $filter, $timeout) {
  
          console.log($scope);
          $scope.name = "cheval";
          $log.info($scope.name);
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