;(function(angular) {
    'use strict';

    angular.module('myApp.parsers')
        .factory('empresaParser', [
                'ModeloEmpresa',
                function EmpresaParser(ModeloEmpresa) {
                    var self = this;

                    self.converter = function (empresaContrato) {
                        var modeloEmpresa = new ModeloEmpresa();

                        modeloEmpresa.identificador = empresaContrato.identificador;
                        modeloEmpresa.razaoSocial = empresaContrato.razaoSocial;
                        modeloEmpresa.cnpj = empresaContrato.cnpj;

                        return modeloEmpresa;
                    };

                    return self;
                }
            ]
        );
}(window.angular));