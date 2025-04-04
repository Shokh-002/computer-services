/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import  Navbar  from '@/components/Navbar';
import Image from 'next/image';
import Brands from './../../components/brands';
import AntivirusInstallation from '@/components/antivirus';
import Footer from '@/components/footer';
export default function page() {
  return (
    <>
    <Navbar/>
    <div className=" bg-black   text-white px-4 py-12 md:py-20 ">
<div className="max-w-full    justify-between mx-auto flex flex-col-reverse  md:flex-row items-center gap-8">
  <div className="mx-7.5 text-center md:text-left max-w-xl">
    <h1 className="text-xl md:text-3xl font-bold mb-4">
    Antivirus o’rnatish
    </h1>
    <p className="text-gray-400 mb-6">
    Kompyuteringizni xavfsiz saqlashni xohlaysizmi? Viruslar, zararli dasturlar va xakerlardan himoyalanish uchun ishonchli antivirus dasturlarini o'rnatish xizmati bilan sizning kompyuteringizni himoya qilamiz.
    </p>
    
  </div>

  <div className="flex  mx-7   mt-16 mr-0">
  <Image
      src="/images/kaspersky.svg"
      width={569}
      height={221}
      alt="Picture of the author"
className=' -mr-16 z-99'
      
    />
    <Image
      src="/images/eset.svg"
      width={569}
      height={221}
      alt="Picture of the author"
      className='z-99'
      
    />
  </div>
</div>
</div>
<Brands/>
<AntivirusInstallation/>
<Footer/>
    </>
  )
}
