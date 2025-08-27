angular.module('monSanbox')
  .controller('mainController', ['$scope', '$log', '$filter', '$timeout',
    function($scope, $log, $filter, $timeout) {

      $scope.name = "chval";
      $scope.nomApplication = $filter('uppercase')($scope.name);

      $log.info("Nom en majuscules : " + $scope.nomApplication);

      // Exemple avec $timeout
      $timeout(function() {
        $scope.name = "nouveau nom après 2s";
        $scope.nomApplication = $filter('uppercase')($scope.name);
      }, 2000);

    }
  ]);
