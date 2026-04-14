import type { Role } from "../types/UserTypes";
import { Address } from "./Address";
import { Enterprise } from "./Enterprise";
import { Sector } from "./Sector";
import bcrypt from "bcrypt";

export class User {
  public _id: string;
  public _name: string;
  public _surname: string;
  public _email: string;
  public _birthDate: Date;
  public _cpf: string;
  public _phone: string;
  public _address: Address;
  public _enterpriseId?: string;
  public _role: Role;
  public _sectorId?: string;
  private _password: string;
  private _active: boolean;
  private _deletedAt: Date;

  constructor(
    id: string,
    name: string,
    surname: string,
    email: string,
    password: string,
    birthDate: Date,
    cpf: string,
    phone: string,
    address: Address,
    role: Role,
    active: boolean,
    deletedAt: Date,
    sectorId?: string,
    enterpriseId?: string,
  ) {
    this._id = id;
    this._name = name;
    this._surname = surname;
    this._email = email;
    this._password = password;
    this._birthDate = birthDate;
    this._cpf = cpf;
    this._sectorId = sectorId;
    this._enterpriseId = enterpriseId;
    this._phone = phone
    this._address = address;
    this._role = role;
    this._active = active;
    this._deletedAt = deletedAt;
  }
  get id() {
    return this._id;
  }

  get name() {
    return this._name;
  }
  get surname() {
    return this._surname;
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
  get phone() {
    return this._phone
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

  get password() {
    return this._password;
  }

  get active() {
    return this._active;
  }

  get deletedAt() {
    return this._deletedAt;
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
