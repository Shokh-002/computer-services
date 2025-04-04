/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import Link from "next/link";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

const WindowsPricing = () => {
  

  const pricingData = [
    { version: "Windows 7", price: "50 000 so'm" },
    { version: "Windows 8", price: "50 000 so'm" },
    { version: "Windows 10", price: "50 000 so'm" },
    { version: "Windows 11", price: "50 000 so'm" },
  ];
  const images = [
    "/images/windows.jpg",
    "/image2.png",
    "/image3.png",
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };
  return (
    
    <div className="container mx-auto px-4 mt-8">
      {/* Breadcrumb */}
      <div className="text-sm text-blue-500">
        <Link href="/" className="hover:underline">Asosiy</Link> &gt; <span className="text-gray-500">Windows o‘rnatish</span>
      </div>

      <h2 className="text-2xl font-bold mt-4">Windows o‘rnatish narxlari</h2>

      <div className="grid  h-full grid-cols-1 md:grid-cols-2 gap-6 mt-6 ">
        {/* Pricing Table */}
        <div>
        <div className="overflow-hidden rounded-lg ">
            <table className="w-full  border table-bordered border-collapse bg-white">
              <thead>
                <tr className="bg-blue-900 text-white">
                  <th className="py-3 px-4 text-left rounded-tl-lg">Windows versiyasi</th>
                  <th className="py-3 px-4 text-left rounded-tr-lg">Narx</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-400">
                {pricingData.map((item, index) => (
                  <tr key={index} className=" border-t last:rounded-b-lg hover:bg-gray-100">
                    <td className="py-1 px-4 border-r border-gray-400">{item.version}</td>
                    <td className="py-1 px-4">{item.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>


          <p className="mt-4 text-gray-600">
            Istalgan turdagi Windows operatsion tizimini o‘rnatib beramiz. Tez va sifatli xizmat ko‘rsatish kafolatlanadi!
          </p>
        </div>

        {/* Image Slider */}
        <div className="relative w-full md:w-1/2 md:ml-32 mx-auto">
      {/* Image Animation */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.5 }}
          className="flex justify-center"
        >
          <Image
            src={images[currentIndex]}
            alt="Service Image"
            width={600}
            height={400}
            className="rounded-lg object-cover"
          />
        </motion.div>
      </AnimatePresence>

      {/* Dots Navigation */}
      <div className="md:my-3 -my-8 absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition ${
              currentIndex === index ? "bg-[#282828] scale-110" : "bg-gray-400"
            }`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
      </div>
    </div>
  );
};

export default WindowsPricing;
