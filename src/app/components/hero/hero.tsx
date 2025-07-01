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
    <div>
        <div className='flex items-center justify-between'>
            <div>
                <h1 className={`${rubik.className} text-5xl lg:max-w-[550px] font-medium leading-[70px] mb-5 text-[#0B132A]`}>Vai de boa. Vai de HexaCLOUD.</h1>
                <p className={`${rubik.className} mb-12 lg:max-w-[550px] leading-[30px] text-[#4F5665]`}>Forneça uma rede segura, estável e versátil com a <strong>HexaCLOUD</strong>. Recursos avançados te esperam.</p>
                <a className={`${rubik.className} bg-[#F53838] shadow-[0_14px_16px_rgba(245,56,56,0.35)] rounded-lg px-21 py-4 text-[#fff]`} href=''>Eu Quero</a>
            </div>
            <div className='flex justify-center'>
                <Image src={HeroImage} alt='' className='lg:mr-[36%]'></Image>
            </div>
        </div>
        <div className='flex shadow-[0_0_186px_rgba(13,16,37,0.06)] rounded-2xl justify-between items-center mt-[120px] h-[200px] px-[40px] gap-[40px]'>
            <div className='flex items-center justify-center flex-1'>
                <Image src={User} alt='' className='mr-8' />
                <div>
                    <h1 className={`${rubik.className} font-bold text-[26px] text-[#0B132A]`}>{users}</h1>
                    <p className={`${rubik.className} text-[#4F5665]`}>Usuários</p>
                </div>
            </div>

            <div className='w-[1px] bg-[#EEEFF2] h-[124px]' />

            <div className='flex items-center justify-center flex-1'>
                <Image src={Location} alt='' className='mr-8' />
                <div>
                    <h1 className={`${rubik.className} font-bold text-[26px] text-[#0B132A]`}>{location}</h1>
                    <p className={`${rubik.className} text-[#4F5665]`}>Localizações</p>
                </div>
            </div>

            <div className='w-[1px] bg-[#EEEFF2] h-[124px]' />

            <div className='flex items-center justify-center flex-1'>
                <Image src={Server} alt='' className='mr-8' />
                <div>
                    <h1 className={`${rubik.className} font-bold text-[26px] text-[#0B132A]`}>{servers}</h1>
                    <p className={`${rubik.className} text-[#4F5665]`}>Servidores</p>
                </div>
            </div>
        </div>
        <div className='mt-[124px] flex items-center justify-around'>
            <Image src={HeroImage2} alt=''></Image>
            <div>
                <h1 className={`${rubik.className} font-medium leading-[50px] text-4xl w-[382px] text-[#0B132A]`}>Vários recursos prontos pra você.</h1>
                <p className={`${rubik.className} text-base leading-[30px] w-[428px] my-4 text-[#4F5665]`}>Explore nossos recursos com facilidade e diversão — cada um com sua função.</p>
                <div>
                    <div className='flex'>
                        <Image src={Check} alt='' className='mr-3 mb-4'></Image>
                        <p className={`${rubik.className} text-[14px] text-[#4F5665]`}>Proteção online poderosa.</p>
                    </div>
                    <div className='flex'>
                        <Image src={Check} alt='' className='mr-3 mb-4'></Image>
                        <p className={`${rubik.className} text-[14px] text-[#4F5665]`}>Internet sem fronteiras.</p>
                    </div>
                    <div className='flex'>
                        <Image src={Check} alt='' className='mr-3 mb-4'></Image>
                        <p className={`${rubik.className} text-[14px] text-[#4F5665]`}>VPN turbinada.</p>
                    </div>
                    <div className='flex'>
                        <Image src={Check} alt='' className='mr-3 mb-4'></Image>
                        <p className={`${rubik.className} text-[14px] text-[#4F5665]`}>Sem limites de tempo específicos.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}
