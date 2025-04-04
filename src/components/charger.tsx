"use client";

import Image from "next/image";
import Link from "next/link";

const PowerSupplyServices = () => {
  const pricingData = [
    { service: "Quvvat manbai diagnostikasi", price: "50 000 so'm" },
    { service: "(PSU) tanlash va almashtirish", price: "100 000 so'm" },
    { service: "Eski quvvat manbaini utilizatsiya qilish", price: "150 000 so'm" },
    { service: "Quvvat manbai o‘rnatish va sozlash", price: "300 000 so'm" },
  ];

  return (
    <div className="container mx-auto px-4 mt-8 mb-4"> {/* Adjusted bottom spacing */}
      {/* Breadcrumb */}
      <div className="text-sm text-blue-500">
        <Link href="/" className="hover:underline">Asosiy</Link> &gt; <span className="text-gray-500">Quvvat manbayini almashtirish</span>
      </div>

      <h2 className="text-2xl font-bold mt-4">Quvvat manbayi</h2>

      <div className=" grid grid-cols-1  md:grid-cols-2 gap-6 mt-4">
        {/* Pricing Table */}
        <div>
          <div className="overflow-hidden rounded-lg shadow-md border border-gray-300">
            <table className="w-full border-collapse bg-white">
              <thead>
                <tr className="bg-blue-900 text-white">
                  <th className="py-2 px-4 text-left border-r border-gray-400">Texnik xizmatlar</th>
                  <th className="py-2 px-4 text-left">Narx</th>
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

          <p className="mt-2 text-gray-600 text-sm">
            Kompyuteringiz quvvat manbai muammolarini tez va samarali hal qilish uchun biz bilan bog‘laning! Sifatli va ishonchli xizmatlarimiz bilan kompyuteringizni yana ishonchli va barqaror holatga keltiramiz.
          </p>
        </div>

        {/* Ad Image */}
        <div className=" flex  justify-center">
          <Image
            src="/images/windows.svg" // Replace with actual image path
            alt="Reklama uchun"
            width={400}
            height={200}
            className=" rounded-lg shadow-md object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default PowerSupplyServices;
