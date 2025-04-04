/* eslint-disable react/no-unescaped-entities */
"use client";

import Image from "next/image";

export default function TechnicalService() {
  const benefits = [
    { icon: "🏠", text: "Kompyuter unumdorligini oshiradi (15% gacha)" },
    { icon: "✅", text: "Komponentlarning buzilishini oldini oladi" },
    { icon: "🖥️", text: "Kompyuteringizni toza ko‘rinishda saqlaydi" },
    { icon: "⏳", text: "Vaqtingizni, pulingizni va asablaringizni tejaydi" },
    { icon: "🔋", text: "Kompyuteringizning ishlash muddatini uzaytiradi" },
    { icon: "🛡️", text: "Zararli dasturlardan va foydalanilmagan dasturlardan halos bo‘ladi" }
  ];

  return (
    <section className="py-12 px-4 md:px-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Left Side - Text */}
        <div>
          <h2 className="text-2xl md:text-3xl font-semibold">
            Nima uchun muhim muntazam texnik xizmat ko‘rsatish muhim?
          </h2>
          <p className="text-gray-600 mt-4 text-sm md:text-base max-w-2xl">
            Logo-da kompyuterga professional texnik xizmat ko‘rsatish muammolarni tez va xavfsiz tarzda hal qilishini ta’minlaydi.
            Muntazam parvarishlash tufayli siz ko‘p yillar davomida sizga xizmat qiladigan "sog‘lom", samarali va estetik qurilmaga ega bo‘lasiz.
          </p>

          {/* Benefits List */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center space-x-3">
                <span className="text-green-500 text-2xl">{benefit.icon}</span>
                <span className="text-gray-700 text-sm md:text-base">{benefit.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side - Image + Temperature Details */}
        <div className="flex flex-col items-center">
          <Image
            src="/hyper.svg" // Update this with your image path
            alt="HyperPC"
            width={500}
            height={400}
            className="w-full md:w-[80%] rounded-lg shadow-lg"
          />

          {/* Temperature Details (Now under the image) */}
          <div className=" md:mx-16 flex md:flex-row text-center text-sm md:text-base text-gray-600 mt-4">
            <div className="flex-col">
            <p className=" w-[90%] md:w-full">Video kartaning harorati texnik xizmat ko‘rsatishdan oldin va keyin</p>
            <p className="text-orange-500 ">82℃ - <span className="text-green-500">69℃</span></p>
            </div>
            
            <div className="flex-col">
            <p>Ta’mirlashdan oldin va keyin CPU harorati</p>
            <p className="text-orange-500">95℃ - <span className="text-green-500">60℃</span></p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
