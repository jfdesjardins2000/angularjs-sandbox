// angular.module('users', [])
//   // Contrôleur pour afficher la liste des utilisateurs
//   .controller('UserListController', function($scope) {
//     $scope.users = ['Alice', 'Bob', 'Charlie'];
//   })
//   // Contrôleur pour ajouter un utilisateur
//   .controller('UserFormController', function($scope) {
//     $scope.newUserName = '';
//     $scope.addUser = function() {
//       if ($scope.newUserName) {
//         $scope.users = $scope.users || [];
//         $scope.users.push($scope.newUserName);
//         $scope.newUserName = '';
//       }
//     };
//   });

angular.module('users', [])
  .controller('UserListController', ['$scope', 'UserService', function($scope, UserService) {
    $scope.users = UserService.getUsers();
  }])
  .controller('UserFormController', ['$scope', 'UserService', function($scope, UserService) {
    $scope.newUserName = '';
    $scope.addUser = function() {
      UserService.addUser($scope.newUserName);
      $scope.newUserName = '';
    };
  }]);
