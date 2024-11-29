import {FC} from "react";
import {buttonVariants} from "@/shared/components/ui/button.tsx";
import {Link} from "react-scroll";

const WhyChoose: FC = () => {

    return (
        <div className={'max-w-[920px] pb-32 flex flex-col items-center justify-center text-center text-[#171717]'}>
            <h2 className={'max-w-[800px] mb-10 text-2xl font-semibold'}>
                Why Choose LMD?
            </h2>
            <p className={'mb-10 text-[#2F2424] font-light'}>
                With a focus on speed and sustainability, Rapid offers delivery services that are tailored to your business needs. Our advanced technology and eco-friendly practices ensure that you can deliver faster while reducing your environmental footprint.
            </p>
            <Link
                offset={-100}
                smooth={true}
                duration={600}
                to={'features'}
                className={`shadow self-center ${buttonVariants({variant: "outline" ,size: 'lg' })} !rounded-3xl`}>
                Explore Our Benefits
            </Link>
        </div>
    )
}

export default WhyChoose;
