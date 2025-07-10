'use client';

import Image from 'next/image';
import Box from '../../../../public/Images/box.png';
import Check from '../../../../public/Images/check.svg';
import { Rubik } from 'next/font/google';
import { motion } from 'motion/react';
import { easeIn, scaleIn } from '../animations/animations';

const rubik = Rubik({ subsets: ['latin'], weight: ['400', '500'] });

type SellingCardProps = {
  planName: string;
  features: string[];
  price: string;
};

export default function SellingCard({ planName, features, price }: SellingCardProps) {
  const isGratis = price.toLowerCase() === 'grátis';

  return (
    <div className={`${rubik.className} lg:h-auto h-[540px] border-[2px] border-[#DDDDDD] hover:border-[#F53838] duration-500 hover:scale-105 rounded-2xl flex flex-col items-center justify-between lg:p-6 p-4 selection:text-[#FFFFFF] selection:bg-[#F53838]`}>
      <motion.div initial={scaleIn.initial} whileInView={scaleIn.animate} transition={easeIn} viewport={{ once: true, amount: 0.5 }} className='lg:block flex items-center justify-center'>
        <Image src={Box} alt='' draggable={false} className='lg:w-[146px] w-[100%]'/>
      </motion.div>
      <h1 className='text-[#0B132A] text-lg font-medium lg:mt-4 mt-2 selection:text-[#FFFFFF] selection:bg-[#F53838]'>{planName}</h1>

      <div className='flex flex-col lg:gap-2 lg:my-4 gap-1 my-2'>
        {features.map((feature, index) => (
          <div key={index} className='flex items-center selection:text-[#FFFFFF] selection:bg-[#F53838]'>
            <Image src={Check} alt='' className='mr-2 selection:text-[#FFFFFF] selection:bg-[#F53838]' />
            <p className='text-[#4F5665] text-[14px] selection:text-[#FFFFFF] selection:bg-[#F53838]'>{feature}</p>
          </div>
        ))}
      </div>

      <p className='text-[#0B132A] font-medium text-2xl'>
        <strong>{price}</strong> {!isGratis && <span className='text-[#4F5665] font-normal selection:text-[#FFFFFF] selection:bg-[#F53838]'>/ mês</span>}
      </p>

      <a href='' className={`${rubik.className} mt-4 border-[#F53838] border-[1px] bg-[#fff] text-[#F53838] hover:text-[#FFFFFF] hover:bg-[#F53838] hover:scale-110 transition-transform duration-300 ease-in-out font-medium shadow-[0_5px_8px_rgba(245,56,56,0.2)] rounded-4xl px-9 py-2 `}>Assinar</a>
    </div>
  );
}
