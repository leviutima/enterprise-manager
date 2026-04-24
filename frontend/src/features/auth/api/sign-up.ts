import { createUser } from '@/src/shared/lib/api/auth/createUser';
import { SignUpFormSchema, signUpFormSchema } from './../model/auth.schema';
import { useMutation } from "@tanstack/react-query"

export const signUp = () => {
    const {mutate, isPending, isError, isSuccess} = useMutation({
        mutationKey: ['signUp'],
        mutationFn: async(data: SignUpFormSchema) => createUser(data)
    })

    const onSubmit = (data: SignUpFormSchema) => {
        mutate(data)
    }

    return{isPending, onSubmit, isError, isSuccess}
}