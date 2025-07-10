'use client';

import Image from 'next/image';
import Carroseul from '../carroseuls/carroseulOverview';
import Global from '../../../../public/Images/global.png';
import { motion } from 'motion/react';
import { easeOut, slideUp } from '../animations/animations';
import { Rubik } from 'next/font/google';

const rubik = Rubik({ subsets: ['latin'], weight: ['400','500'] })

export default function Overview() {
    return(
    <div className='flex flex-col items-center px-4 sm:px-8 lg:px-16'>
        <h1 className={`${rubik.className} text-[#0B132A] leading-[40px] sm:leading-[50px] text-3xl sm:text-4xl w-full max-w-[384px] text-center font-medium mb-4 selection:text-[#FFFFFF] selection:bg-[#F53838]`}>
            Rede global massiva de VPN rápida
        </h1>
        <p className={`${rubik.className} text-[#4F5665] leading-[24px] sm:leading-[30px] text-sm sm:text-base w-full max-w-[556px] text-center mb-16 sm:mb-24 selection:text-[#FFFFFF] selection:bg-[#F53838]`}>
            Veja a <strong>HexaCLOUD</strong> em todo lugar para facilitar quando você mudar de local.
        </p>
        <motion.div initial={slideUp.initial} whileInView={slideUp.animate} transition={easeOut} viewport={{ once: true, amount: 0.5 }} className='mb-16'>
            <Image src={Global} alt='' draggable={false}/>
        </motion.div>
        <div className='w-full max-w-[900px]'>
            <Carroseul />
        </div>
    </div>
    );
}
