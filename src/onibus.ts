import Veiculo from "./veiculo";

export default class Onibus extends Veiculo {
  private assentos: number;

  constructor(placa: string, ano: number, assentos: number) {
    super(placa, ano);
    this.assentos = assentos;
  }

  setAssentos(assentos: number) {
    this.assentos = assentos;
  }

  getAssentos(): number {
    return this.assentos;
  }

  exibirDados() {
    console.log(
      `Placa: ${this.getPlaca()}, Ano: ${this.getAno()}, Assentos: ${this.assentos}`
    );
  }
}
