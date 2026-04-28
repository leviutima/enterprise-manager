"use client";

import { useSignUpForm } from "../hooks/use-sign-up-form";
import { signUp } from "../api/sign-up";
import { useEffect } from "react";
import { viaCep } from "@/src/shared/lib/api/viaCep";
import { error, input, label, sectionTitle } from "../utils/form-style";

export function FormSignUp() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setValue,
  } = useSignUpForm();
  const { onSubmit, isPending, isError, isSuccess } = signUp();


  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-3.5">
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
      <button
        type="submit"
        disabled={isPending}
        className="w-full py-3 text-sm font-medium text-white bg-accent rounded-full hover:bg-[#2f5240] transition-colors disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer"
      >
        {isPending ? "Criando conta..." : "Criar conta"}
      </button>

      {isError && (
        <p className="text-red-400 text-sm text-center">
          Ocorreu um erro. Tente novamente.
        </p>
      )}
      {isSuccess && (
        <p className="text-accent text-sm text-center">
          Conta criada com sucesso!
        </p>
      )}
    </form>
  );
}
