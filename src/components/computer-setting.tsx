"use client";

import Image from "next/image";
import Link from "next/link";

const ComputerSettingsPricing = () => {
  const pricingData = [
    { setting: "Tizim yangilanishlari", price: "50 000 so'm" },
    { setting: "Ekran sozlamalari", price: "100 000 so'm" },
    { setting: "Tarmoq sozlamalari", price: "150 000 so'm" },
    { setting: "Xavfsizlik va maxfiylik", price: "300 000 so'm" },
    { setting: "Foydalanuvchi hisobi", price: "50 000 so'm" },
    { setting: "Vaqt va til sozlamalari", price: "100 000 so'm" },
    { setting: "Yordamchi dasturlar", price: "150 000 so'm" },
  ];

  return (
    <div className="container mx-auto px-4 mt-8">
      {/* Breadcrumb */}
      <div className="text-sm text-blue-500">
        <Link href="/" className="hover:underline">Asosiy</Link> &gt; <span className="text-gray-500">Kompyuter sozlamalari</span>
      </div>

      <h2 className="text-2xl font-bold mt-4">Kompyuter sozlamalari</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        {/* Pricing Table */}
        <div>
          <div className="overflow-hidden rounded-lg shadow-lg border border-gray-300">
            <table className="w-full border-collapse bg-white">
              <thead>
                <tr className="bg-blue-900 text-white">
                  <th className="py-3 px-4 text-left rounded-tl-lg border-r border-gray-400">Sozlamalar turi</th>
                  <th className="py-3 px-4 text-left rounded-tr-lg">Narx</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-300">
                {pricingData.map((item, index) => (
                  <tr key={index} className="hover:bg-gray-100">
                    <td className="py-1 px-4 border-r border-gray-300">{item.setting}</td>
                    <td className="py-1 px-4">{item.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="mt-4 text-gray-600">
            Bizning tajribali mutaxassislarimiz sizga kompyuteringizning barcha sozlamalarini
            to‘g‘ri va samarali boshqarishga yordam beradi. Sizga kerakli yordam va
            qo‘llab-quvvatlashni taqdim etish uchun shu yerdamiz.
          </p>
        </div>

        {/* Ad Image */}
        <div className="">
          <Image
            src="/images/hdd.svg" // Replace with your actual image path
            alt="Reklama uchun"
            width={400}
            height={200}
            className="rounded-lg shadow-lg object-cover mx-auto md:h-[76%] md:my-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default ComputerSettingsPricing;
