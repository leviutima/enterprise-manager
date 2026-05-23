"use client";

import { useEffect } from "react";
import { useAddressForm, AddressFormSchema } from "../hooks/use-address-form";
import { viaCep } from "@/src/shared/lib/api/viaCep";
import { error, input, label, sectionTitle } from "../utils/form-style";

interface FormAddressProps {
  onSubmitData: (data: AddressFormSchema) => void;
  onBack?: () => void;
  isPending?: boolean;
  isError?: boolean;
  isSuccess?: boolean;
}

export function FormAddress({
  onSubmitData,
  onBack,
  isPending,
  isError,
  isSuccess,
}: FormAddressProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setValue,
  } = useAddressForm();

  const zipcode = watch("zipcode");

  useEffect(() => {
    const clean = zipcode?.replace(/\D/g, "");
    if (clean?.length === 8) {
      viaCep(clean).then((data) => {
        if (data && !data.err) {
          setValue("city", data.localidade);
          setValue("state", data.uf);
          setValue("street", data.logradouro);
          setValue("neighborhood", data.bairro);
        }
      });
    }
  }, [zipcode]);

  return (
    <form onSubmit={handleSubmit(onSubmitData)} className="flex flex-col gap-3.5">
      <div className="flex flex-col gap-2">
        <p className={sectionTitle}>Endereço</p>

        <div className="grid grid-cols-3 gap-4">
          <div>
            <label className={label}>CEP</label>
            <input
              {...register("zipcode")}
              placeholder="00000-000"
              className={input}
            />
            {errors.zipcode && (
              <p className={error}>{errors.zipcode.message}</p>
            )}
          </div>
          <div>
            <label className={label}>Cidade</label>
            <input
              {...register("city")}
              placeholder="São Paulo"
              className={input}
            />
            {errors.city && <p className={error}>{errors.city.message}</p>}
          </div>
          <div>
            <label className={label}>Estado</label>
            <input
              {...register("state")}
              placeholder="SP"
              maxLength={2}
              className={`${input} uppercase`}
            />
            {errors.state && <p className={error}>{errors.state.message}</p>}
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4">
          <div className="col-span-2">
            <label className={label}>Rua</label>
            <input
              {...register("street")}
              placeholder="Av. Paulista"
              className={input}
            />
            {errors.street && <p className={error}>{errors.street.message}</p>}
          </div>
          <div>
            <label className={label}>Número</label>
            <input
              {...register("number")}
              placeholder="1234"
              className={input}
            />
            {errors.number && <p className={error}>{errors.number.message}</p>}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className={label}>Bairro</label>
            <input
              {...register("neighborhood")}
              placeholder="Bela Vista"
              className={input}
            />
            {errors.neighborhood && (
              <p className={error}>{errors.neighborhood.message}</p>
            )}
          </div>
          <div>
            <label className={label}>
              Complemento{" "}
              <span className="text-muted font-normal">(opcional)</span>
            </label>
            <input
              {...register("complement")}
              placeholder="Apto 42"
              className={input}
            />
          </div>
        </div>
      </div>

      <div className="flex gap-3">
        {onBack && (
          <button
            type="button"
            onClick={onBack}
            className="w-full py-3 text-sm font-medium text-ink border border-ink/20 rounded-full hover:bg-ink/5 transition-colors cursor-pointer"
          >
            Voltar
          </button>
        )}
        <button
          type="submit"
          disabled={isPending}
          className="w-full py-3 text-sm font-medium text-white bg-accent rounded-full hover:bg-[#2f5240] transition-colors disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer"
        >
          {isPending ? "Salvando..." : "Continuar"}
        </button>
      </div>

      {isError && (
        <p className="text-red-400 text-sm text-center">
          Ocorreu um erro. Tente novamente.
        </p>
      )}
      {isSuccess && (
        <p className="text-accent text-sm text-center">
          Endereço salvo com sucesso!
        </p>
      )}
    </form>
  );
}
