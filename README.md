# angularjs-sandbox
Un sandbox pour jouer avec AngularJS (l'ancienne version d'angular)
# Projet AngularJS avec Node.js v10.13.0

Ce guide décrit toutes les étapes nécessaires pour créer et exécuter un projet AngularJS localement avec Node.js **v10.13.0**, en utilisant une version compatible de `http-server`.

---

## 📦 Prérequis

- Node.js **v10.13.0** installé sur votre machine
- npm (inclus avec Node.js)

---

## 🛠️ Étapes de mise en place

### 1. Créer un dossier de projet
```bash
mkdir mon-projet-angularjs
cd mon-projet-angularjs
```
### 2. Initialiser un projet Node.js
```bash
npm init -y
```
### 3. Installer AngularJS localement
```bash
npm install angular
```
### 4. Installer une version compatible de http-server
```bash
npm install http-server@0.12.3 --save-dev
```
### 5. Créer les fichiers de base
**index.html**
```html
<!DOCTYPE html>
<html ng-app="monApp">
<head>
  <meta charset="UTF-8">
  <title>Mon Projet AngularJS</title>
  <script src="node_modules/angular/angular.min.js"></script>
  <script src="app.js"></script>
</head>
<body ng-controller="MonControleur">
  <h1>{{ message }}</h1>
</body>
</html>
```
**app.js**
```javascript
angular.module('monApp', [])
  .controller('MonControleur', function($scope) {
    $scope.message = "Bonjour depuis AngularJS !";
  });
```
### 6. Ajouter un script de démarrage dans package.json
Dans la section "scripts" :
```bash
"scripts": {
  "start": "http-server ."
}
```
### 7. Démarrer le serveur local
```bash
npm run start
```
Ouvrir le navigateur à l'adresse:
http://localhost:8080

