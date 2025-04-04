import React from 'react'
import  Navbar  from '@/components/Navbar';
import Image from 'next/image';
import Brands from './../../components/brands';
import ComputerSettingsPricing from './../../components/computer-setting';
import  Footer  from '@/components/footer';
export default function page() {
  return (
    <>
    <Navbar/>
    <div className=" bg-black   text-white px-4 py-12 md:py-20 ">
<div className="max-w-full    justify-between mx-auto flex flex-col-reverse  md:flex-row items-center gap-8">
  <div className="mx-7.5 text-center md:text-left max-w-xl">
    <h1 className="text-xl md:text-3xl font-bold mb-4">
    Kompyuter sozlamalari
    </h1>
    <p className="text-gray-400 mb-6">
    Bizning tajribali mutaxassislarimiz sizga kompyuteringizning barcha sozlamalarini 
to‘g‘ri va samarali boshqarishga yordam beradi. Sizga kerakli yordam va 
qo‘llab-quvvatlashni taqdim etish uchun shu yerdamiz.
    </p>
    
  </div>

  <div className="flex justify-center mx-7  mt-16 mr-0">
  <Image
      src="/images/setting.svg"
      width={569}
      height={321}
      alt="Picture of the author"
      
      
    />
  </div>
</div>
</div>
<Brands/>
<ComputerSettingsPricing/>
<Footer/>
    </>
  )
}
