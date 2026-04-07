import { User } from "./User";

export class Position {
  public _id: string;
  public _name: string;
  public _employeesId: User[];

  constructor(id: string, name: string, employeesId: User[]) {
    ((this._id = id), (this._name = name), (this._employeesId = employeesId));
  }
  get id() {
    return this._id;
  }

  get name() {
    return this._name;
  }

  get employeesId() {
    return this._employeesId;
  }
}
