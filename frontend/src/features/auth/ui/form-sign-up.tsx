"use client";

import { useSignUpForm } from "../hooks/use-sign-up-form";
import { PersonalDataSchema } from "../model/auth.schema";
import { useAuthSignUp } from "../model/auth.context";
import { error, input, label, sectionTitle } from "../utils/form-style";
import { ButtonFreeStyle } from "@/src/shared/ui/button";

interface FormSignUpProps {
  onNext: () => void;
}

export function FormSignUp({ onNext }: FormSignUpProps) {
  const { setPersonalData } = useAuthSignUp();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useSignUpForm();

  function handleNext(data: PersonalDataSchema) {
    setPersonalData(data);
    onNext();
  }

  return (
    <form onSubmit={handleSubmit(handleNext)} className="flex flex-col gap-3.5">
      <div className="flex flex-col gap-2">
        <p className={sectionTitle}>Informações pessoais</p>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className={label}>Nome</label>
            <input {...register("name")} placeholder="João" className={input} />
            {errors.name && <p className={error}>{errors.name.message}</p>}
          </div>
          <div>
            <label className={label}>Sobrenome</label>
            <input
              {...register("surname")}
              placeholder="Silva"
              className={input}
            />
            {errors.surname && (
              <p className={error}>{errors.surname.message}</p>
            )}
          </div>
        </div>

        <div>
          <label className={label}>Email</label>
          <input
            {...register("email")}
            type="email"
            placeholder="joao@empresa.com"
            className={input}
          />
          {errors.email && <p className={error}>{errors.email.message}</p>}
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className={label}>CPF</label>
            <input
              {...register("cpf")}
              placeholder="000.000.000-00"
              className={input}
            />
            {errors.cpf && <p className={error}>{errors.cpf.message}</p>}
          </div>
          <div>
            <label className={label}>Telefone</label>
            <input
              {...register("phone")}
              placeholder="(11) 99999-9999"
              className={input}
            />
            {errors.phone && <p className={error}>{errors.phone.message}</p>}
          </div>
        </div>

        <div>
          <label className={label}>Data de nascimento</label>
          <input
            {...register("birthDate", { valueAsDate: true })}
            type="date"
            className={input}
          />
          {errors.birthDate && (
            <p className={error}>{errors.birthDate.message}</p>
          )}
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className={label}>Senha</label>
            <input
              {...register("password")}
              type="password"
              placeholder="Mínimo 8 caracteres"
              className={input}
            />
            {errors.password && (
              <p className={error}>{errors.password.message}</p>
            )}
          </div>
          <div>
            <label className={label}>Confirmar senha</label>
            <input
              {...register("confirmPassword")}
              type="password"
              placeholder="Repita a senha"
              className={input}
            />
            {errors.confirmPassword && (
              <p className={error}>{errors.confirmPassword.message}</p>
            )}
          </div>
        </div>
      </div>
      <ButtonFreeStyle variant="primary" size="md">Próximo</ButtonFreeStyle>
    </form>
  );
}
