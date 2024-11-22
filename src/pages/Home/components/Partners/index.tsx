import {FC} from "react";

interface IPartner{
    icon: string,
    href: string
}

const partnersList: IPartner[] = [
    {
        icon: 'partner-1.svg',
        href: '#',
    },
    {
        icon: 'partner-1.svg',
        href: '#',
    },
    {
        icon: 'partner-1.svg',
        href: '#',
    },
    {
        icon: 'partner-1.svg',
        href: '#',
    },
    {
        icon: 'partner-1.svg',
        href: '#',
    },
    {
        icon: 'partner-1.svg',
        href: '#',
    },
    {
        icon: 'partner-1.svg',
        href: '#',
    },
    {
        icon: 'partner-1.svg',
        href: '#',
    }
]

const Partners: FC = () => {
    return (
        <div className={'grid grid-cols-6 pb-32'}>
            <div className={'col-span-2 p-16'}>
                <h2 className={'text-3xl font-semibold'}>
                    Our Partners and Sponsors
                </h2>

            </div>
            {
                partnersList.map(({icon , href} , index) => (
                    <div key={index} className={'p-16 flex items-center justify-center hover:bg-gray-50 transition-colors duration-500'}>
                        <a href={href}>
                            <div className={'w-12'}>
                                <img className={''} src={`/partners/${icon}`} alt={href}/>
                            </div>
                        </a>
                    </div>
                ))
            }
        </div>

    )
}

export default Partners;