(function() {

  'use strict';

  angular
    .module('myApp.components.main', [])
    .controller('mainController', mainController)
    .controller('newKittenController', newKittenController);

  mainController.$inject = ['$scope', '$rootScope'];
  newKittenController.$inject = ['$scope', '$rootScope', '$location'];

  function mainController($scope, $rootScope) {
    if (!$rootScope.kittenArray) {
      $rootScope.kittenArray = []
    }
  }

  function newKittenController($scope, $rootScope, $location) {
    this.addKitten = function(newKitten) {
      if (!$rootScope.kittenArray) {
        $rootScope.kittenArray = []
      }
      $rootScope.kittenArray.push({
        name: newKitten.name,
        description: newKitten.description,
        image: newKitten.image
      });
      $scope.newKitten = kittenInit();
      $location.url('/');
    };
  }

  //helper functions
  //reset forms
  function kittenInit() {
    return {
      name: '',
      description: '',
      image: ''
    };
  }

})();
