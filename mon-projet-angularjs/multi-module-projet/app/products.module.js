// angular.module('products', [])
//   // Contrôleur pour afficher la liste des produits
//   .controller('ProductListController', function($scope) {
//     $scope.products = ['Livre', 'Stylo', 'Cahier'];
//   })
//   // Contrôleur pour ajouter un produit
//   .controller('ProductFormController', function($scope) {
//     $scope.newProduct = '';
//     $scope.addProduct = function() {
//       if ($scope.newProduct) {
//         $scope.products = $scope.products || [];
//         $scope.products.push($scope.newProduct);
//         $scope.newProduct = '';
//       }
//     };
//   });
angular.module('products', [])
  .controller('ProductListController', ['$scope', 'ProductService', function($scope, ProductService) {
    $scope.products = ProductService.getProducts();
  }])
  .controller('ProductFormController', ['$scope', 'ProductService', function($scope, ProductService) {
    $scope.newProduct = '';
    $scope.addProduct = function() {
      ProductService.addProduct($scope.newProduct);
      $scope.newProduct = '';
    };
  }]);
