import {FC} from "react";

import Hero from "./components/Hero";
import WhyChoose from "./components/WhyChoose";
import Services from "./components/Services";
import Partners from "./components/Partners";

const Home: FC = () => {
    return (
        <div className={'container'}>

            <div className={' flex flex-col items-center gap-6 pt-11 border border-gray-200 mt-8'}>
                <section id={'introduction'} >
                    <Hero />
                </section>
                <section id={'how-it-works'} >
                    <WhyChoose />
                </section>
                <section id={'features'} >
                    <Services />
                </section>
               <section id={'partners'}>
                   <Partners />
               </section>
            </div>

        </div>
    )
}


export default Home;