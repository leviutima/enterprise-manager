import { useEffect } from "react";
import { error, input, label, sectionTitle } from "../utils/form-style";
import { viaCep } from "@/src/shared/lib/api/viaCep";
import { useSignUpForm } from "../hooks/use-sign-up-form";
import { signUp } from "../api/sign-up";

export function FormSignUpAddress() {
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
  );
}
