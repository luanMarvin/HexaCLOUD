'use client';

import { Rubik } from 'next/font/google';
import { motion } from 'motion/react';
import { easeOut, slideLeft, slideRight, slideUp, slideDown } from '../animations/animations';

const rubik = Rubik({ subsets: ['latin'], weight: ['400', '500'] });

export default function Calling() {
    return(<>
    <div className='lg:hidden flex flex-col items-center h-auto  bg-[#fff] shadow-[0_0_186px_rgba(13,16,37,0.1)] rounded-2xl p-6 gap-10 my-12'>
        <motion.div initial={slideDown.initial} whileInView={slideDown.animate} transition={easeOut} viewport={{ once: true, amount: 0.5 }} className='text-center sm:text-left max-w-full sm:max-w-[372px]'>
            <h1 className={`${rubik.className} selection:text-[#FFFFFF] selection:bg-[#F53838] text-2xl leading-[40px] sm:leading-[45px] font-medium text-[#0B132A] mb-4`}>
                Assine agora e ganhe recursos especiais!
            </h1>
            <p className={`${rubik.className} selection:text-[#FFFFFF] selection:bg-[#F53838] text-base leading-[24px] sm:leading-[30px] text-[#4F5665]`}>
                Assine com a gente e descubra a diversão.
            </p>
        </motion.div>
        <motion.div className='hover:scale-105 transition-transform duration-300 ease-in-out mb-4' initial={slideUp.initial} whileInView={slideUp.animate} transition={easeOut} viewport={{ once: true, amount: 0.5 }}>
            <a href="#" className={`${rubik.className} bg-[#F53838] shadow-[0_14px_16px_rgba(245,56,56,0.35)] rounded-lg px-10 py-4 text-[#fff]`}>
                EU QUERO AGORA
            </a>
        </motion.div>
    </div>

    <div className='hidden lg:flex flex-row justify-around items-center h-auto sm:h-[232px] bg-[#fff] shadow-[0_0_186px_rgba(13,16,37,0.1)] rounded-2xl p-6 px-12 gap-0 my-5'>
        <motion.div initial={slideRight.initial} whileInView={slideRight.animate} transition={easeOut} viewport={{ once: true, amount: 0.5 }} className='text-center sm:text-left max-w-full sm:max-w-[372px]'>
            <h1 className={`${rubik.className} selection:text-[#FFFFFF] selection:bg-[#F53838] text-3xl sm:text-4xl leading-[40px] sm:leading-[45px] font-medium text-[#0B132A] mb-4`}>
                Assine agora e ganhe recursos especiais!
            </h1>
            <p className={`${rubik.className} selection:text-[#FFFFFF] selection:bg-[#F53838] text-base leading-[24px] sm:leading-[30px] text-[#4F5665]`}>
                Assine com a gente e descubra a diversão.
            </p>
        </motion.div>
        <motion.div className='hover:scale-105 transition-transform duration-300 ease-in-out' initial={slideLeft.initial} whileInView={slideLeft.animate} transition={easeOut} viewport={{ once: true, amount: 0.5 }}>
            <a href="#" className={`${rubik.className} bg-[#F53838] shadow-[0_14px_16px_rgba(245,56,56,0.35)] rounded-lg px-10 py-4 text-[#fff]`}>
                EU QUERO AGORA
            </a>
        </motion.div>
    </div>
    </>
    );
}
