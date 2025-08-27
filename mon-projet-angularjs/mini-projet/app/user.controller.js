angular.module('monSanbox')
  .controller('userController', ['$scope', 'UserService',
    function($scope, UserService) {

      // Charger les utilisateurs depuis le service
      $scope.users = UserService.getUsers();

      // Ajouter un nouvel utilisateur
      $scope.addUser = function() {
        if ($scope.newUserName) {
          UserService.addUser({
            id: $scope.users.length + 1,
            name: $scope.newUserName,
            role: 'User'
          });
          $scope.newUserName = ""; // reset du champ
        }
      };
    }
  ]);
