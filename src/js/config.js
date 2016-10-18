(function() {

  'use strict';

  angular
    .module('myApp.config', [])
    .config(appConfig);

  function appConfig($routeProvider) {
    $routeProvider
    .when('/', {
      templateUrl: 'js/components/main/main.kittens.html',
      controller: 'mainController',
      controllerAs: 'mainCtrl'
    })
    .when('/new', {
      templateUrl: 'js/components/main/new.kitten.html',
      controller: 'newKittenController',
      controllerAs: 'kittenCtrl'
    })
    .otherwise('/');
  }

})();
