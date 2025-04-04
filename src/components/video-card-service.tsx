"use client";

import Image from "next/image";
import Link from "next/link";

const GPURepairPricing = () => {
  const pricingData = [
    { service: "Diagnostika qilish", price: "50 000 so'm" },
    { service: "Ta’mirlash va almashtirish", price: "100 000 so'm" },
    { service: "Sovutish tizimini tozalash va yangilash", price: "150 000 so'm" },
    { service: "Drayverlarini o‘rnatish va yangilash", price: "300 000 so'm" },
    { service: "Termal pasta almashtirish", price: "50 000 so'm" },
  ];

  return (
    <div className="container mx-auto px-4 mt-8">
      {/* Breadcrumb */}
      <div className="text-sm text-blue-500">
        <Link href="/" className="hover:underline">Asosiy</Link> &gt; <span className="text-gray-500">Grafik kartani tamirlash</span>
      </div>

      <h2 className="text-2xl font-bold mt-4">Grafik karta tamirlash</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        {/* Pricing Table */}
        <div>
          <div className="overflow-hidden rounded-lg shadow-lg border border-gray-300">
            <table className="w-full border-collapse bg-white">
              <thead>
                <tr className="bg-blue-900 text-white">
                  <th className="py-3 px-4 text-left rounded-tl-lg border-r border-gray-400">Grafik karta</th>
                  <th className="py-3 px-4 text-left rounded-tr-lg">Narx</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-300">
                {pricingData.map((item, index) => (
                  <tr key={index} className="hover:bg-gray-100">
                    <td className="py-1 px-4 border-r border-gray-300">{item.service}</td>
                    <td className="py-1 px-4">{item.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="mt-4 text-gray-600">
            Agar sizning kompyuteringiz tez-tez qiziydigan bo‘lsa yoki sovutish tizimi yaxshi ishlamayotgan bo‘lsa, 
            biz bilan bog‘laning va termo pastani yangilash xizmatimizdan foydalaning.
          </p>
        </div>

        {/* Ad Image */}
        <div className="flex justify-center ">
          <Image
            src="/images/video-card.svg" // Replace with your actual image path
            alt="Reklama uchun"
            width={400}
            height={200}
            className="rounded-lg shadow-lg object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default GPURepairPricing;
