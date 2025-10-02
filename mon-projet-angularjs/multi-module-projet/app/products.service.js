angular.module('products')
  .service('ProductService', function() {
    var products = ['Livre', 'Stylo', 'Cahier'];

    this.getProducts = function() {
      return products;
    };

    this.addProduct = function(name) {
      if(name) products.push(name);
    };
  });
