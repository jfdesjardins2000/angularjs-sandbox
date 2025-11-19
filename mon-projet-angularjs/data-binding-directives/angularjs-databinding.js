// Déclare et stocke le module dans une variable
var app = angular.module('twoWayBinding', ['ngMessages']);

app.directive('postalCode', function() {
  // Regex pour format canadien (Québec inclus): A1A 1A1
  var regexQc = /^[ABCEGHJ-NPRSTVXY]\d[A-Z] \d[A-Z]\d$/;

  return {
    require: 'ngModel',
    link: function(scope, element, attrs, ngModel) {
      ngModel.$validators.postalCode = function(value) {
        if (!value) return true; // "required" gère le vide
        return regexQc.test(value.toUpperCase());
      };
    }
  };
});

app.controller('twoWayBindingController', ['$scope', '$http' , function($scope, $http) {
  // Configuration initiale
  $scope.nomApplication = "MonSuperSite";
  $scope.realTimeText = "";
  $scope.counter = 0;
  $scope.backgroundColor = "#3498db";
  $scope.sliderValue = 50;
  $scope.items = [];
  $scope.newItem = "";

  // Objet utilisateur
  $scope.user = {
    username: '',
    email: '',
    codePostal: '', // <- on utilise "codePostal" partout
    age: '',
    city: '',
    bio: '',
    newsletter: false
  };

  // Réinitialiser le formulaire
  $scope.resetForm = function() {
    $scope.user = {
      username: '',
      email: '',
      codePostal: '',
      age: '',
      city: '',
      bio: '',
      newsletter: false
    };
    if ($scope.myForm) {
      $scope.myForm.$setPristine();
      $scope.myForm.$setUntouched();
    }
  };

  // Données d'exemple
  $scope.fillSampleData = function() {
    $scope.user = {
      username: 'johndoe123',
      email: 'john.doe@example.com',
      codePostal: 'G1G 1H3',
      age: 28,
      city: 'Québec',
      bio: 'Développeur passionné par JavaScript et AngularJS !',
      newsletter: true
    };
  };

  // Liste dynamique
  $scope.addItem = function() {
    if ($scope.newItem && $scope.newItem.trim()) {
      $scope.items.push($scope.newItem.trim());
      $scope.newItem = "";
    }
  };
  $scope.removeItem = function(index) { $scope.items.splice(index, 1); };
  $scope.clearItems = function() { $scope.items = []; };


  // Soumission avec appel API JSONPlaceholder
  $scope.submitForm = function(form) {
    if (form.$valid) {
      $http.post('https://jsonplaceholder.typicode.com/posts', $scope.user)
        .then(function(response) {
          // Succès : JSONPlaceholder renvoie un objet avec un id
          alert("✅ Formulaire envoyé avec succès !\nRéponse serveur:\n" + JSON.stringify(response.data, null, 2));
        })
        .catch(function(error) {
          alert("❌ Erreur lors de l'appel API:\n" + error.statusText);
        });
    } else {
      alert("Le formulaire contient des erreurs.");
    }
  };

  // Watchers
  $scope.$watch('user', function(newValue) {
    console.log('Données utilisateur mises à jour:', newValue);
  }, true);

  // Nettoyage automatique des messages quand le champ est vidé
  $scope.$watch('user.codePostal', function(newVal) {
    if (!newVal && $scope.myForm && $scope.myForm.codePostal) {
      $scope.myForm.codePostal.$setPristine();
      $scope.myForm.codePostal.$setUntouched();
    }
  });
}]);
