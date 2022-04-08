'use strict';

angular.module('myApp', [
  'ngRoute',
  'myApp.home',
  'myApp.clientes',
  'myApp.empresas'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/home'});
}]);
angular.module('myApp.models', []);
angular.module('myApp.parsers', ['myApp.models']);
angular.module('myApp.services', ['myApp.parsers']);