/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { useState } from "react";
import { motion } from "framer-motion";

const images = [
  "/logoservice1.svg",
  "/image2.png",
  "/image3.png",
];

export default function LogoServiceSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  return (
    <div className="bg-[#002060] text-white py-10 px-6 md:px-16 flex flex-col md:flex-row items-center justify-center gap-10">
      {/* Image Carousel */}
      <div className="relative w-full md:w-1/2">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.5 }}
        >
          <Image
            src={images[currentIndex]}
            alt="Service Image"
            width={600}
            height={400}
            className="rounded-lg object-cover"
          />
        </motion.div>
        {/* Dots */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {images.map((_, index) => (
            <div
              key={index}
              className={`w-3 h-3 rounded-full cursor-pointer ${
                currentIndex === index ? "bg-white" : "bg-gray-400"
              }`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      </div>

      {/* Content Section */}
      <div className="w-full md:w-1/2 space-y-4">
        <h2 className="text-2xl font-bold">Logo xizmati haqida</h2>
        <p className="text-gray-300 text-sm">
          Biz 13 yildan ortiq vaqt davomida kompyuterlar bilan ishlaymiz va ularning tuzilishini yaxshi bilib oldik.
          Ko‘p yillik tajribaga ega bo‘lgan mutaxassislarimiz sizning shaxsiy kompyuteringizni eng yuqori darajada keng qamrovli diagnostika qiladi:
          ular tozalaydi, komponentlar va dasturlar bilan bog‘liq muammolarni tuzatadi, viruslar va keraksiz fayllarni yo‘q qiladi, maxsus testlarni o‘tkazadi
          va tugagandan so‘ng sizga hisobot varaqasini taqdim etadi.
        </p>

        {/* Stats */}
        <div className="grid  md:grid-cols-3 gap-6">
          <Card className="bg-transparent border border-gray-500 text-center">
            <CardContent className="py-4">
              <h3 className="text-xl font-bold text-white">15850</h3>
              <p className="text-sm text-gray-300">Tamirlash ishlari amalga oshirildi</p>
            </CardContent>
          </Card>
          <Card className="bg-transparent border border-gray-500 text-center">
            <CardContent className="py-4">
              <h3 className="text-xl font-bold text-white">1 Yilgacha</h3>
              <p className="text-sm text-gray-300">Ish kafolat</p>
            </CardContent>
          </Card>
          <Card className="bg-transparent border border-gray-500 text-center">
            <CardContent className="py-4">
              <h3 className="text-xl font-bold text-white">14</h3>
              <p className="text-sm text-gray-300">Mutaxassislar</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
