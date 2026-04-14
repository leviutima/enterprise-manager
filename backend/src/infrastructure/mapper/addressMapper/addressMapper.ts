import { Address } from "../../../domain/entities/Address";

export class AddressMapper {
    static toDomain(row: any): Address {
        return new Address (
            row.id,
            row.zipcode,
            row.street,
            row.city,
            row.state,
            row.number,
            row.complement,
            row.neighborhood,
        )
    }
}