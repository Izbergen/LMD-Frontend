import {FC} from "react";
import {Button} from "@/shared/components/ui/button.tsx";

const Hero: FC = () => {

    return (
        <div className={'max-w-[920px] pb-32 flex flex-col items-center justify-center text-center text-[#171717]'}>
            <h1 className={'max-w-[800px] mb-10 text-3xl '}>
                <span className={'font-semibold'}>LMD</span> is <span className={'text-teal-700'}>Fast</span>, <span className={'text-teal-700'}>Reliable</span>, and <span className={'text-teal-700'}>Efficient</span> Delivery Solutions for Your Business.
            </h1>
            <p className={'mb-10 text-[#2F2424] font-light'}>
                At Rapid, we specialize in delivering fast, dependable services for companies of all sizes. Our efficient solutions help you meet customer demands with ease and confidence.
            </p>
            <Button variant={'outline'} size={'lg'} className={'shadow rounded-3xl self-center'}>
                Learn More
            </Button>
        </div>
    )
}

export default Hero;
