import Image from 'next/image';
import HeroImage from '../../../../public/Images/heroimage.png';
import User from '../../../../public/Images/user.svg';
import Location from '../../../../public/Images/location.svg';
import Server from '../../../../public/Images/Server.svg';
import HeroImage2 from '../../../../public/Images/heroimage2.png';
import Check from '../../../../public/Images/check-full.svg';

type HeroProps = {
    users: string,
    location: string,
    servers: string
}

export default function Hero({users, location, servers}: HeroProps) {
    return (
    <div>
        <div>
            <div>
                <h1>Vai de boa. Vai de HexaCLOUD.</h1>
                <p>Forneça uma rede segura, estável e versátil com a <strong>HexaCLOUD</strong>. Recursos avançados te esperam.</p>
                <a href=''>Eu Quero</a>
            </div>
            <div>
                <Image src={HeroImage} alt=''></Image>
            </div>
        </div>
        <div>
            <div>
                <Image src={User} alt=''></Image>
                <div>
                    <h1>{users}</h1>
                    <p>Usuários</p>
                </div>
            </div>
            <div>
                <Image src={Location} alt=''></Image>
                <div>
                    <h1>{location}</h1>
                    <p>Localizações</p>
                </div>
            </div>
            <div>
                <Image src={Server} alt=''></Image>
                <div>
                    <h1>{servers}</h1>
                    <p>Servidores</p>
                </div>
            </div>
        </div>
        <div>
            <Image src={HeroImage2} alt=''></Image>
            <div>
                <h1>Vários recursos prontos pra você.</h1>
                <p>Explore nossos recursos com facilidade e diversão — cada um com sua função.</p>
                <div>
                    <div>
                        <Image src={Check} alt=''></Image>
                        <p>Proteção online poderosa.</p>
                    </div>
                    <div>
                        <Image src={Check} alt=''></Image>
                        <p>Internet sem fronteiras.</p>
                    </div>
                    <div>
                        <Image src={Check} alt=''></Image>
                        <p>VPN turbinada.</p>
                    </div>
                    <div>
                        <Image src={Check} alt=''></Image>
                        <p>Sem limites de tempo específicos.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}
