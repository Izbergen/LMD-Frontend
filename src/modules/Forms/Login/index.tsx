import {FC} from "react";
import {
    Form
} from "@/shared/components/ui/form.tsx";
import {Button} from "@/shared/components/ui/button.tsx";

import BackButton from "@/shared/components/Buttons/BackButton";
import FormField from "@/shared/components/FormField";

import {useFormSchema} from "@/modules/Forms/hooks/useFormSchema.ts";
import {formSchema , IFormSchema} from "./utils/formSchema.ts";
import {FormFlieds} from "./utils/formFields.ts"



const LogInForm: FC = () => {
    const form = useFormSchema(formSchema)


    const onSubmit = (data: IFormSchema) => {
        console.log("Form data:", data);
    };
    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 p-4 max-w-md mx-auto">
                {
                    FormFlieds.map(({fieldName ,label , description ,placeholder }) => (
                        <FormField
                            control={form.control}
                            fieldName={fieldName}
                            label={label}
                            placeholder={placeholder}
                            description={description}
                        />
                    ))
                }
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