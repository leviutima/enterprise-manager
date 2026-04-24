import { useForm } from "react-hook-form";
import { signUpFormSchema, SignUpFormSchema } from "./auth.schema";
import { zodResolver } from "@hookform/resolvers/zod";

export function isValidCPF(cpf: string): boolean {
  const cleaned = cpf.replace(/\D/g, "");

  if (cleaned.length !== 11 || /^(\d)\1{10}$/.test(cleaned)) return false;

  const calcDigit = (slice: string) => {
    const sum = slice
      .split("")
      .reduce((acc, num, i) => acc + Number(num) * (slice.length + 1 - i), 0);
    const remainder = (sum * 10) % 11;
    return remainder === 10 || remainder === 11 ? 0 : remainder;
  };

  const first = calcDigit(cleaned.slice(0, 9));
  const second = calcDigit(cleaned.slice(0, 10));

  return first === Number(cleaned[9]) && second === Number(cleaned[10]);
}
