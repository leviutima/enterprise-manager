export class Address {
  private cep: string;
  private street: string;
  private city: string;
  private state: string;
  private number?: number;
  private complement?: string;
  private neighborhood?: string;

  constructor(
    cep: string,
    street: string,
    city: string,
    state: string,
    number?: number,
    complement?: string,
    neighborhood?: string,
  ) {
    this.cep = cep;
    this.street = street;
    this.city = city;
    this.state = state;
    this.number = number;
    this.complement = complement;
    this.neighborhood = neighborhood;
  }

  get getCep() {
    return this.cep;
  }
  set setCep(value: string) {
    const cepRegex = /^\d{8}$/;
    if (cepRegex.test(value)) throw new Error("CEP INVÁLIDO");
    this.street = value;
  }

  get getStreet() {
    return this.street;
  }
  set setStreet(value: string) {
    this.street = value;
  }

  get getCity() {
    return this.city;
  }
  set setCity(value: string) {
    if (!value) throw new Error("Cidade é obrigatório");
    this.city = value;
  }

  get getState() {
    return this.state;
  }
  set setState(value: string) {
    if (!value) throw new Error("Estado é obrigatório");
    this.state = value;
  }

  get getNumber() {
    return this.number;
  }

  set setNumber(value: number) {
    if (isNaN(value)) throw new Error("Número inválido");
    this.number = value;
  }

  get getComplement() {
    return this.complement;
  }
  set setComplement(value: string) {
    this.complement = value;
  }

  get getNeighborhood() {
    return this.neighborhood;
  }
  set setNeighborhood(value: string) {
    this.neighborhood = value;
  }
}
