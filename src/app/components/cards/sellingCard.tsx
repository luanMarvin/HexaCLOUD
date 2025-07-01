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

      <p className='text-[#0B132A] text-base font-medium'>
        <strong>{price}</strong> {!isGratis && <span>/ Mês</span>}
      </p>

      <a href='' className='mt-4 text-blue-600 font-medium'>Assinar</a>
    </div>
  );
}
