import Image from 'next/image';
import Logo from '../../../../public/Images/hexacloudlogo.svg';
import Facebook from '../../../../public/Images/Facebook.png';
import Instagram from '../../../../public/Images/Instagram.png';
import { Rubik } from 'next/font/google';

const rubik = Rubik({ subsets: ['latin'], weight: ['400', '500'] });

export default function Footer() {
  return (
    <div className='w-[100%] bg-[#F8F8F8]'>
      <div className={`${rubik.className} flex justify-between gap-40 py-10 pb-[100px] max-w-[1440px] mx-auto px-6 md:px-12 lg:px-48`}>
        <div className='flex flex-col flex-1'>
          <div className='flex items-center mb-4'>
            <Image src={Logo} alt='Logo' />
            <h1 className='ml-3 text-[20px] text-[#0B132A] font-medium'>HexaCLOUD</h1>
          </div>

          <p className='w-[340px] text-[#4F5665] mb-4'>
            <strong>HexaCLOUD</strong> é uma rede virtual privada com recursos exclusivos e alta segurança.
          </p>

          <div className='flex gap-4 mb-4'>
            <a href="#"><Image src={Facebook} alt='Facebook' width={24} height={24} /></a>
            <a href="#"><Image src={Instagram} alt='Instagram' width={24} height={24} /></a>
          </div>

          <p className='text-[#AFB5C0]'>©2020 HexaCLOUD</p>
          <p className='text-[#AFB5C0]'>©2025 Vintra Web</p>
        </div>

        <div className='flex gap-[40px] justify-around'>
          <div className='flex-1'>
            <h1 className='text-[#0B132A] text-lg font-medium mb-2'>Produto</h1>
            <a href="#" className='text-[#4F5665] block mb-1'>Download</a>
            <a href="#" className='text-[#4F5665] block mb-1'>Preço</a>
            <a href="#" className='text-[#4F5665] block mb-1'>Localizações</a>
            <a href="#" className='text-[#4F5665] block mb-1'>Servidores</a>
          </div>

          <div className='flex-1'>
            <h1 className='text-[#0B132A] text-lg font-medium mb-2'>Interaja</h1>
            <a href="#" className='text-[#4F5665] block mb-1'>HexaCLOUD ?</a>
            <a href="#" className='text-[#4F5665] block mb-1'>FAQ</a>
            <a href="#" className='text-[#4F5665] block mb-1'>Tutoriais</a>
            <a href="#" className='text-[#4F5665] block mb-1'>Sobre Nós</a>
            <a href="#" className='text-[#4F5665] block mb-1'>Política de Privacidade</a>
            <a href="#" className='text-[#4F5665] block mb-1'>Termos de Serviço</a>
          </div>

          <div className='flex-1'>
            <h1 className='text-[#0B132A] text-lg font-medium mb-2'>Trabalhe Conosco</h1>
            <a href="#" className='text-[#4F5665] block mb-1'>Afiliado</a>
            <a href="#" className='text-[#4F5665] block mb-1'>Seja Parceiro</a>
          </div>
        </div>
      </div>
    </div>
  );
}
