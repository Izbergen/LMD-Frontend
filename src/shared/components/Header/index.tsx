import {FC} from "react";
import {Link} from "react-router-dom";

import Navigation from "@/shared/components/Navigation"
import {buttonVariants} from "@/shared/components/ui/button.tsx"
import {Avatar, AvatarImage ,AvatarFallback} from "@/shared/components/ui/avatar.tsx";
import {useAppSelector} from "@/shared/store";

const Header: FC = () => {
    const isAuth = useAppSelector(state => state.user.id);
    const username = useAppSelector(state => state.user.username);

    return (
        <header className={'container'}>
            <div className={'flex justify-between py-5'}>
                <Navigation />
                {
                    !isAuth ?
                        <div className={'flex gap-2'}>
                            <Link to={'/auth/0'} className={`${buttonVariants()}`}>Log in</Link>
                            <Link to={'/auth/1'} className={buttonVariants({variant: "outline"})}>Sign up</Link>
                        </div> :
                        <div className={'flex gap-1 item'}>
                            <Avatar>
                                <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                                <AvatarFallback>GU</AvatarFallback>
                            </Avatar>
                            <span className={''}>
                            {username}
                        </span>
                        </div>
                }
            </div>

        </header>
    )
}
export default Header;