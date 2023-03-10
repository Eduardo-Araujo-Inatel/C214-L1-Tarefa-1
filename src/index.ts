import Caminhão from "./caminhao";
import Onibus from "./onibus";

console.log("Criação da instancia de Onibus");
const onibus = new Onibus("ABC1234", 2020, 50);
onibus.exibirDados();
let numAssentosOriginal = onibus.getAssentos();
onibus.setAssentos(45);
let numAssentosAlterado = onibus.getAssentos();
console.log(
  `Houve uma alteração de ${numAssentosOriginal} para ${numAssentosAlterado} na quantidade de assentos instalados no onibus`
);
console.log("Configuração final do onibus:");
onibus.exibirDados();

console.log("-------------");

console.log("Criação da instancia de Caminhão");
const caminhao = new Caminhão("ABC1234", 2022, 2);
caminhao.exibirDados();
let novaPlaca = "DEF1234";
console.log(
  `A placa ${caminhao.getPlaca()} ja esta em uso e sera alterada para ${novaPlaca}`
);
caminhao.setPlaca(novaPlaca);
console.log("Configuração final do caminhão:");
caminhao.exibirDados();
