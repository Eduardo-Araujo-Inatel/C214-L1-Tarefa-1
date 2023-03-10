export default class Veiculo {
  private placa: string;
  private ano: number;

  constructor(placa?: string, ano?: number) {
    this.placa = placa || "AAA-1234";
    this.ano = ano || 2000;
  }

  setPlaca(placa: string) {
    this.placa = placa;
  }

  setAno(ano: number) {
    this.ano = ano;
  }

  getPlaca(): string {
    return this.placa;
  }

  getAno(): number {
    return this.ano;
  }

  exibirDados() {
    console.log(`Placa: ${this.placa}, Ano: ${this.ano}`);
  }
}
