import {FC} from "react";
import {
    Form
} from "@/shared/components/ui/form.tsx";
import {Button} from "@/shared/components/ui/button.tsx";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {z} from "zod";
import BackButton from "@/shared/components/Buttons/BackButton";
import CustomFormField from "@/shared/components/FormField";

const formSchema = z.object({
    email: z.string().email(),
    password: z.string()
        .min(8 ,{message: "Password must be at least 8 characters.",})
        .max(14 , {message: "Password must be at most 14 characters.",})
});


const LogInForm: FC = () => {
    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
            password: ""
        },
    });


    const onSubmit = (data: z.infer<typeof formSchema>) => {
        console.log("Form data:", data);
    };
    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 p-4 max-w-md mx-auto">
                <CustomFormField
                    control={form.control}
                    fieldName="email"
                    label="Email"
                    description=" This is your email."
                    placeholder="example@gmail.com"
                />
                <CustomFormField
                    control={form.control}
                    fieldName="password"
                    label="Password"
                    description=" This is your password."
                    placeholder="12345678"
                />
                <div className={'flex justify-between'}>
                   <BackButton backToPrev={-1}>
                       {`<- Back to Home`}
                   </BackButton>
                    <Button type="submit">Login</Button>
                </div>


            </form>
        </Form>
    )
}

export default LogInForm;