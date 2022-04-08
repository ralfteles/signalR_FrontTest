;(function(ng) {
  'use strict';

  angular.module('myApp.empresas', ['ngRoute', 'myApp.services'])
  .config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/empresas', {
      templateUrl: 'views/empresas.html',
      controller: 'EmpresasController',
      controllerAs: 'empresasController'
    });
  }]) 
  .controller('EmpresasController', [
    'empresaService',
      function EmpresasControllerFn(empresaService) {
        let self = this;
        
        self.empresas = [];

        self.obterTodos = function() {

          empresaService.obterTodos().then( data => {
            self.empresas = data;
          })
        }

        self.obterTodos();

        return self;
      }
    ]);
}(window.angular));