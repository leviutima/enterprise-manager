import { User } from "./User";

export class Position {
  public _name: string;
  public _employeesId: User[]; //array de id de funcionários

  constructor(name: string, employeesId: User[]) {
    ((this._name = name), (this._employeesId = employeesId));
  }

  get name() {
    return this._name;
  }

  get employeesId() {
    return this._employeesId;
  }
}
