import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import z from "zod";

const addressFormSchema = z.object({
  zipcode: z.string().regex(/^\d{5}-\d{3}$/, "CEP inválido (use XXXXX-XXX)"),
  street: z.string().nonempty("Rua é obrigatória"),
  number: z.string().nonempty("Número é obrigatório"),
  complement: z.string().optional(),
  neighborhood: z.string().nonempty("Bairro é obrigatório"),
  city: z.string().nonempty("Cidade é obrigatória"),
  state: z.string().length(2, "Use a sigla do estado (ex: SP)"),
});

export type AddressFormSchema = z.infer<typeof addressFormSchema>;

export const useAddressForm = () => {
  return useForm<AddressFormSchema>({
    resolver: zodResolver(addressFormSchema),
  });
};
