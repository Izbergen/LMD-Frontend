import {Button} from "@/shared/components/ui/button.tsx";
import {useNavigate} from "react-router-dom";
import {FC ,ReactNode} from "react";

interface IProps {
    backToPrev: number;
    children: ReactNode;
}

const BackButton: FC<IProps> = ({ backToPrev , children }) => {
    const navigate = useNavigate();
    return (
        <Button variant={'outline'} onClick={(e) => {
            e.preventDefault();
            navigate(backToPrev)
        }}>{children}</Button>
    )
}

export default BackButton;