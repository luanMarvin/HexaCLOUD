import Image from "next/image";
import { Rubik } from 'next/font/google'

const rubik = Rubik({ subsets: ['latin'], weight: ['400', '600'] })

export default function Header() {
    return(
        <header className="mt-8 lg:mt-10">
            <Image src="/Images/hexacloudlogo.svg" className="mr-2" alt="" width={32} height={36} />
            <h1 className={`${rubik.className} font-semibold text-xl`}>HexaCLOUD</h1>
        </header>
    )
}