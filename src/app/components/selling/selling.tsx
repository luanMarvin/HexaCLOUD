'use client';

import SellingCard from "../cards/sellingCard";
import { Rubik } from 'next/font/google';
import useEmblaCarousel from 'embla-carousel-react'
import { useEffect } from 'react'

const rubik = Rubik({ subsets: ['latin'], weight: ['400','500'] });

export default function Selling() {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })

    useEffect(() => {
        if (emblaApi) emblaApi.reInit()
    }, [emblaApi])

    return (
    <div className="flex flex-col justify-center items-center">
        <h1 className={`${rubik.className} font-medium text-4xl text-[#0B132A] mb-6 mt-[140px] text-center selection:text-[#FFFFFF] selection:bg-[#F53838]`}>Escolha seu plano</h1>
        <p className={`${rubik.className} text-[#4F5665] text-center lg:text-start selection:text-[#FFFFFF] selection:bg-[#F53838]`}>Vamos escolher o plano ideal para você e explorá-lo com alegria e leveza.</p>
        
        <div className="lg:hidden overflow-hidden w-full my-8" ref={emblaRef}>
            <div className="flex">
                {[ 
                {
                    planName: "Plano Gratuito",
                    features: ['Largura de banda ilimitada', 'Conexão criptografada', 'Sem registros de tráfego', 'Funciona em todos os dispositivos'],
                    price: 'Grátis'
                },
                {
                    planName: "Plano Padrão",
                    features: ['Largura de banda ilimitada', 'Conexão criptografada', 'Registros de tráfego', 'Funciona em todos os dispositivos', 'Conecte-se de qualquer lugar'],
                    price: 'R$ 29,90'
                },
                {
                    planName: "Plano Premium",
                    features: ['Largura de banda ilimitada', 'Conexão criptografada', 'Registros de tráfego', 'Funciona em todos os dispositivos', 'Conecte-se de qualquer lugar', 'Acesse novos recursos'],
                    price: 'R$ 49,90'
                }
                ].map((plan, i) => (
                <div key={i} className="min-w-full px-4">
                    <SellingCard {...plan} />
                </div>
                ))}
            </div>
        </div>
        
        <div className="hidden lg:flex mt-18 mb-[120px] flex-row lg:gap-8">
            <SellingCard planName="Plano Gratuito" features={['Largura de banda ilimitada', 'Conexão criptografada', 'Sem registros de tráfego', 'Funciona em todos os dispositivos']} price='Grátis'></SellingCard>
            <SellingCard planName="Plano Padrão" features={['Largura de banda ilimitada', 'Conexão criptografada', 'Registros de tráfego', 'Funciona em todos os dispositivos', 'Conecte-se de qualquer lugar']} price='R$ 29,90'></SellingCard>
            <SellingCard planName="Plano Premium" features={['Largura de banda ilimitada', 'Conexão criptografada', 'Registros de tráfego', 'Funciona em todos os dispositivos', 'Conecte-se de qualquer lugar', 'Acesse novos recursos']} price='R$ 49,90'></SellingCard>
        </div>
    </div>
    );
}
