import Veiculo from "./veiculo";

export default class Caminhão extends Veiculo {
  private eixos: number;

  constructor(placa: string, ano: number, eixos: number) {
    super(placa, ano);
    this.eixos = eixos;
  }

  setEixos(eixos: number) {
    this.eixos = eixos;
  }

  getEixos(): number {
    return this.eixos;
  }

  exibirDados() {
    console.log(
      `Placa: ${this.getPlaca()}, Ano: ${this.getAno()}, Eixos: ${this.eixos}`
    );
  }
}
