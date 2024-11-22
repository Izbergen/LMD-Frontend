import {FC, useEffect} from "react";
import { Link } from "react-router-dom";

import Navigation from "@/shared/components/Navigation";
import { buttonVariants } from "@/shared/components/ui/button.tsx";
import { Avatar, AvatarImage, AvatarFallback } from "@/shared/components/ui/avatar.tsx";
import { useAppSelector } from "@/shared/store";
import useScroll from "@/shared/hooks/useScroll.ts";

const Header: FC = () => {
    const isAuth = useAppSelector((state) => state.user.id);
    const username = useAppSelector((state) => state.user.username);

    const { direction, isTop } = useScroll();
    useEffect(() => {
        console.log(direction)
    }
    ,[direction])


    return (
        <header
            className={`transition-transform duration-300 ${
                isTop ? "relative" : "fixed"
            } ${
                direction === "down" && !isTop
                    ? "-translate-y-full"
                    : "translate-y-0"
            } py-5 top-0 left-0 w-full bg-white border-b shadow-md z-50`}
        >
            <div className={"container"}>
                <div className={"flex justify-between"}>
                    <Navigation />
                    {!isAuth ? (
                        <div className={"flex gap-2"}>
                            <Link to={"/auth/0"} className={`${buttonVariants()}`}>
                                Log in
                            </Link>
                            <Link
                                to={"/auth/1"}
                                className={buttonVariants({ variant: "outline" })}
                            >
                                Sign up
                            </Link>
                        </div>
                    ) : (
                        <div className={"flex gap-1 items-center"}>
                            <Avatar>
                                <AvatarImage
                                    src="https://github.com/shadcn.png"
                                    alt="@shadcn"
                                />
                                <AvatarFallback>GU</AvatarFallback>
                            </Avatar>
                            <span>{username}</span>
                        </div>
                    )}
                </div>
            </div>
        </header>
    );
};

export default Header;
