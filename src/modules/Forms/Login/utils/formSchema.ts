import {z} from "zod";

export const formSchema = z.object({
    email: z.string().email(),
    password: z.string()
        .min(8 ,{message: "Password must be at least 8 characters.",})
        .max(14 , {message: "Password must be at most 14 characters.",})
});

export type IFormSchema = z.infer<typeof formSchema>;

export const defaultFormValue : IFormSchema = {
    email: '',
    password: ''
}