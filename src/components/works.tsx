import { Card, CardHeader, CardContent } from "@/components/ui/card";
import Image from 'next/image'
const services = [
  {
    title: "Kompyuterni kuchaytirish",
    description: "Sizning shaxsiy kompyuteringiz vazifalari uchun eng maqbul komponentlarni tanlaymiz",
    image: "/images/boost-pc.svg",
    points: [
      "Video kartani yangilash",
      "Biz yangi protsessor va anakartni tanlaymiz",
      "RAM miqdorini oshirish",
      "Kompyuteringizni sovutish tizimini yaxshilang"
    ]
  },
  {
    title: "Changlardan tozalash",
    description: "\"Sog'lom\" kompyuter - o'yinlarda, ishda va jodda muvaffaqiyat kaliti",
    image: "/images/cleaning.svg",
    points: [
      "Biz kompressor bilan tizimni professional tozalashni amalga oshiramiz",
      "Termal interfeysni almashtiring",
      "Biz maxsus suvni sovutishga xizmat qilamiz",
      "Operatsion tizimni optimallashtirish va drayverlarni yangilash"
    ]
  },
  {
    title: "Muammolarni tuzatish",
    description: "Tajribali xodimlar kompyuterni to'liq diagnostika qiladi va muammoni hal qiladi",
    image: "/images/fixing.svg",
    points: [
      "Biz kompyuteringizning to'liq diagnostikasini o'tkazamiz",
      "Biz noto'g'ri qismlarni almashtiramiz"
    ]
  },
  {
    title: "Dizaynni takomillashtirish",
    description: "Biz sizning barcha qiziqarli shaxsiy kompyuter dizayn g'oyalaringizni amalga oshiramiz",
    image: "/images/design.svg",
    points: [
      "Sizning dizayningiz bo'yicha vinilni qo'llaymiz",
      "Biz maxsus ranglardagi avtomobilni bo'yashdan foydalanamiz",
      "Biz professional aerobrushing qilamiz",
      "Maxsus sovutish tizimini o'rnatish maxsus sovutish tizimini o'rnatish"
    ]
  }
];

export default function Services() {
  return (
    <div className="container w-full py-10">
  <h2 className="mb-8 text-3xl font-bold text-center text-[#00205B]">
    BIZ BOSHQALARGA QARAGANDA YAXSHIROQ ISH QILA OLAMIZ
  </h2>
  <div className="grid gap-6 w-full px-4 md:px-12 md:grid-cols-2">
    {services.map((service, index) => (
      <Card
        key={index}
        className="group min-h-96 w-full rounded-2xl flex flex-col md:flex-row bg-[#00205B] hover:bg-[#003080] transition-all duration-300 shadow-md hover:shadow-lg"
      >
        <CardHeader className="flex justify-center items-center p-4">
          <Image
            src={service.image}
            alt={service.title}
            width={380}
            height={240}
            className="object-cover md:mb-11 rounded-xl"
          />
        </CardHeader>
        <CardContent className="text-white w-full flex flex-col p-6">
          <h2 className="text-2xl font-semibold mb-3 group-hover:text-yellow-300 transition-colors">
            {service.title}
          </h2>
          <p className="mb-4 text-sm leading-relaxed text-gray-300">
            {service.description}
          </p>
          <ul className="list-disc pl-5 space-y-2 marker:text-yellow-300">
            {service.points.map((point, idx) => (
              <li key={idx}>{point}</li>
            ))}
          </ul>
        </CardContent>
      </Card>
    ))}
  </div>
</div>

  );
}
