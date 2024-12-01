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

import {useAppDispatch} from "@/shared/store";
import {setUser} from '@/shared/store/reducers/userSlice.ts'

const LogInForm: FC = () => {
    const form = useFormSchema(formSchema);

    const dispatch = useAppDispatch();

    const onSubmit = (data: IFormSchema) => {
        if(data.email === 'alexcorner@gmail.com'){
            dispatch(setUser({
                id: '12345678',
                isAdmin: true,
                username: 'Alex Corner'
            }))
            localStorage.setItem('id','12345678' )
            localStorage.setItem('username','Alex Corner' )
        }
        else{
            dispatch(setUser({
                id: '72612732',
                isAdmin: false,
                username: 'Ruslan'
            }))
            localStorage.setItem('username','Ruslan' )
            localStorage.setItem('id','72612732' )
        }

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