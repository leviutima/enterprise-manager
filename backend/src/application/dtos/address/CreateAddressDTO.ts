export interface CreateAddressDto {
  zipcode: string;
  street: string;
  city: string;
  state: string;
  userId: string;
  number?: number;
  complement?: string;
  neighborhood?: string;
}
