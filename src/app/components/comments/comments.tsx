import Comment from "../carroseuls/carroseulComments";
import { Rubik } from 'next/font/google';

const rubik = Rubik({ subsets: ['latin'], weight: ['400', '500'] });

export default function Comments() {
  return (
    <div className={`${rubik.className} flex flex-col items-center text-center`}>
      <h1 className='font-medium text-[36px] text-[#0B132A] leading-[50px] w-[448px]'>
        Confiado por milhares de clientes satisfeitos
      </h1>
      <p className='font-normal text-[16px] text-[#4F5665] leading-[30px] w-[556px] mt-4'>
        Estas são histórias dos nossos clientes que nos escolheram com satisfação ao usar este recurso incrível.
      </p>
      <div>
        <Comment name="Lucas Almeida" location="Joinville, SC" rating="5" text="“Jogo bastante online e essa VPN manteve meu ping estável em servidores gringos. Muito boa!”" />
        <Comment name="Juliana Ribeiro" location="Campina Grande, PB" rating="5" text="“Uso pra jogar e também pra ver animes e séries de fora. Nunca travou, qualidade top.”" />
        <Comment name="Henrique Silva" location="São José dos Campos, SP" rating="5" text="“Viajo bastante e essa VPN me ajuda a manter acesso aos meus serviços como se estivesse no Brasil.”" />
        <Comment name="Camila Fernandes" location="Bento Gonçalves, RS" rating="5" text="“Achei excelente! Protege meus dados e ainda consigo assistir streamings de outros países.”" />
        <Comment name="Gabriel Souza" location="Anápolis, GO" rating="5" text="“Gostei da interface simples e da velocidade. Ótima pra quem precisa de privacidade.”" />
      </div>
    </div>
  );
}
