import {
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage
} from "@/shared/components/ui/form.tsx";
import { Input } from "@/shared/components/ui/input.tsx";
import { Control, FieldValues, Path } from "react-hook-form";
import { FC } from "react";

export interface IFormField<T extends FieldValues> {
    control: Control<T>;
    fieldName: Path<T>;
    label: string;
    description?: string;
    placeholder: string;
}

const CustomFormField: FC<IFormField<any>> = ({ control, fieldName, label, description, placeholder }) => {
    return (
        <FormField
            control={control}
            name={fieldName}
            render={({ field }) => (
                <FormItem>
                    <FormLabel>{label}</FormLabel>
                    <FormControl>
                        <Input placeholder={placeholder} {...field} />
                    </FormControl>
                    {description && <FormDescription>{description}</FormDescription>}
                    <FormMessage />
                </FormItem>
            )}
        />
    );
};

export default CustomFormField;
