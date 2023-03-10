"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var veiculo_1 = require("./veiculo");
var Caminhão = /** @class */ (function (_super) {
    __extends(Caminhão, _super);
    function Caminhão(placa, ano, eixos) {
        var _this = _super.call(this, placa, ano) || this;
        _this.eixos = eixos;
        return _this;
    }
    Caminhão.prototype.setEixos = function (eixos) {
        this.eixos = eixos;
    };
    Caminhão.prototype.getEixos = function () {
        return this.eixos;
    };
    Caminhão.prototype.exibirDados = function () {
        console.log("Placa: ".concat(this.getPlaca(), ", Ano: ").concat(this.getAno(), ", Eixos: ").concat(this.eixos));
    };
    return Caminhão;
}(veiculo_1["default"]));
exports["default"] = Caminhão;
