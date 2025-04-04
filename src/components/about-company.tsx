'use client';

import { Card, CardContent } from "@/components/ui/card";
import { CarouselDemo } from './carousel-about';



export default function AboutCompany() {
  return (
    <section className="p-6 md:p-12 bg-gray-100">
      {/* Company Logo Section */}
      <div className="flex flex-col md:flex-row gap-5 w-full items-center text-center mb-12 justify-around">
  {/* Left Section - Text Content */}
  <div className="w-full md:w-1/2 flex flex-col items-start text-start">
    <h2 className="p-4 -mx-5 text-xl md:text-2xl font-semibold">Kompaniya Logo</h2>
    <p className="text-gray-600 text-sm md:text-base mt-2 leading-relaxed">
      Logo 2009 yilda tashkil etilgan. Biz NVIDIA, Intel, Microsoft kabi taniqli
      texnologiya gigantlarining rasmiy hamkorimiz. Shuningdek, Wargaming,
      Ubisoft, Electronic Arts, Bethesda va Mail.Games kabi mashhur o‘yin
      kompaniyalari bilan bir qancha muvaffaqiyatli qo‘shma loyihalarni amalga
      oshirishga muvaffaq bo‘ldik.
    </p>
  </div>

  {/* Right Section - Carousel */}
  <div className="">
    <CarouselDemo />
  </div>
</div>


      {/* Founder Section */}
      <Card className="max-w-5xl mx-auto shadow-md flex-col md:flex-row p-6">
        <div className=" mx-auto w-50 h-50 bg-gray-400 rounded-xl"></div>
        <CardContent className="p-0">
          <h2 className="text-lg font-semibold">Assalomu aleykum, men – Olloyarov Azizbek, kompaniya asoschisi</h2>
          <ul className="text-gray-600 text-sm md:text-base list-disc mt-3 pl-5">
            <li>Men ishning barcha bosqichlarini bosib o‘tib: o‘zim mijozlarga kompyuterlarni sotdim, yig‘dim va yetkazib berdim.</li>
            <br />
            <li>15 yillik ishimiz davomida biz 1-sonli kompaniyani qurdik O‘zbekistondagi premium kompyuterlar ishlab chiqaruvchilari.</li>
            <br />
            <li>Shu vaqt ichida biz hamfikrlardan iborat kuchli jamoani to‘pladik.</li>
          </ul>
        </CardContent>
      </Card>

      {/* <Separator className="my-12" /> */}
      <div suppressHydrationWarning className="my-16 relative w-full flex items-center">
  <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-gray-600 to-transparent"></div>
</div>


      {/* Mission Section */}
      <div className="text-center max-w-3xl mx-auto">
        <h2 className="text-lg font-semibold">Bizning vazifamiz</h2>
        <p className="text-gray-600 text-sm md:text-base mt-2">
          Geymerlarga beriladigan eng yaxshi kompyuterlarni yarating
          va ijodiy mutaxassislar undan foydalanishni yoqtiradilar.
        </p>
        <p className="text-gray-600 text-sm md:text-base mt-2">
          Logo yuqori unumdorlik, mukammal sifat va shaxsiy xizmat.
        </p>
      </div>

      {/* <Separator className="my-12" /> */}
      <div suppressHydrationWarning className="my-16 relative w-full flex items-center">
  <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-gray-600 to-transparent"></div>
</div>

      {/* Values Section */}
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-lg font-semibold">Bizning qadriyatlarimiz</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
          {[...Array(8)].map((_, i) => (
            <div key={i} className="bg-gray-300 h-24 rounded-md"></div>
          ))}
        </div>
      </div>
    </section>
  );
}
