import { Address } from "./Address";
import { Enterprise } from "./Enterprise";
import { Sector } from "./Sector";

export class User {
  private name: string;
  private surname: string;
  private email: string;
  private password: string;
  private birthDate: Date;
  private cpf: string;
  private enterpriseId: string;
  private address: Address;
  private sectorId?: Sector;

  constructor(
    name: string,
    surname: string,
    email: string,
    password: string,
    birthDate: Date,
    cpf: string,
    enterpriseId: string,
    address: Address,
    sectorId?: Sector,
  ) {
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.password = password;
    this.birthDate = birthDate;
    this.cpf = cpf;
    this.sectorId = sectorId;
    this.enterpriseId = enterpriseId;
    this.address = address;
  }

  get getName() {
    return this.name;
  }
  set setName(value: string) {
    if (!value) throw new Error("Nome é obrigatório");
    this.name = value;
  }

  get getSurname() {
    return this.surname;
  }
  set setSurname(value: string) {
    if (!value) throw new Error("Sobrenome é obrigatório");
    this.surname = value;
  }

  get getEmail() {
    return this.email;
  }
  set setEmail(value: string) {
    if (!value) throw new Error("Email é obrigatório");
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (emailRegex.test(value)) throw new Error("Formato do email inválido");
    this.email = value;
  }

  get getPassword() {
    return this.password;
  }

  set setPassword(value: string) {
    if (value.length < 6) throw new Error("Mínimos de caractéres 8");
    if (value.length > 15) throw new Error("Caractéres máximos atingido");
    this.password = value;
  }

  get getBirthDate() {
    return this.birthDate;
  }
  set setBirthDate(value: Date) {
    const date = new Date(value);
    if (!date) throw new Error("Data de nascimento é obrigatório");
    if (isNaN(date.getDate())) throw new Error("Data inválida");
    if (date > new Date())
      throw new Error("Ta tentando viajar no tempo mermão?");
    const age = new Date().getFullYear() - date.getFullYear();
    if (age < 18)
      throw new Error("Por que vocês estão contratando alguém de menor?");
    if (age > 110) throw new Error("Como esse cara ainda ta vivo?");
    this.birthDate = value;
  }

  get getCpf() {
    return this.cpf;
  }
  set setCpf(value: string) {
    const cpfRegex = /^\d{11}$/;
    if (!cpfRegex.test(value)) throw new Error("CPF inválido");

    if (/^(\d)\1{10}$/.test(value)) throw new Error("CPF inválido");
    let sum = 0;
    for (let i = 0; i < 9; i++) sum += parseInt(value[i]) * (10 - i);
    let digit = 11 - (sum % 11);
    if (digit >= 10) digit = 0;
    if (digit !== parseInt(value[9])) throw new Error("CPF inválido");
    sum = 0;
    for (let i = 0; i < 10; i++) sum += parseInt(value[i]) * (11 - i);
    digit = 11 - (sum % 11);
    if (digit >= 10) digit = 0;
    if (digit !== parseInt(value[10])) throw new Error("CPF inválido");

    this.cpf = value;
  }

  get getEnterpriseId() {
    return this.enterpriseId
  }
  set setEnterpriseId(value: string) {
    if(!value) throw new Error("É obrigatório filiar o novo usuário a uma empresa")
    this.enterpriseId
  }

  get getAddress() {
    return this.address
  }

  set setAddress(value: Address) {
    if(!value) throw new Error("Endereço é obrigatório")
    this.address = value
  }

  get getSector() {
    return this.sectorId;
  }
  set setSelector(value: Sector) {
    this.sectorId = value;
  }
}
