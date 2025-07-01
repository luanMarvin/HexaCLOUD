import Carroseul from "../carroseuls/carroseulComments";
import { Rubik } from 'next/font/google';

const rubik = Rubik({ subsets: ['latin'], weight: ['400', '500'] });

export default function Comments() {
  return (
    <div className={`${rubik.className} flex flex-col items-center text-center`}>
      <h1 className='font-medium text-[36px] text-[#0B132A] leading-[50px] w-[448px]'>
        Confiado por milhares de clientes satisfeitos
      </h1>
      <p className='font-normal text-[16px] text-[#4F5665] leading-[30px] w-[556px] mt-4'>
        Estas são histórias dos nossos clientes que nos escolheram com satisfação ao usar este recurso incrível.
      </p>
      <Carroseul />
    </div>
  );
}
