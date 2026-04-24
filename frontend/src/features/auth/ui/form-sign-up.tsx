"use client";

import { useSignUpForm } from "../hooks/use-sign-up-form";
import { signUp } from "../api/sign-up";
import { useEffect, useState } from "react";
import { viaCep } from "@/src/shared/lib/viaCep";

const input =
  "w-full px-3.5 py-2.5 text-sm bg-bg border border-ink/10 rounded-xl text-ink placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent/50 transition";
const label = "block text-sm text-ink mb-1.5";
const error = "text-red-400 text-xs mt-1";
const sectionTitle = "text-xs font-medium text-muted uppercase tracking-widest";

export function FormSignUp() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setValue,
  } = useSignUpForm();
  const { onSubmit, isPending, isError, isSuccess } = signUp();
  const zipCode = watch("address.zipCode");

  useEffect(() => {
    const clean = zipCode?.replace(/\D/g, "");
    if (clean?.length === 8) {
      viaCep(clean).then((data) => {
        if (data && !data.err) {
          setValue("address.city", data.localidade);
          setValue("address.state", data.uf);
          setValue("address.street", data.logradouro);
          setValue("address.neighborhood", data.bairro);
        }
      });
    }
  }, [zipCode]);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
      <div className="space-y-4">
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
      </div>

      <div className="space-y-4">
        <p className={sectionTitle}>Endereço</p>

        <div className="grid grid-cols-3 gap-4">
          <div>
            <label className={label}>CEP</label>
            <input
              {...register("address.zipCode")}
              placeholder="00000-000"
              className={input}
            />
            {errors.address?.zipCode && (
              <p className={error}>{errors.address.zipCode.message}</p>
            )}
          </div>
          <div>
            <label className={label}>Cidade</label>
            <input
              {...register("address.city")}
              placeholder="São Paulo"
              className={input}
            />
            {errors.address?.city && (
              <p className={error}>{errors.address.city.message}</p>
            )}
          </div>
          <div>
            <label className={label}>Estado</label>
            <input
              {...register("address.state")}
              placeholder="SP"
              maxLength={2}
              className={`${input} uppercase`}
            />
            {errors.address?.state && (
              <p className={error}>{errors.address.state.message}</p>
            )}
          </div>
        </div>
        <div className="grid grid-cols-3 gap-4">
          <div className="col-span-2">
            <label className={label}>Rua</label>
            <input
              {...register("address.street")}
              placeholder="Av. Paulista"
              className={input}
            />
            {errors.address?.street && (
              <p className={error}>{errors.address.street.message}</p>
            )}
          </div>
          <div>
            <label className={label}>Número</label>
            <input
              {...register("address.number")}
              placeholder="1234"
              className={input}
            />
            {errors.address?.number && (
              <p className={error}>{errors.address.number.message}</p>
            )}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className={label}>Bairro</label>
            <input
              {...register("address.neighborhood")}
              placeholder="Bela Vista"
              className={input}
            />
            {errors.address?.neighborhood && (
              <p className={error}>{errors.address.neighborhood.message}</p>
            )}
          </div>
          <div>
            <label className={label}>
              Complemento{" "}
              <span className="text-muted font-normal">(opcional)</span>
            </label>
            <input
              {...register("address.complement")}
              placeholder="Apto 42"
              className={input}
            />
          </div>
        </div>
      </div>

      <button
        type="submit"
        disabled={isPending}
        className="w-full py-3 text-sm font-medium text-white bg-accent rounded-full hover:bg-[#2f5240] transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
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
