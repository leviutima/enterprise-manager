import { SignUpFormSchema } from './../model/auth.schema';
import { client } from '@/src/shared/config/client';
import { useMutation } from "@tanstack/react-query"

const createUser = async (data: SignUpFormSchema) => {

    const res = await client.post("/auth/sign-up", data);
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
