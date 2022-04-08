;(function(ng) {
    'use strict';
  
    angular.module('myApp.clientes', ['ngRoute', 'myApp.services'])
    .config(['$routeProvider', function($routeProvider) { 
    $routeProvider.when('/clientes', {
        templateUrl: 'views/clientes/clientes.html',
        controller: 'ClientesController',
        controllerAs: 'clientesController'
      }).when('/clientesAdd', {
        templateUrl: 'views/clientes/clientesAdd.html',
        controller: 'ClientesController',
        controllerAs: 'clientesController'
      });




    }])
    .controller('ClientesController', ['clienteService',
        function ClientesControllerFn(clienteService) {
          let self = this;
          
          self.clientes = []; 
  
          self.obterClientes = function() {
  
            clienteService.obterTodos().then( data => {
              self.clientes = data;
            })
          }

          self.obterClientes();  

          self.addCliente = function() {
            let cliente = {
                        'nome': self.nome,
                        'telefone': self.telefone,
                        'dataDeNascimento': self.dataDeNascimento,
                        'logradouro': self.logradouro,
                        'cidade': self.cidade,
                        'bairro': self.bairro,
                        'numero': self.numero
                     }

               clienteService.addCliente(cliente).then(data =>{
                let teste = data;
               })
          }

          self.removeCliente = function(cliente) {

               clienteService.removeCliente(cliente.id).then(data =>{
                let teste = data;
                self.obterClientes(); 
               })
          }
  
          return self;
        },
        
      ]);
  }(window.angular));