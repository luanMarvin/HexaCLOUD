import Image from "next/image";
import { Rubik } from 'next/font/google'

const rubik = Rubik({ subsets: ['latin'], weight: ['500'] })

export default function Header() {
    return(
        <header className="mt-6 lg:mt-10 flex items-center mb-14 px-6 md:px-12 lg:px-48">
            <Image src="/Images/hexacloudlogo.svg" className="mr-2" alt="" width={32} height={36} draggable={false}/>
            <h1 className={`${rubik.className} selection:text-[#FFFFFF] selection:bg-[#F53838] font-semibold text-xl text-[#0B132A] cursor-pointer`}>HexaCLOUD</h1>
        </header>
    )
}