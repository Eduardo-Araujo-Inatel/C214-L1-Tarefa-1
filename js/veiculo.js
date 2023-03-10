"use strict";
exports.__esModule = true;
var Veiculo = /** @class */ (function () {
    function Veiculo(placa, ano) {
        this.placa = placa || "AAA-1234";
        this.ano = ano || 2000;
    }
    Veiculo.prototype.setPlaca = function (placa) {
        this.placa = placa;
    };
    Veiculo.prototype.setAno = function (ano) {
        this.ano = ano;
    };
    Veiculo.prototype.getPlaca = function () {
        return this.placa;
    };
    Veiculo.prototype.getAno = function () {
        return this.ano;
    };
    Veiculo.prototype.exibirDados = function () {
        console.log("Placa: ".concat(this.placa, ", Ano: ").concat(this.ano));
    };
    return Veiculo;
}());
exports["default"] = Veiculo;
