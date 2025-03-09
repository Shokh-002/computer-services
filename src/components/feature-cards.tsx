import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

export default function Features() {
  const features = [
    {
      icon: "/icons/speed.svg",
      title: "Tezlik bilan muammo bormi?",
      description: "Biz eskirgan komponentlarni almashtiramiz va kompyuter quvvatini oshiramiz",
    },
    {
      icon: "/icons/system.svg",
      title: "Tizim bilan bog'liq muammolar bormi?",
      description: "Biz butun kompyuterni to‘liq diagnostikasini o‘tkazamiz va mavjud muammolarni bartaraf qilamiz.",
    },
    {
      icon: "/icons/design.svg",
      title: "Tashqi ko‘rinishidan mamnun emasmisiz?",
      description: "Dizaynini didingizga va rangingizga o‘zgartiramiz. Rassomlik, vinilografiya, aerobrushing, RGB...",
    },
    {
      icon: "/icons/delivery.svg",
      title: "Ofisga borish uchun uzoq vaqt kerakmi?",
      description: "Hech qayerga borishning hojati yo‘q – biz sizning shaxsiy kompyuteringizni olib, uyingizgacha yetkazib beramiz",
    },
  ];

  return (
    <section className="w-full  py-12  pl-7">
      <div className=" container  grid gap-6 md:grid-cols-2 lg:grid-cols-4 px-4">
        {features.map((feature, index) => (
          <Card
            key={index}
            className="bg-[#062259]   mr-12 text-white p-6 rounded-2xl flex flex-col items-center justify-between  text-center"
          >
            <CardContent className="p-0 flex flex-col items-center gap-4">
              <Image
                src={feature.icon}
                alt={feature.title}
                width={202}
                height={117}
                className="object-contain"
              />
              <h3 className="text-lg font-semibold">{feature.title}</h3>
              <p className="text-sm opacity-80">{feature.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
