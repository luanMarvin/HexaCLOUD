import Image from 'next/image';
import Box from '../../../../public/Images/box.png';
import Check from '../../../../public/Images/check.svg';
import { Rubik } from 'next/font/google';

const rubik = Rubik({ subsets: ['latin'], weight: ['400', '500'] });

type SellingCardProps = {
  planName: string;
  features: string[];
  price: string;
};

export default function SellingCard({ planName, features, price }: SellingCardProps) {
  const isGratis = price.toLowerCase() === 'grátis';

  return (
    <div className={`${rubik.className} border-[2px] border-[#DDDDDD] rounded-2xl flex flex-col items-center justify-between p-6`}>
      <Image src={Box} alt='' />
      <h1 className='text-[#0B132A] text-lg font-medium mt-4'>{planName}</h1>

      <div className='flex flex-col gap-2 my-4'>
        {features.map((feature, index) => (
          <div key={index} className='flex items-center'>
            <Image src={Check} alt='' className='mr-2' />
            <p className='text-[#4F5665] text-[14px]'>{feature}</p>
          </div>
        ))}
      </div>

      <p className='text-[#0B132A] font-medium text-2xl'>
        <strong>{price}</strong> {!isGratis && <span className='text-[#4F5665] font-normal'>/ mês</span>}
      </p>

      <a href='' className={`${rubik.className} mt-4 border-[#F53838] border-[1px] bg-[#fff] text-[#F53838] font-medium shadow-[0_5px_8px_rgba(245,56,56,0.2)] rounded-4xl px-9 py-2 `}>Assinar</a>
    </div>
  );
}
