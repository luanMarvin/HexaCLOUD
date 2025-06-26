import Image from 'next/image';
import Logo from '../../../../public/Images/hexacloudlogo.svg';
import Facebook from '../../../../public/Images/facebook.svg';
import Instagram from '../../../../public/Images/instagram.png';

export default function Footer() {
    return(
    <div>
        <div>
            <Image src={Logo} alt=''></Image>
            <p><strong>HexaCLOUD</strong> é uma rede virtual privada com recursos exclusivos e alta segurança.</p>
            <div>
                <a href=""><Image src={Facebook} alt=''></Image></a>
                <a href=""><Image src={Instagram} alt=''></Image></a>
            </div>
            <p>©2020 HexaCLOUD</p>
            <p>©2025 Vintra Web</p>
        </div>
        <div>
            <h1>Produto</h1>
            <p>Download</p>
            <p>Preço</p>
            <p>Localizações</p>
            <p>Servidores</p>
        </div>
        <div>
            <h1>Interaja</h1>
            <p>HexaCLOUD ?</p>
            <p>FAQ</p>
            <p>Tutoriais</p>
            <p>Sobre Nós</p>
            <p>Política de Privacidade</p>
            <p>Termos de Serviço </p>
        </div>
        <div>
            <h1>Trabalhe Conosco</h1>
            <p>Afiliado</p>
            <p>Seja Parceiro</p>
        </div>
    </div>
    );
}