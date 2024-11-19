import {FC} from "react";
import {Button} from "@/shared/components/ui/button.tsx";

const WhyChoose: FC = () => {

    return (
        <div className={'max-w-[920px] pb-32 flex flex-col items-center justify-center text-center text-[#171717]'}>
            <h2 className={'max-w-[800px] mb-10 text-2xl '}>
                Why Choose LMD?
            </h2>
            <p className={'mb-10 text-[#2F2424] font-light'}>
                With a focus on speed and sustainability, Rapid offers delivery services that are tailored to your business needs. Our advanced technology and eco-friendly practices ensure that you can deliver faster while reducing your environmental footprint.
            </p>
            <Button variant={'outline'} size={'lg'} className={'shadow rounded-3xl self-center'}>
                Explore Our Benefits
            </Button>
        </div>
    )
}

export default WhyChoose;
