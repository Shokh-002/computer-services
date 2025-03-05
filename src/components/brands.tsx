import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
export default function Brands() {
  const brands = [
    { src: "/brands/samsung.png", alt: "Samsung" },
    { src: "/brands/lenovo.png", alt: "Lenovo" },
    { src: "/brands/intel.png", alt: "Intel" },
    { src: "/brands/dell.png", alt: "Dell" },
    { src: "/brands/dexp.png", alt: "DEXP" },
  ];

  return (
    <section className="w-full py-10 bg-white overflow-hidden">
      <div className="container mx-auto flex flex-wrap justify-around  items-center gap-8 w-full">
        {brands.map((brand, index) => (
          <Card
            key={index}
            className="w-10 md:w-45 h-26 flex items-center justify-center   border-hidden"
          >
            <CardContent className="p-0 border-hidden w-full h-full flex items-center justify-center">
              <div className="relative w-full h-full p-2">
                <Image
                  src={brand.src}
                  alt={brand.alt}
                  fill
                  className="object-contain"
                />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
