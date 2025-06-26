import Image from 'next/image';
import Carroseul from '../carroseuls/carroseulOverview';
import Global from '../../../../public/Images/global.png';

export default function Overview() {
    return(
    <div>
        <h1>Rede global massiva de VPN rápida</h1>
        <p>Veja a <strong>HexaCLOUD</strong> em todo lugar para facilitar quando você mudar de local.</p>
        <Image src={Global} alt=''></Image>
        <Carroseul></Carroseul>
    </div>
    );
}