import { UserRepository } from "../../../infrastructure/repositories/user/UserRepository";

export class DeleteUserUseCase {
    constructor(private userRepo: UserRepository) {}

    async execute(id: string) {
        const user = await this.userRepo.findById(id)

        if(!user) throw new Error("Usuário não encontrado")

        await this.userRepo.delete(id)
    }
}