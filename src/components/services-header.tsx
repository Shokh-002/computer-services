"use client";

import Image from "next/image";
import { FaThermometerThreeQuarters, FaArrowDown, FaShieldAlt, FaClock, FaBolt, FaDollarSign } from "react-icons/fa";

export default function ComputerCareSection() {
  return (
    <section className="py-12 px-4 md:px-16">
      <div className="text-center">
        <h3 className="text-gray-500 text-sm md:text-base">Texnik xizmat</h3>
        <h2 className="text-2xl md:text-3xl font-semibold mt-2">Kompyuteringizga g‘amxo‘rlik qilish</h2>
        <p className="text-gray-600 mt-4 text-sm md:text-base max-w-2xl mx-auto">
          Kompyuter, har qanday boshqa mashina kabi, muntazam parvarishlashni talab qiladi.
          Bu butun tizimning barqaror, samarali va uzoq muddatli ishlashining kalitidir.
          Shaxsiy kompyuteringizning holatini e’tiborsiz qoldirmang, chunki bu qaytarib bo‘lmaydigan oqibatlarga olib kelishi mumkin.
        </p>
      </div>

      {/* Content Section */}
      <div className="mt-8 flex flex-col md:flex-row  items-center gap-8">
        {/* Image */}
        <div className="w-full  md:w-1/2 flex justify-center md:-mx-28">
          <Image 
            src="/computer-error.svg" // Change this to the actual path of the image
            alt="Computer Error"
            width={400}
            height={250}
            className="max-w-full h-auto"
          />
        </div>

        {/* Problems List */}
        <div className="w-full md:w-1/2 grid grid-cols-1 md:mx-4 sm:grid-cols-2 gap-y-2  text-gray-700">
          {[
            { text: "Haddan tashqari issiqlik va komponentlarning ishdan chiqishi", icon: <FaThermometerThreeQuarters className="w-full h-full" /> },
            { text: "Kompyuterning ishlashining pasayishi", icon: <FaArrowDown className="w-full h-full" /> },
            { text: "Virusli dasturlar tufayli qimmatli ma’lumotlarni yo‘qotish", icon: <FaShieldAlt className="w-full h-full" /> },
            { text: "Kompyuterning ishlash muddati qisqartiriladi", icon: <FaClock className="w-full h-full" /> },
            { text: "Qisqa tutashuv", icon: <FaBolt className="w-full h-full" /> },
            { text: "Qimmatbaho ta’mirlash", icon: <FaDollarSign className="w-full h-full" /> }
          ].map((item, index) => (
            <div key={index} className="flex items-center gap-3 my-2">
              <div className="text-red-600 text-xl h-[60px] w-[65px] ">{ item.icon}</div>
              <p className="text-sm md:text-base">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
