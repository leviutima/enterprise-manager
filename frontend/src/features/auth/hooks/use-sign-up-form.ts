import { useForm } from "react-hook-form";
import { personalDataSchema, PersonalDataSchema } from "../model/auth.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Role } from "@/src/entities/user/model/role";

export const useSignUpForm = () => {
  return useForm<PersonalDataSchema>({
    resolver: zodResolver(personalDataSchema),
    defaultValues: {
      role: Role.USER,
      active: true,
    },
  });
};
