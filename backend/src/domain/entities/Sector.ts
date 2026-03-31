import { Position } from "./Position";

export class Sector {
  public _name: string;
  public _position?: Position[];
  public _description?: string;

  constructor(name: string, position?: Position[], description?: string) {
    ((this._name = name),
      (this._description = description),
      (this._position = position));
  }

  get name() {
    return this._name;
  }

  get position() {
    return this._position;
  }

  get description() {
    return this._description;
  }
}
