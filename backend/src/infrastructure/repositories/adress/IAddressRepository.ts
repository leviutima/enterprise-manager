import { Address } from "../../../domain/entities/Address";

export interface IAddressRepository {
    findAddressUser(id: string): Promise<Address | null>
    createAddress(address: Address): Promise<void> 
}