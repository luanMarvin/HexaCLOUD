import Image from 'next/image';
import Carroseul from '../carroseuls/carroseulOverview';
import Global from '../../../../public/Images/global.png';
import { Rubik } from 'next/font/google';

const rubik = Rubik({ subsets: ['latin'], weight: ['400','500'] })

export default function Overview() {
    return(
    <div className='flex flex-col items-center'>
        <h1 className={`${rubik.className} text-[#0B132A] leading-[50px] text-4xl w-[384px] text-center font-medium mb-4`}>Rede global massiva de VPN rápida</h1>
        <p className={`${rubik.className} text-[#4F5665] leading-[30px] text-base w-[556px] text-center mb-24`}>Veja a <strong>HexaCLOUD</strong> em todo lugar para facilitar quando você mudar de local.</p>
        <Image src={Global} alt=''></Image>
        <Carroseul></Carroseul>
    </div>
    );
}