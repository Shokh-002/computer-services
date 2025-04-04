/* eslint-disable react/no-unescaped-entities */
"use client";

import Image from "next/image";

export default function RepairRisks() {
  const risks = [
    { 
      image: "/risk-images/risk-electric.svg", // Change this to actual image path
      text: "Elektr toki urishi xavfi" 
    },
    { 
      image: "/risk-images/risk-data-loss.svg", 
      text: "Muhim ma’lumotlarni yo‘qotish" 
    },
    { 
      image: "/risk-images/risk-time-waste.svg", 
      text: "Vaqtni behuda sarflash" 
    },
    { 
      image: "/risk-images/risk-costs.svg", 
      text: "Kutilmagan xarajatlar" 
    }
  ];

  return (
    <section className="py-12 px-4 md:px-16">
      <div className="text-center">
        <h2 className="text-2xl md:text-3xl font-semibold">Mustaqil o’zingiz ta'mirlash vaqtida yuzaga keladigan muammolar</h2>
        <p className="text-gray-600 mt-4 text-sm md:text-base max-w-3xl mx-auto">
          Agar siz tegishli tajribaga ega bo‘lmasdan kompyuterni o‘zingiz ta’mirlash va texnik xizmat ko‘rsatishni amalga oshirsangiz, 
          siz ham kompyuterga, ham o‘zingizga zarar yetkazish xavfini tug‘dirasiz. Kompyuter qurilmasini tushunish, 
          malakali yordam holda nosozlikni aniqlash juda qiyin bo‘lishi mumkin. Natijada, mavjud vaziyatni og‘irlashtirish yoki 
          hattoki ishlamay qolish xavfi mavjud.
        </p>
      </div>

      {/* Risk Cards */}
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {risks.map((risk, index) => (
          <div key={index} className="bg-[#06235B] text-white rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105">
            <Image 
              src={risk.image} 
              alt={risk.text} 
              width={300} 
              height={200} 
              className="w-full h-48 object-cover"
            />
            <div className="p-4 text-center text-sm md:text-base">{risk.text}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
