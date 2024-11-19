import { FC } from "react";
import { Button } from "@/shared/components/ui/button";
import {Form,} from "@/shared/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import BackButton from "@/shared/components/Buttons/BackButton";
import CustomFormField from "@/shared/components/FormField";

const formSchema = z.object({
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

type FormValues = z.infer<typeof formSchema>;

const SignUpForm: FC = () => {
    const form = useForm<FormValues>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            username: "",
            email: "",
            password: ""
        },
    });
    const onSubmit = (data: FormValues) => {
        console.log("Form data:", data);
    };

    return (
        <Form {...form}>
            <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-6 p-4 max-w-md mx-auto"
            >
                <CustomFormField
                    control={form.control}
                    fieldName="username"
                    label="Username"
                    description="This is your public display name."
                    placeholder="Alex Corner"
                />
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
                <div className="flex justify-between">
                    <BackButton backToPrev={-1}>{`<- Back to Home`}</BackButton>
                    <Button
                        type="submit"
                    >
                        Sign Up
                    </Button>
                </div>
            </form>
        </Form>
    );
};

export default SignUpForm;
