import z from "zod";
import { isValidCPF } from "./auth.utils";
import { Role } from "@/src/entities/user/model/role";

export const signUpFormSchema = z.object({
  name: z.string().nonempty("Nome é obrigatório"),
  surname: z.string().nonempty("Sobrenome é obrigatório"),
  email: z
    .string()
    .email("Insira um email válido")
    .nonempty("Email é obrigatório"),
  birthDate: z.date().nonoptional("Data de nascimento é obrigatório"),
  cpf: z
    .string()
    .nonempty("Cpf é obrigatório")
    .regex(
      /^\d{3}\.\d{3}\.\d{3}-\d{2}$/,
      "Formato inválido (use XXX.XXX.XXX-XX)",
    )
    .refine(isValidCPF, "CPF Inválido"),
  phone: z.string().nonempty("Telefone é obrigatório"),
  address: z.object({
    street: z.string().nonempty("Rua é obrigatória"),
    number: z.string().nonempty("Número é obrigatório"),
    complement: z.string().optional(),
    neighborhood: z.string().nonempty("Bairro é obrigatório"),
    city: z.string().nonempty("Cidade é obrigatória"),
    state: z.string().length(2, "Use a sigla do estado (ex: SP)"),
    zipCode: z.string().regex(/^\d{5}-\d{3}$/, "CEP inválido (use XXXXX-XXX)"),
  }),
  enterpriseId: z.string(),
  role: z.enum(Object.values(Role) as [Role, ...Role[]]),
  sectorId: z.string(),
  active: z.boolean(),
  deletedAt: z.date(),
});

export type SignUpFormSchema = z.infer<typeof signUpFormSchema>;
