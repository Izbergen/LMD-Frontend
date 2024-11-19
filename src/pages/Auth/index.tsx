import {FC} from "react";

import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/shared/components/ui/tabs"


import {useParams} from "react-router-dom";
import SignUpForm from "@/modules/Forms/Signup";
import LogInForm from "@/modules/Forms/Login";

const Auth: FC = () => {
    const { id } = useParams();
    return (
        <div className={'flex pt-64 justify-center'}>
            <Tabs defaultValue={id} className="w-[500px] border rounded-2xl p-4 shadow">
                <TabsList className={'grid w-full grid-cols-2'}>
                    <TabsTrigger value={"0"}>Log In</TabsTrigger>
                    <TabsTrigger value={"1"}>Sign Up</TabsTrigger>
                </TabsList>
                <TabsContent value="0">
                    <LogInForm />
                </TabsContent>
                <TabsContent value="1">
                    <SignUpForm />
                </TabsContent>
            </Tabs>

        </div>
    )
}
export default Auth;