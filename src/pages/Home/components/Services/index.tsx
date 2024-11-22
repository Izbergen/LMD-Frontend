import {FC} from 'react';

interface IService {
    icon: string;
    title: string;
    description: string;
}
const services: IService[] = [
    {
        icon: 'service-1.svg',
        title: 'Same-Day Delivery',
        description: 'Delivering packages within hours, ensuring you stay ahead in the fast-paced market.',
    },
    {
        icon: 'service-2.svg',
        title: 'Scheduled Deliveries',
        description: 'Set precise delivery times that match your business’s needs and give your customers flexibility.',
    },
    {
        icon: 'service-3.svg',
        title: 'Sustainable Practices',
        description: 'We use eco-friendly electric vehicles and environmentally conscious packaging, reducing the carbon footprint of every delivery.',
    },
    {
        icon: 'service-4.svg',
        title: 'E-Commerce Integration',
        description: 'Seamlessly connect your online store with our system for smooth, hassle-free delivery management.',
    }
]

const Services: FC = () => {
    return (
        <div className={'pb-32'}>
            <h2 className={'p-12 text-3xl font-semibold'}>
                Our Services
            </h2>
            <div className={'grid grid-cols-3 '}>
                {
                    services.map(({icon , title , description}) => (
                        <div key={title} className={'flex flex-col gap-4 px-11 pb-6 pt-14'}>
                            <div className={'flex gap-2 items-center'}>
                                <div className={''}>
                                    <img src={`/services/${icon}`} alt={title} />
                                </div>
                                <div className={'leading-5 text-base font-light text-slate-gray'}>
                                    {title}
                                </div>
                            </div>
                            <div className={'pt-4 font-semibold text-xl text-primary-black'}>
                                {description}
                            </div>

                        </div>

                    ))
                }
            </div>
        </div>
    )
}

export default Services;