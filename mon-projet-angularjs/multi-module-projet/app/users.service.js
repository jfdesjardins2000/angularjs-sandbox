angular.module('users')
  .service('UserService', function() {
    var users = ['Alice', 'Bob', 'Charlie'];

    this.getUsers = function() {
      return users;
    };

    this.addUser = function(name) {
      if(name) users.push(name);
    };
  });
