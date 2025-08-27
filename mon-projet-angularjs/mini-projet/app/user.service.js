angular.module('monSanbox')
  .service('UserService', function() {
    var users = [
      { id: 1, name: 'Alice', role: 'Admin' },
      { id: 2, name: 'Bob', role: 'User' },
      { id: 3, name: 'Charlie', role: 'Guest' }
    ];

    // this.getUsers = function() {
    //   return users;
    // };

    this.getUsers = () => users;
    

    this.addUser = function(user) {
      users.push(user);
    };
  });
