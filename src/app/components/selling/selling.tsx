import SellingCard from "../cards/sellingCard";
import { Rubik } from 'next/font/google';

const rubik = Rubik({ subsets: ['latin'], weight: ['400','500'] })

export default function Selling() {
    return (
    <div className="flex flex-col justify-center items-center">
        <h1 className={`${rubik.className} font-medium text-4xl text-[#0B132A] mb-6 mt-[140px]`}>Escolha seu plano</h1>
        <p className={`${rubik.className} text-[#4F5665]`}>Vamos escolher o plano ideal para você e explorá-lo com alegria e leveza.</p>
        <div className="flex mt-18 mb-[200px]">
            <SellingCard planName="Plano Gratuito" features={['Largura de banda ilimitada', 'Conexão criptografada', 'Sem registros de tráfego', 'Funciona em todos os dispositivos']} price='Grátis'></SellingCard>
            <SellingCard planName="Plano Padrão" features={['Largura de banda ilimitada', 'Conexão criptografada', 'Registros de tráfego', 'Funciona em todos os dispositivos', 'Conecte-se de qualquer lugar']} price='29,90'></SellingCard>
            <SellingCard planName="Plano Premium" features={['Largura de banda ilimitada', 'Conexão criptografada', 'Registros de tráfego', 'Funciona em todos os dispositivos', 'Conecte-se de qualquer lugar', 'Acesse novos recursos']} price='49,90'></SellingCard>
        </div>
    </div>
    );
}
