import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function ServiceBanner() {
  return (
<section className="w-full bg-gradient-to-r from-[#05235B] to-[#000505] py-10">
  <div className="container px-6 md:px-14 flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8">
    
    {/* Left side - Text */}
    <div className="text-white max-w-3xl px-2 md:text-left">
      <h2 className="text-2xl md:text-3xl font-semibold leading-relaxed mb-4">
        Biz bilan bog`langan kuningizda kompyuteringizdagi har qanday nosozlikni barcha ishlar uchun kafolat bilan tuzatamiz
      </h2>
      <p className="text-sm md:text-base">
        Biz murojaatlarni soat 10:00 dan 18:00 ga cha korib chiqamiz
      </p>
    </div>

    {/* Right side - Image */}
    <div className="flex flex-col items-center gap-4">
      <Image
        src="/images/repair.svg"
        alt="Computer repair"
        width={250}
        height={250}
        className="object-contain"
      />
      <Button
        variant="outline"
        className="text-white border-white bg-transparent hover:bg-white hover:text-black transition"
      >
        Ustani chaqirtish
      </Button>
    </div>

  </div>
</section>

  );
}
