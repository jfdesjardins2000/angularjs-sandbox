(function() {
  'use strict';

  angular
    .module('versionModule')
    .controller('VersionController', VersionController);

  VersionController.$inject = ['VersionService', 'ConstanteService'];

  function VersionController(VersionService, ConstanteService) {
    var vm = this;

    // Propriétés publiques
    vm.notes = [];
    vm.branche = '';
    vm.billetRealise = 0;
    vm.billetAfaire = 0;
    vm.loading = true;
    vm.error = false;

    // Méthodes publiques
    vm.livraison = livraison;
    vm.nombreBillet = nombreBillet;
    vm.nombreBilletRealise = nombreBilletRealise;
    vm.nombreBilletAfaire = nombreBilletAfaire;

    // Initialisation
    activate();

    /**
     * Initialisation du contrôleur
     */
    function activate() {
      vm.branche = ConstanteService.Branche;
      
      // Chargement des données depuis le fichier JSON
      VersionService.loadData()
        .then(function(data) {
          vm.notes = VersionService.getNotes();
          vm.loading = false;
        })
        .catch(function(error) {
          console.error('Erreur lors du chargement des versions:', error);
          vm.error = true;
          vm.loading = false;
        });
    }

    /**
     * Indique le numéro de la livraison
     * @returns {string}
     */
    function livraison() {
      return VersionService.getLivraison();
    }

    /**
     * Nombre de billets pour la livraison
     * @param {Array} lignes - Contient la liste des jiras
     * @returns {number}
     */
    function nombreBillet(lignes) {
      if (!lignes || lignes.length === 0) return 0;
      return lignes.length - nombreLigneASoustraire(lignes);
    }

    /**
     * Nombre de billets réalisés pour la livraison
     * @param {Array} lignes - Contient la liste des jiras
     * @returns {number}
     */
    function nombreBilletRealise(lignes) {
      if (!lignes || lignes.length === 0) return 0;
      return lignes.length - nombreLigneASoustraire(lignes) - nombreLigneAfaire(lignes);
    }

    /**
     * Nombre de billets à faire pour la livraison
     * @param {Array} lignes - Contient la liste des jiras
     * @returns {number}
     */
    function nombreBilletAfaire(lignes) {
      if (!lignes || lignes.length === 0) return 0;
      return nombreLigneAfaire(lignes);
    }

    /**
     * Détermine le nombre de lignes qui ne sont pas des demandes
     * @param {Array} lignes
     * @returns {number}
     */
    function nombreLigneASoustraire(lignes) {
      var aSoustraire = 0;
      var nbItem = lignes.length - 1;

      for (var i = 0; i < nbItem; i++) {
        if (lignes[i].retrait === false && lignes[i + 1].retrait === true) {
          aSoustraire++;
        }
      }

      if (lignes[nbItem].texte.indexOf(VersionService.getEtiquetteBilletAFaire()) === 0) {
        aSoustraire++;
      }

      return aSoustraire;
    }

    /**
     * Détermine le nombre de demandes qui sont à faire
     * @param {Array} lignes
     * @returns {number}
     */
    function nombreLigneAfaire(lignes) {
      var nbLigne = 0;

      lignes.forEach(function(ligne) {
        if (ligne.texte.indexOf("$A faire$") > -1) {
          nbLigne++;
        }
      });

      return nbLigne;
    }
  }
})();