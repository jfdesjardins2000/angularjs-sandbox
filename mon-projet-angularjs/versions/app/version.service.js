(function() {
  'use strict';

  angular
    .module('versionModule')
    .factory('VersionService', VersionService);

  VersionService.$inject = ['$http', '$q'];

  function VersionService($http, $q) {
    var versionData = null;
    var dataLoaded = false;

    var service = {
      loadData: loadData,
      getVersion: getVersion,
      getLivraison: getLivraison,
      getNotes: getNotes,
      getEtiquetteBilletAFaire: getEtiquetteBilletAFaire
    };

    return service;

    /**
     * Charge les données depuis le fichier JSON
     * @returns {Promise}
     */
    function loadData() {
      if (dataLoaded) {
        return $q.resolve(versionData);
      }

      return $http.get('version-data.json')
        .then(function(response) {
          versionData = response.data;
          dataLoaded = true;
          return versionData;
        })
        .catch(function(error) {
          console.error('Erreur lors du chargement des données de version:', error);
          return $q.reject(error);
        });
    }

    /**
     * Retourne le numéro de version
     * @returns {string}
     */
    function getVersion() {
      return versionData ? versionData.version : '';
    }

    /**
     * Retourne le texte de livraison
     * @returns {string}
     */
    function getLivraison() {
      return versionData ? versionData.livraison : '';
    }

    /**
     * Retourne la liste des notes de version
     * @returns {Array}
     */
    function getNotes() {
      return versionData ? versionData.notes : [];
    }

    /**
     * Retourne l'étiquette pour les billets à faire
     * @returns {string}
     */
    function getEtiquetteBilletAFaire() {
      return versionData ? versionData.etiquetteBilletAFaire : 'Billets à faire';
    }
  }
})();