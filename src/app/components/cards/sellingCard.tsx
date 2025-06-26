import Image from 'next/image';
import Box from '../../../../public/Images/box.png';
import Check from '../../../../public/Images/check.svg';

type SellingCardProps = {
  planName: string;
  border?: string;
  features?: string[];
  price?: string;
};

export default function SellingCard({ planName, border, features, price }: SellingCardProps) {
  return (
    <div className={border}>
      <Image src={Box} alt='' />
      <h1>{planName}</h1>
      <div>
        <Image src={Check} alt='' />
        <p>{features?.[0]}</p>
      </div>
      <p><strong>{price || 'R$ 49,90'}</strong>/ Mês</p>
      <a href=''>Assinar</a>
    </div>
  );
}
