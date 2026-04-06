import type { Role } from "../types/UserTypes";
import { Address } from "./Address";
import { Enterprise } from "./Enterprise";
import { Sector } from "./Sector";
import bcrypt from "bcrypt";

export class User {
  public _name: string;
  public _surname: string;
  public _email: string;
  public _birthDate: Date;
  public _cpf: string;
  public _address: Address;
  public _enterpriseId: string;
  public _role: Role;
  public _sectorId?: Sector;
  private _password: string;

  constructor(
    name: string,
    surname: string,
    email: string,
    password: string,
    birthDate: Date,
    cpf: string,
    enterpriseId: string,
    address: Address,
    role: Role,
    sectorId?: Sector,
  ) {
    this._name = name;
    this._surname = surname;
    this._email = email;
    this._password = password;
    this._birthDate = birthDate;
    this._cpf = cpf;
    this._sectorId = sectorId;
    this._enterpriseId = enterpriseId;
    this._address = address;
    this._role = role;
  }

  get name() {
    return this._name;
  }
  get email() {
    return this._email;
  }
  get birthDate() {
    return this._birthDate;
  }
  get cpf() {
    return this._cpf;
  }
  get address() {
    return this._address;
  }
  get enterpriseId() {
    return this._enterpriseId;
  }
  get sectorId() {
    return this._sectorId;
  }

  get role() {
    return this._role;
  }

  async comparePassword(password: string) {
    return await bcrypt.compare(password, this._password);
  }

  async changePassword(newPassword: string) {
    if (newPassword.length < 6) throw new Error("Mínimo de caractéres é 6");
    if (newPassword.length > 15)
      throw new Error("Senha ultrapassou o limite de caractéres");
    this._password = await bcrypt.hash(newPassword, 10);
  }
}
