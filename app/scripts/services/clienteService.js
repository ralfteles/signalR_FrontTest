;(function(angular) {
    'use strict';

    angular.module('myApp.services').factory('clienteService',
     ['$http','$q', function($http) {
                var self = this;
                var urlBase = 'http://localhost:5000/api/cliente';

                self.obterTodos = function() {
                    return $http.get(`${urlBase}/obterclientes`).then(function(result){
                        var clientes = [];
                        result.data.forEach(e => {
                             clientes.push(e);
                         });
                         return clientes;
                    })
                };

                self.addCliente = function (cliente) {
                    return $http.post(`${urlBase}/cadastrarCliente`, cliente);
                };

                self.updateCliente = function (cliente) {
                    return $http.put(`${urlBase}/atualizarCliente`, cliente);
                };

                self.removeCliente = function (id) {
                    return $http.delete(`${urlBase}/removerCliente?id=${id}`);
                };

                return self;
            }           
        ]);
}(window.angular));
