;(function (angular) {
    'use strict';

    angular.module('myApp.models')
        .factory('ModeloEmpresa', [
                function ModeloEmpresa() {
                    var Modelo = function () {
                        var _modeloEmpresa = this;

                        _modeloEmpresa.identificador = undefined;
                        _modeloEmpresa.razaoSocial = undefined;
                        _modeloEmpresa.cnpj = undefined;

                        return _modeloEmpresa;
                    };

                    return Modelo;
                }
            ]
        );
}(window.angular));