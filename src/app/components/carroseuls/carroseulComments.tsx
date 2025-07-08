import Image from 'next/image';
import { Rubik } from 'next/font/google';
import Avatar from '../../../../public/Images/avatar.png';
import Star from '../../../../public/Images/star.svg';

const rubik = Rubik({ subsets: ['latin'], weight: ['400', '500', '700'] });

type CommentsProps = {
    name: string,
    location: string,
    rating: string,
    text: string
}

export default function Comment({ name, location, rating, text }: CommentsProps) {
    return (
        <div className={`${rubik.className} border border-[#DDDDDD] rounded-2xl px-5 py-4 flex flex-col justify-center max-w-full sm:max-w-[340px]`}>
            <div className='flex items-center gap-4 mb-3'>
                <Image src={Avatar} alt='' width={48} height={48} className='rounded-full' draggable={false}/>
                <div className='flex flex-col items-start'>
                    <h1 className='font-bold text-base text-[#0B132A] selection:text-[#FFFFFF] selection:bg-[#F53838]'>{name}</h1>
                    <p className='text-sm text-[#4F5665] selection:text-[#FFFFFF] selection:bg-[#F53838]'>{location}</p>
                </div>
                <div className='flex items-center ml-auto gap-1'>
                    <p className='text-sm font-medium selection:text-[#FFFFFF] selection:bg-[#F53838]'>{rating}</p>
                    <Image src={Star} alt='' width={16} height={16} />
                </div>
            </div>
            <p className='mt-2 text-sm text-[#0B132A] break-words selection:text-[#FFFFFF] selection:bg-[#F53838]'>{text}</p>
        </div>
    );
}
