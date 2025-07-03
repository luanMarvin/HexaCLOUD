import { Rubik } from 'next/font/google';

const rubik = Rubik({ subsets: ['latin'], weight: ['400', '500'] });

export default function Calling() {
    return(
    <div className='flex items-center h-[232px] bg-[#fff] shadow-[0_0_186px_rgba(13,16,37,0.06)] rounded-2xl justify-around'>
        <div>
            <h1 className={`${rubik.className} text-[#0B132A] text-4xl leading-[45px] font-medium w-[372px] mb-4`}>Assine agora e ganhe recursos especiais!</h1>
            <p className={`${rubik.className} text-[#4F5665] leading-[30px]`}>Assine com a gente e descubra a diversão.</p>
        </div>
        <a href="#" className={`${rubik.className} bg-[#F53838] shadow-[0_14px_16px_rgba(245,56,56,0.35)] rounded-lg px-21 py-4 text-[#fff]`}>EU QUERO AGORA</a>
    </div>
    );
}