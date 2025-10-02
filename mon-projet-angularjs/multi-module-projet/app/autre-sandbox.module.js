// angular.module('autreSandbox', [])
//   // Contrôleur principal du sandbox
//   .controller('SandboxController', function($scope) {
//     $scope.message = "Bienvenue dans l'autre sandbox 🎉";
//   })
//   // Contrôleur supplémentaire
//   .controller('SandboxExtraController', function($scope) {
//     $scope.info = "Voici des informations supplémentaires du sandbox.";
//   });

angular.module('autreSandbox', [])
  .controller('SandboxController', ['$scope', 'SandboxService', function($scope, SandboxService) {
    $scope.messages = SandboxService.getMessages();
  }])
  .controller('SandboxExtraController', ['$scope', 'SandboxService', function($scope, SandboxService) {
    $scope.newMessage = '';
    $scope.addMessage = function() {
      SandboxService.addMessage($scope.newMessage);
      $scope.newMessage = '';
      $scope.messages = SandboxService.getMessages();
    };
  }]);
