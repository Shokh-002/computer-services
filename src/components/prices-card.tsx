import { Card, CardContent } from "@/components/ui/card";
import Image from 'next/image'
import Link from "next/link";
const services = [
  {
    title: "Windows o'rnatish",
    price: "56 000 so'm dan",
    image: "/images/windows.png",
  },
  {
    title: "Hotiradagi ochib ketgan ma'lumotlarni tiklash",
    price: "56 000 so'm dan",
    image: "/images/hdd.png",
  },
  {
    title: "Kompyuter sozlamalari",
    price: "56 000 so'm dan",
    image: "/images/pc.png",
  },
  {
    title: "Termopastani yangilash",
    price: "56 000 so'm dan",
    image: "/images/fan.png",
  },
  {
    title: "Grafik kartani ta'mirlash",
    price: "56 000 so'm dan",
    image: "/images/gpu.png",
  },
  {
    title: "Komponentlarni modernizatsiya qilish",
    price: "56 000 so'm dan",
    image: "/images/motherboard.png",
  },
  {
    title: "Antivirus o'rnatish",
    price: "56 000 so'm dan",
    image: "/images/antivirus.png",
  },
  {
    title: "Quvvat manbaini almashtirish",
    price: "56 000 so'm dan",
    image: "/images/psu.png",
  },
];

export default function Services() {
  return (
    <section className="py-10 px-4">
      <h2 className="text-3xl font-bold mb-2 mx-7">
        HAR QANDAY MUOMMANI HAL QILAMIZ
      </h2>
      <p className="mx-7 text-muted-foreground mb-10">
        Telegram o’rnatishdan ona plata qo’yishgacha
      </p>
      <div className="mx-7  grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {services.map((service, index) => (
          <Card key={index} className=" bg-[#00205B]  text-white p-0 rounded-2xl">
            <CardContent className=" flex flex-col p-0 pt-4 pl-4 justify-between w-full h-full rounded-2xl ">
              <div>
                <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
                <p className="text-sm mb-4">{service.price}</p>
              </div>
             <div className=" flex min-h-auto h-40 md:h-46 p-0 pt-4 pl-0  w-full ">
             <Link href="./pages/home" className="mt-24 w-20 text-lime-400  text-sm font-medium flex items-center gap-1">
                Batafsil →
              </Link>
              <Image
                src={service.image}
                alt={service.title}
                width={235}
                height={194}
                className=" ml-13.5  object-fill"
              />
             </div>
            </CardContent>
            
          </Card>
        ))}
      </div>
    </section>
  );
}
