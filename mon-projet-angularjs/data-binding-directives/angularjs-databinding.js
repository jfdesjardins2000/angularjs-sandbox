angular.module('twoWayBinding', ['ngMessages'])
        .controller('twoWayBindingController', ['$scope', function($scope) {
            // Configuration initiale
            $scope.nomApplication = "MonSuperSite";
            $scope.realTimeText = "";
            $scope.counter = 0;
            $scope.backgroundColor = "#3498db";
            $scope.sliderValue = 50;
            $scope.items = [];
            $scope.newItem = "";
            
            // Objet utilisateur pour le two-way binding
            $scope.user = {
                username: '',
                email: '',
                age: '',
                city: '',
                bio: '',
                newsletter: false
            };

            // Fonction pour réinitialiser le formulaire
            $scope.resetForm = function() {
                $scope.user = {
                    username: '',
                    email: '',
                    age: '',
                    city: '',
                    bio: '',
                    newsletter: false
                };
                // Réinitialiser l'état de validation du formulaire
                if ($scope.myForm) {
                    $scope.myForm.$setPristine();
                    $scope.myForm.$setUntouched();
                }
            };

            // Fonction pour remplir avec des données d'exemple
            $scope.fillSampleData = function() {
                $scope.user = {
                    username: 'johndoe123',
                    email: 'john.doe@example.com',
                    age: 28,
                    city: 'Paris',
                    bio: 'Développeur passionné par JavaScript et AngularJS !',
                    newsletter: true
                };
            };

            // Fonctions pour la liste dynamique
            $scope.addItem = function() {
                if ($scope.newItem.trim()) {
                    $scope.items.push($scope.newItem.trim());
                    $scope.newItem = "";
                }
            };

            $scope.removeItem = function(index) {
                $scope.items.splice(index, 1);
            };

            $scope.clearItems = function() {
                $scope.items = [];
            };

            // Watcher pour observer les changements
            $scope.$watch('user', function(newValue, oldValue) {
                console.log('Données utilisateur mises à jour:', newValue);
            }, true);
        }]);