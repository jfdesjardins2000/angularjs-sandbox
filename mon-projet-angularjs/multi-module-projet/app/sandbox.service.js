angular.module('autreSandbox')
  .service('SandboxService', function() {
    var messages = ["Bienvenue dans l'autre sandbox 🎉"];

    this.getMessages = function() {
      return messages;
    };

    this.addMessage = function(msg) {
      if(msg) messages.push(msg);
    };
  });
