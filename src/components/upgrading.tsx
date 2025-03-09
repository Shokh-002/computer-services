/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Star, Zap, Cog, ArrowRight, Globe, Box } from "lucide-react";

export default function WhyUpgrade() {
  const [openIndex, setOpenIndex] = useState(null);

  const items = [
    { icon: <Star size={20} />, text: "4 Yildan ortiq tajriba", details: "Bizning jamoamiz turli xil kompyuterlar va noutbuklar bilan ishlashda 6 yil davomida to'plangan katta tajribaga ega mutaxassislardan iborat. Biz 50 000 dan ortiq kompyuterlarni to'pladik, ular foydalanuvchilarga sifat va unumdorlikning yangi darajasiga olib keladi. Biz ular haqida hamma narsani bilamiz. Biz uchun hal qilib bo'lmaydigan muammolar yo'q." },
    { icon: <Zap size={20} />, text: "Halol narxlar va ta’mirlash vaqtlar", details: "Kompyuterni yig'ish narxi taklif qilingan ishlarning murakkabligiga qarab individual ravishda hisoblanadi. Bizning narxlarimiz shaffof, biz keraksiz qo'shimcha xizmatlarni yuklamaymiz va ish narxini oldindan xabardor qilamiz. Kompyuterni yangilash bir necha kun davom etadi. Ish tugashi bilan biz sizga yaxshilangan shaxsiy kompyuterni hamkor transport kompaniyasi yoki kurer orqali darhol jo'natamiz. " },
    { icon: <Cog size={20} />, text: "Sifat hamma narsadan ustin!", details: "Biz doimo xizmatlarimiz yaxshilanishini ta'minlaymiz. Bizning mijozlarimiz logo kompaniyasi har doim har qanday masalaga mas'uliyat bilan yondashishini bilishadi." },
    { icon: <ArrowRight size={20} />, text: "Hayot harakatda", details: "Biz  bir erda to'xtamaymiz. Doimo yangi narsalarni o'rganamiz va ishlaymiz. Biz eng yangi uskunalar va texnologiyalardan foydalanamiz. Qiyin sinovlarga doim tayyormiz." },
    { icon: <Globe size={20} />, text: "Rasmiy ishlab chiqaruvchilar", details: "Yangilash markazining omborida rasmiy ishlab chiqaruvchilarning komponentlari mavjud. Soxta buyumlar yo’q!." },
    { icon: <Box size={20} />, text: "Kafolat", details: "Biz sizning ishonchingizni qadrlaymiz, shuning uchun HYPERPC modernizatsiya markazining har bir mijozi barcha komponentlar uchun 1 yilgacha va barcha turdagi ishlar uchun 3 oygacha kafolat oladi." },
  ];

  const toggleItem = (index:any) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full py-10">
  <div className=" container  mx-auto px-14 flex flex-col md:flex-row gap-8">
    
    {/* Left side - Accordion */}
    <div className="w-full md:w-1/2 space-y-4">
      <h2 className="text-2xl md:text-3xl font-bold mb-4">
        NEGA KOMPYUTERNI KUCHAYTIRISH KERAK?
      </h2>

      {/* Image on mobile (after h2), hidden on desktop */}
      <div className="w-full h-60 md:hidden relative">
        <Image
          src="/images/whyupgr.svg"
          alt="Computer upgrade"
          fill
          className="rounded-xl object-cover"
        />
      </div>

      {items.map((item, index) => (
        <div
          key={index}
          className="bg-[#00205B] text-white rounded-xl p-4"
        >
          <button
            className="flex items-center justify-between w-full"
            onClick={() => toggleItem(index)}
          >
            <div className="flex items-center gap-3">
              {item.icon}
              <span>{item.text}</span>
            </div>
            <motion.span
              initial={{ rotate: 0 }}
              animate={{ rotate: openIndex === index ? 45 : 0 }}
              transition={{ duration: 0.3 }}
              className="text-2xl"
            >
              +
            </motion.span>
          </button>

          <AnimatePresence>
            {openIndex === index && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="mt-3 text-sm text-gray-300"
              >
                {item.details}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>

    {/* Right side - Image for desktop */}
    
{/* {desktop} */}
<motion.div
  initial={{ opacity: 0, scale: 0.95 }}
  whileInView={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.6 }}
  viewport={{ once: true }}
  className=" mt-11 w-full  h-72 md:h-[464px] md:w-1/2 hidden md:block relative"
>
  <Image
    src="/images/whyupgr.svg"
    alt="Computer upgrade"
    fill
    className="rounded-xl object-cover my-2"
  />
</motion.div>

  </div>
</section>

  );
}
