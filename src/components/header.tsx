import React from 'react';
import { Button } from './ui/button';
import Image from 'next/image'
const Header = () => {
    return (
        
            <div className=" bg-black text-white px-4 py-12 md:py-20">
<div className="max-w-full justify-between mx-auto flex flex-col-reverse md:flex-row items-center gap-8">
  <div className="mx-7.5 text-center md:text-left max-w-xl">
    <h1 className="text-xl md:text-3xl font-bold mb-4">
      Urganch shahrida xizmat ko‘rsatish, joyida kompyuter tamirlash
    </h1>
    <p className="text-gray-400 mb-6">
      Biz sizning kompyuteringiz yoki noutbukingizni eng qisqa vaqt ichida uyingizda ta`mirlaymiz
    </p>
    <Button variant="outline" className="rounded-full bg-transparent border-gray-600 text-white">
      Ustani chaqirish
    </Button>
  </div>

  <div className="flex justify-center mx-7">
  <Image
      src="/header.png"
      width={569}
      height={321}
      alt="Picture of the author"
    />
  </div>
</div>
</div>
        
    );
}

export default Header;
