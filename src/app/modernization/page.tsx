/* eslint-disable react/no-unescaped-entities */
import Navbar from '@/components/Navbar'
import React from 'react'
import Image from 'next/image';
import Brands from './../../components/brands';
import ModernizationPricing from './../../components/modernization';
import  Footer  from '@/components/footer';
export default function page() {
  return (
    <>
    <Navbar/>
    <div className=" bg-black   text-white px-4 py-12 md:py-20 ">
<div className="max-w-full    justify-between mx-auto flex flex-col-reverse  md:flex-row items-center gap-8">
  <div className="mx-7.5 text-center md:text-left max-w-xl">
    <h1 className="text-xl md:text-3xl font-bold mb-4">
    Kompyuterni modernizatsiya qilish
    </h1>
    <p className="text-gray-400 mb-6">
    Kompyuteringizning tezligi va ishlash qobiliyati bilan qoniqmayapsizmi? Yangi 
o'yinlar va dasturlar uchun kompyuteringizning resurslari yetarli emasmi? Biz 
sizga kompyuterni modernizatsiya qilish xizmatlarini taklif etamiz!
    </p>
    
  </div>

  <div className="flex justify-center mx-7  mt-16 mr-0">
  <Image
      src="/images/modern.svg"
      width={569}
      height={321}
      alt="Picture of the author"
      
      
    />
  </div>
</div>
</div>
<Brands/>
<ModernizationPricing/>
<Footer/>
    </>
  )
}
