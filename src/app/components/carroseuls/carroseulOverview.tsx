'use client'

import Image from 'next/image'
import Discord from '../../../../public/Images/discord.png'
import Netflix from '../../../../public/Images/netflix.png'
import Reddit from '../../../../public/Images/reddit.png'
import Spotify from '../../../../public/Images/spotify.png'

const logos = [Discord, Netflix, Reddit, Spotify]

export default function Carroseul() {
  return (
    <div className="overflow-hidden w-full bg-white py-4 rounded-[900px] mb-8 lg:mb-12">
      <div className="flex animate-slide gap-8 w-max">
        {[...logos, ...logos].map((logo, i) => (
          <div key={i} className="flex-shrink-0 w-[150px] sm:w-[200px] md:w-[220px] lg:w-[240px] flex justify-center items-center">
            <Image src={logo} alt="" className="h-16 w-auto object-contain" />
          </div>
        ))}
      </div>
    </div>
  )
}
