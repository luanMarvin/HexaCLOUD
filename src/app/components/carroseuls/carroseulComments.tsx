import Image from 'next/image';
import Avatar from '../../../../public/Images/avatar.png';
import Star from '../../../../public/Images/star.svg';

export default function Carroseul() {
    return(
    <div>
        <div>
            <Image src={Avatar} alt=''></Image>
            <h1>Name</h1>
            <p>Location</p>
            <div>
                <p>Rating</p>
                <Image src={Star} alt=''></Image>
            </div>
        </div>
        <p>Text</p>
    </div>
    );
}