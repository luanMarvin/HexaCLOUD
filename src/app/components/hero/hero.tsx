import Image from 'next/image';
import HeroImage from '../../../../public/Images/heroimage.png';
import User from '../../../../public/Images/user.svg';
import Location from '../../../../public/Images/location.svg';
import Server from '../../../../public/Images/Server.svg';
import HeroImage2 from '../../../../public/Images/heroimage2.png';
import Check from '../../../../public/Images/check-full.svg';
import { Rubik } from 'next/font/google';

const rubik = Rubik({ subsets: ['latin'], weight: ['400','500', '600'] })

type HeroProps = {
    users: string,
    location: string,
    servers: string
}

export default function Hero({users, location, servers}: HeroProps) {
    return (
    <div className="px-4 sm:px-8 lg:px-16">
        <div className='flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-0'>
            <div className='text-center lg:text-left'>
                <h1 className={`${rubik.className} selection:text-[#FFFFFF] selection:bg-[#F53838] text-4xl sm:text-5xl font-medium leading-tight mb-5 text-[#0B132A] max-w-full lg:max-w-[550px]`}>Vai de boa. Vai de HexaCLOUD.</h1>
                <p className={`${rubik.className} selection:text-[#FFFFFF] selection:bg-[#F53838] mb-8 sm:mb-12 leading-7 text-[#4F5665] max-w-full lg:max-w-[550px]`}>Forneça uma rede segura, estável e versátil com a <strong>HexaCLOUD</strong>. Recursos avançados te esperam.</p>
                <a className={`${rubik.className} selection:text-[#FFFFFF] selection:bg-[#F53838] inline-block bg-[#F53838] shadow-[0_14px_16px_rgba(245,56,56,0.35)] rounded-lg lg:px-22 lg:py-3.5 px-12 py-2.5 text-[#fff] hover:scale-110 transition-transform duration-300 ease-in-out`} href='#'>Eu Quero</a>
            </div>
            <div className='flex justify-center lg:justify-end w-full lg:w-auto'>
                <Image src={HeroImage} alt='' className='max-w-full h-auto' />
            </div>
        </div>

        <div className='flex flex-col sm:flex-row shadow-[0_0_186px_rgba(13,16,37,0.1)] rounded-2xl justify-between items-start lg:items-center mt-16 sm:mt-[120px] h-auto sm:h-[200px] px-6 sm:px-[40px] gap-6 sm:gap-[40px] py-6 lg:py-0'>
            <div className='flex items-center justify-center flex-1'>
                <Image src={User} alt='' className='mr-4 sm:mr-8' draggable={false} />
                <div>
                    <h1 className={`${rubik.className} selection:text-[#FFFFFF] selection:bg-[#F53838] font-bold text-2xl sm:text-[26px] text-[#0B132A]`}>{users}</h1>
                    <p className={`${rubik.className} selection:text-[#FFFFFF] selection:bg-[#F53838] text-[#4F5665]`}>Usuários</p>
                </div>
            </div>

            <div className='hidden sm:block w-[1px] bg-[#EEEFF2] h-[124px]' />

            <div className='flex items-center justify-center flex-1'>
                <Image src={Location} alt='' className='mr-4 sm:mr-8' draggable={false} />
                <div>
                    <h1 className={`${rubik.className} selection:text-[#FFFFFF] selection:bg-[#F53838] font-bold text-2xl sm:text-[26px] text-[#0B132A]`}>{location}</h1>
                    <p className={`${rubik.className} selection:text-[#FFFFFF] selection:bg-[#F53838] text-[#4F5665]`}>Localizações</p>
                </div>
            </div>

            <div className='hidden sm:block w-[1px] bg-[#EEEFF2] h-[124px]' />

            <div className='flex items-center justify-center flex-1'>
                <Image src={Server} alt='' className='mr-4 sm:mr-8' draggable={false} />
                <div>
                    <h1 className={`${rubik.className} selection:text-[#FFFFFF] selection:bg-[#F53838] font-bold text-2xl sm:text-[26px] text-[#0B132A]`}>{servers}</h1>
                    <p className={`${rubik.className} selection:text-[#FFFFFF] selection:bg-[#F53838] text-[#4F5665]`}>Servidores</p>
                </div>
            </div>
        </div>

        <div className='mt-12 sm:mt-[124px] flex flex-col lg:flex-row items-center justify-around gap-10 lg:gap-0'>
            <div className='w-full lg:w-auto flex justify-center'>
                <Image src={HeroImage2} alt='' className='max-w-full h-auto' />
            </div>
            <div className='text-center lg:text-left max-w-full lg:max-w-[428px]'>
                <h1 className={`${rubik.className} selection:text-[#FFFFFF] selection:bg-[#F53838] font-medium leading-[1.2] text-3xl sm:text-4xl mb-4 text-[#0B132A]`}>Vários recursos prontos pra você.</h1>
                <p className={`${rubik.className} selection:text-[#FFFFFF] selection:bg-[#F53838] text-base leading-7 mb-6 text-[#4F5665]`}>Explore nossos recursos com facilidade e diversão — cada um com sua função.</p>
                <div className='flex flex-col gap-2 text-left'>
                    {[
                        'Proteção online poderosa.',
                        'Internet sem fronteiras.',
                        'VPN turbinada.',
                        'Sem limites de tempo específicos.'
                    ].map((text, i) => (
                        <div key={i} className='flex items-center'>
                            <Image src={Check} alt='' className='mr-3' />
                            <p className={`${rubik.className} selection:text-[#FFFFFF] selection:bg-[#F53838] text-[14px] text-[#4F5665]`}>{text}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </div>
    );
}
