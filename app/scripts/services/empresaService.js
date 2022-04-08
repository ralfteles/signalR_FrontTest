;(function(angular) {
    'use strict';

    angular.module('myApp.services')
        .factory('empresaService', [
            '$http',
            '$q',
            'empresaParser',
            function($http, $q, empresaParser) {
                var self = this;

                self.obterTodos = function() {
                    return $http.get("http://localhost:5000/empresas").then(function(result){
                        var empresas = [];
                        result.data.forEach(e => {
                             empresas.push(empresaParser.converter(e));
                         });
                         return empresas;
                    })
                };

                return self;
            }
        ]);
}(window.angular));
