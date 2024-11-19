import {FC} from "react";

import Hero from "./components/Hero";
import WhyChoose from "./components/WhyChoose";

const Home: FC = () => {
    return (
        <div className={'container'}>
            <div className={' flex flex-col items-center gap-6 pt-11 border border-gray-200 mt-8'}>
                <Hero />
                <WhyChoose />
                {/*<Services />*/}
                {/*<Partners />*/}
            </div>

        </div>
    )
}


export default Home;