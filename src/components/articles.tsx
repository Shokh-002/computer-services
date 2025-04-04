'use client';

import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
const articles = [
    {
        title: "YANGILIKLAR",
        description: "Kompaniya hayotidagi muhim voqealar",
        image: "/images/news.svg",
        date: "",
        tag: "",
      },
      {
        title: "RAM: yangisini almashtirish va o‘rnatish",
        description: "",
        image: "/images/ram.svg",
        date: "2024-yil 12 May",
        tag: "Xizmat",
      },
      {
        title: "HDD: qattiq diskni o‘rnatish, almashtirish va ulash",
        description: "Qattiq diskni o‘rnatish va almashtirish haqida hamma narsa: ikkinchi drayverni ulash,to`g`ri o`rnatish, HDDni qanday olish kerak...",
        image: "/images/hdd.svg",
        date: "2024-yil 12 May",
        tag: "Xizmat",
      },
      {
        title: "Onaplotani - almashtirish va o‘rnatish",
        description: "Anakartni o'rnatish va almashtirish haqida hamma narsa: almashtirish, anakartni to'g'ri o'rnatish",
        image: "/images/motherboard.svg",
        date: "2024-yil 12 May",
        tag: "Xizmat",
      },
      {
        title: "Termopastani almashtirish va qo‘llash",
        description: "Qanday qilib to'g'ri qo'llash va almashtirish kerak, termal pastani qanchalik tez-tez o'zgartirish kerak, termal prokladkalarnialmashtirish, qo'llash ...",
        image: "/images/thermal-paste.svg",
        date: "2024-yil 12 May",
        tag: "Xizmat",
      },
      {
        title: "Protsessorni o‘rnatish va almashtirish",
        description: "2024-yil 12 May",
        image: "/images/processor.svg",
        date: "2024-yil 12 May",
        tag: "Xizmat",
      },
      {
        title: "BIZ HAQIMIZDA OAV",
        description: "Matbuotda biz haqimizda nima yozishadi",
        image: "/images/about.svg",
        date: "",
        tag: "",
      },
      {
        title: "SSD: diskni o‘rnatish, almashtirish va ulash",
        description: "2024-yil 12 May",
        image: "/images/ssd.svg",
        date: "2024-yil 12 May",
        tag: "Xizmat",
      },
];
const PAGE_SIZE = 3;

export default function ArticlesPage() {
  const { scrollY } = useScroll();
  const parallaxY = useTransform(scrollY, [0, 400], [0, 100]);

  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);

  const loadMore = () => {
    setVisibleCount((prev) => prev + PAGE_SIZE);
  };

  return (
    <section className="container  py-12">
    <div className=' mx-14 md:mx-2'>
    <h1 className="tex-sm sm:text-3xl mx-14  my-auto ">MAQOLALAR</h1>
      {visibleCount < articles.length && (
        <div className=" justify-end flex w-full -px-24 -mx-25  md:mx-2">
                
                <Button variant="outline" className='  md:mr-16' onClick={loadMore}>Barcha maqolalarni ko`rish</Button>
        </div>
      )}
      </div>
      <motion.div
        style={{ y: parallaxY }}
        className="mx-13 w-fit md:mx-16 -my-16 grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
      >
        {articles.slice(0, visibleCount).map((article, idx) => (
          <motion.div
            key={idx}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: 'spring', stiffness: 300 }}
            className={` ${
                idx === 7 ? "md:col-span-2 w-full" :idx==3?"w-full": ""
              }`}
  
>
            <Card key={idx} className={`${idx==0?"flex rounded-2xl h-full bg-[#06235B] overflow-hidden shadow-md p-4": "rounded-2xl h-full bg-[#06235B] overflow-hidden shadow-md p-4"}`}>
              <Image
                src={article.image}
                alt={article.title}
                width={400}
                height={250}
                className="w-full h-48 rounded-xl object-cover "
              />
{article.tag&&(<span className="text-white text-xs w-1/5 text-center h-fit bg-transparent  px-2 py-1 border rounded-full">
                  {article.tag}
                </span>)}
              <CardContent className="p-4 -mx-2 bg-transparent text-primary-foreground">
                <h3 className="text-lg font-semibold">{article.title}</h3>
                {article.description && <p className="text-sm mt-2">{article.description}</p>}
                <p className="text-xs mt-4 opacity-70">{article.date}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>

      
    </section>
  );
}