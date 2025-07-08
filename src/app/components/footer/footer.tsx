import Image from 'next/image';
import Logo from '../../../../public/Images/hexacloudlogo.svg';
import Facebook from '../../../../public/Images/Facebook.png';
import Instagram from '../../../../public/Images/Instagram.png';
import { Rubik } from 'next/font/google';

const rubik = Rubik({ subsets: ['latin'], weight: ['400', '500'] });

export default function Footer() {
  return (
    <div className="w-full bg-[#F8F8F8]">
      <div className={`${rubik.className} max-w-[1440px] mx-auto px-6 md:px-12 lg:px-48 py-10 lg:pb-[100px] pb-[20px] flex flex-col lg:flex-row gap-10 lg:gap-40`}>
        <div className="flex-1">
          <div className="flex items-center mb-4">
            <Image src={Logo} alt="Logo" draggable={false} />
            <h1 className="ml-3 text-[20px] text-[#0B132A] font-medium selection:text-[#FFFFFF] selection:bg-[#F53838]">HexaCLOUD</h1>
          </div>

          <p className="max-w-[340px] text-[#4F5665] mb-4 selection:text-[#FFFFFF] selection:bg-[#F53838]">
            <strong>HexaCLOUD</strong> é uma rede virtual privada com recursos exclusivos e alta segurança.
          </p>

          <div className="flex gap-4 mb-4">
            <a href="#"><Image src={Facebook} alt="Facebook" width={24} height={24} draggable={false} /></a>
            <a href="#"><Image src={Instagram} alt="Instagram" width={24} height={24} draggable={false} /></a>
          </div>

          <p className="text-[#AFB5C0] selection:text-[#FFFFFF] selection:bg-[#F53838]">©2020 HexaCLOUD</p>
          <p className="text-[#AFB5C0] selection:text-[#FFFFFF] selection:bg-[#F53838]">©2025 Vintra Web</p>
        </div>

        <div className="flex flex-col sm:flex-row lg:gap-10 gap-6 flex-1">
          <div className="flex-1">
            <h1 className="text-[#0B132A] lg:text-lg font-medium mb-2 selection:text-[#FFFFFF] selection:bg-[#F53838]">Produto</h1>
            <a href="#" className="text-[#4F5665] block mb-1 text-sm lg:text-base selection:text-[#FFFFFF] selection:bg-[#F53838] hover:text-[#F53838]">Download</a>
            <a href="#" className="text-[#4F5665] block mb-1 text-sm lg:text-base selection:text-[#FFFFFF] selection:bg-[#F53838] hover:text-[#F53838]">Preço</a>
            <a href="#" className="text-[#4F5665] block mb-1 text-sm lg:text-base selection:text-[#FFFFFF] selection:bg-[#F53838] hover:text-[#F53838]">Localizações</a>
            <a href="#" className="text-[#4F5665] block mb-1 text-sm lg:text-base selection:text-[#FFFFFF] selection:bg-[#F53838] hover:text-[#F53838]">Servidores</a>
          </div>

          <div className="flex-1">
            <h1 className="text-[#0B132A] lg:text-lg font-medium mb-2 selection:text-[#FFFFFF] selection:bg-[#F53838]">Interaja</h1>
            <a href="#" className="text-[#4F5665] block mb-1 text-sm lg:text-base selection:text-[#FFFFFF] selection:bg-[#F53838] hover:text-[#F53838]">HexaCLOUD ?</a>
            <a href="#" className="text-[#4F5665] block mb-1 text-sm lg:text-base selection:text-[#FFFFFF] selection:bg-[#F53838] hover:text-[#F53838]">FAQ</a>
            <a href="#" className="text-[#4F5665] block mb-1 text-sm lg:text-base selection:text-[#FFFFFF] selection:bg-[#F53838] hover:text-[#F53838]">Tutoriais</a>
            <a href="#" className="text-[#4F5665] block mb-1 text-sm lg:text-base selection:text-[#FFFFFF] selection:bg-[#F53838] hover:text-[#F53838]">Sobre Nós</a>
            <a href="#" className="text-[#4F5665] block mb-1 text-sm lg:text-base selection:text-[#FFFFFF] selection:bg-[#F53838] hover:text-[#F53838]">Política de Privacidade</a>
            <a href="#" className="text-[#4F5665] block mb-1 text-sm lg:text-base selection:text-[#FFFFFF] selection:bg-[#F53838] hover:text-[#F53838]">Termos de Serviço</a>
          </div>

          <div className="flex-1">
            <h1 className="text-[#0B132A] lg:text-lg font-medium mb-2 selection:text-[#FFFFFF] selection:bg-[#F53838]">Trabalhe Conosco</h1>
            <a href="#" className="text-[#4F5665] block mb-1 text-sm lg:text-base selection:text-[#FFFFFF] selection:bg-[#F53838] hover:text-[#F53838]">Afiliado</a>
            <a href="#" className="text-[#4F5665] block mb-1 text-sm lg:text-base selection:text-[#FFFFFF] selection:bg-[#F53838] hover:text-[#F53838]">Seja Parceiro</a>
          </div>
        </div>
      </div>
    </div>
  );
}
