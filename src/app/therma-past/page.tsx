/* eslint-disable react/no-unescaped-entities */
import Navbar from '@/components/Navbar'
import React from 'react'
import Image from 'next/image'
import Brands from './../../components/brands';
import ThermalPastePricing from './../../components/therma-past-service';
import  Footer  from '@/components/footer';
export default function page() {
  return (
    <>
    <Navbar/>
    <div className=" bg-black   text-white px-4 py-12 md:py-20 ">
<div className="max-w-full    justify-between mx-auto flex flex-col-reverse  md:flex-row items-center gap-8">
  <div className="mx-7.5 text-center md:text-left max-w-xl">
    <h1 className="text-xl md:text-3xl font-bold mb-4">
    Termopastani yangilash
    </h1>
    <p className="text-gray-400 mb-6">
    Bizning tajribali mutaxassislarimiz sizning kompyuteringiz uchun eng sifatli termo pastani 
tanlaydi va yangilash jarayonini professional tarzda amalga oshiradi. Yangi termo 
pastasi kompyuteringizning samaradorligini oshiradi va uning uzoq muddatli 
ishlashini ta'minlaydi.
    </p>
    
  </div>

  <div className="flex  mx-7   mt-16 mr-0">
  <Image
      src="/images/past1.svg"
      width={569}
      height={221}
      alt="Picture of the author"
className=' -mr-16 z-99'
      
    />
    <Image
      src="/images/past2.svg"
      width={569}
      height={221}
      alt="Picture of the author"
      
      
    />
  </div>
</div>
</div>
<Brands/>
<ThermalPastePricing/>
<Footer/>
    </>
  )
}
