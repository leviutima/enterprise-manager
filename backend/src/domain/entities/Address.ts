export class Address {
  public _id: string;
  public _zipcode: string;
  public _street: string;
  public _city: string;
  public _state: string;
  public _number?: number;
  public _complement?: string;
  public _neighborhood?: string;

  constructor(
    id: string,
    zipCode: string,
    street: string,
    city: string,
    state: string,
    number?: number,
    complement?: string,
    neighborhood?: string,
  ) {
    this._id = id
    this._zipcode = zipCode;
    this._street = street;
    this._city = city;
    this._state = state;
    this._number = number;
    this._complement = complement;
    this._neighborhood = neighborhood;
  }

  get id() {
    return this._id
  }

  get zipCode() {
    return this._zipcode;
  }
  get street() {
    return this._street;
  }
  get city() {
    return this._city;
  }
  get state() {
    return this._state;
  }
  get number() {
    return this._number;
  }
  get complement() {
    return this._complement;
  }
  get neighborhood() {
    return this._neighborhood;
  }
}
