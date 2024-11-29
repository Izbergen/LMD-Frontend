import {z} from "zod";

export const formSchema = z.object({
    username: z.string().min(2, {
        message: "Username must be at least 2 characters.",
    }),
    email: z.string().email({
        message: "Invalid email address.",
    }),
    password: z.string()
        .min(8 ,{message: "Password must be at least 8 characters.",})
        .max(14 , {message: "Password must be at most 14 characters.",})
});
export type IFormSchema = z.infer<typeof formSchema>;

export const defaultFormValue : IFormSchema = {
    username: '',
    email: '',
    password: ''
}