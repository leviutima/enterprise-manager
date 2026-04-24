import { useForm } from "react-hook-form";
import { signUpFormSchema, SignUpFormSchema } from "../model/auth.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Role } from "@/src/entities/user/model/role";

export const useSignUpForm = () => {
  return useForm<SignUpFormSchema>({
    resolver: zodResolver(signUpFormSchema),
    defaultValues: {
      role: Role.USER,
      active: true,
      enterpriseId: "",
      sectorId: "",
    },
  });
};
