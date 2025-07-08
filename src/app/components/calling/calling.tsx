import { Rubik } from 'next/font/google';

const rubik = Rubik({ subsets: ['latin'], weight: ['400', '500'] });

export default function Calling() {
    return(
    <div className='flex flex-col sm:flex-row items-center sm:justify-around h-auto sm:h-[232px] bg-[#fff] shadow-[0_0_186px_rgba(13,16,37,0.1)] rounded-2xl p-6 sm:px-12 gap-6 sm:gap-0 my-5 lg:my-12'>
        <div className='text-center sm:text-left max-w-full sm:max-w-[372px]'>
            <h1 className={`${rubik.className} text-3xl sm:text-4xl leading-[40px] sm:leading-[45px] font-medium text-[#0B132A] mb-4`}>
                Assine agora e ganhe recursos especiais!
            </h1>
            <p className={`${rubik.className} text-base leading-[24px] sm:leading-[30px] text-[#4F5665]`}>
                Assine com a gente e descubra a diversão.
            </p>
        </div>
        <a href="#" className={`${rubik.className} bg-[#F53838] shadow-[0_14px_16px_rgba(245,56,56,0.35)] rounded-lg px-10 py-4 text-[#fff] hover:scale-105 transition-transform duration-300 ease-in-out`}>
            EU QUERO AGORA
        </a>
    </div>
    );
}
