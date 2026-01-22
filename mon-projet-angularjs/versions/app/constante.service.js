(function() {
  'use strict';

  angular
    .module('versionModule')
    .factory('ConstanteService', ConstanteService);

  ConstanteService.$inject = [];

  function ConstanteService() {
    var service = {
      Branche: 'livraison_05'
    };

    return service;
  }
})();