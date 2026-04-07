import { User } from "../../../domain/entities/User";

export class UserMapper {
  static toDomain(row: any): User {
    return new User(
      row.id,
      row.name,
      row.surname,
      row.email,
      row.password,
      new Date(row.birth_date),
      row.cpf,
      row.enterprise_id,
      row.address,
      row.role,
      row.sector_id,
    );
  }

  static toPersistence(user: User) {
    return {
      name: user.name,
      surname: user.surname,
      email: user.email,
      birth_date: user.birthDate,
      cpf: user.cpf,
      enterprise_id: user.enterpriseId,
      role: user.role,
      sector_id: user.sectorId,
    };
  }
}
