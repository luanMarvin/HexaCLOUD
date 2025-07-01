import Image from 'next/image';
import Brands from '../../../../public/Images/Sponsored.png'

export default function Carroseul() {
    return(
    <div>
        <Image src={Brands} alt=''></Image>
    </div>
    );
}