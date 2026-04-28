import { SignUpFormSchema } from './../model/auth.schema';
import { client } from '@/src/shared/config/client';
import { useMutation } from "@tanstack/react-query"

const createUser = async (data: SignUpFormSchema) => {
    const { confirmPassword, ...rest } = data;
    const payload = {
        ...rest,
        sectorId: rest.sectorId || null,
        enterpriseId: rest.enterpriseId || null,
        address: {
            ...rest.address,
            zipcode: rest.address.zipCode,
            number: parseInt(rest.address.number, 10),
            zipCode: undefined,
        },
    };
    const res = await client.post("/auth/sign-up", payload);
    return res.data;
};

export const signUp = () => {
    const { mutate, isPending, isError, isSuccess } = useMutation({
        mutationKey: ['signUp'],
        mutationFn: (data: SignUpFormSchema) => createUser(data),
        onError: (error: any) => {
            const message = error?.response?.data?.err ?? error?.message ?? "Erro desconhecido";
            console.error("[signUp] erro:", message, error?.response?.data);
        }
    })

    const onSubmit = (data: SignUpFormSchema) => {
        mutate(data)
    }

    return { isPending, onSubmit, isError, isSuccess }
}
