import {IFormField} from "./../../types/IFormField.ts";

export const FormFlieds: IFormField[] = [
    {
        fieldName: 'username',
        label: "Username",
        description: "This is your public display name.",
        placeholder: "Alex Corner",
    },
    {
        fieldName: 'email',
        label: "Email",
        description: "This is your email.",
        placeholder: "example@gmail.com",
    },
    {
        fieldName: 'password',
        label: "Password",
        description: "This is your password",
        placeholder: "password",
    }
]