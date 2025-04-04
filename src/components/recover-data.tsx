"use client";

import Image from "next/image";
import Link from "next/link";

const DataRecoveryPricing = () => {
  const pricingData = [
    { size: "1 GB", price: "50 000 so'm" },
    { size: "2 GB", price: "100 000 so'm" },
    { size: "3 GB", price: "150 000 so'm" },
    { size: "4 GB", price: "300 000 so'm" },
  ];

  return (
    <div className="container mx-auto px-4 mt-8">
      {/* Breadcrumb */}
      <div className="text-sm text-blue-500">
        <Link href="/" className="hover:underline">Asosiy</Link> &gt; <span className="text-gray-500">Ma’lumotlarni qayta tiklash</span>
      </div>

      <h2 className="text-2xl font-bold mt-4">Ma’lumotlarni tiklash</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        {/* Pricing Table */}
        <div>
          <div className="overflow-hidden rounded-lg shadow-lg border border-gray-300">
            <table className="w-full border-collapse bg-white">
              <thead>
                <tr className="bg-blue-900 text-white">
                  <th className="py-3 px-4 text-left rounded-tl-lg border-r border-gray-400">Ma’lumot hajmi (GB)</th>
                  <th className="py-3 px-4 text-left rounded-tr-lg">Narx</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-300">
                {pricingData.map((item, index) => (
                  <tr key={index} className="hover:bg-gray-100">
                    <td className="py-1 px-4 border-r border-gray-300">{item.size}</td>
                    <td className="py-1 px-4">{item.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="mt-4 text-gray-600">
            Xotiradagi o‘chib ketgan ma’lumotlarni tiklash bo‘yicha xizmat ko‘rsatamiz. 
            Tez, ishonchli va samarali yechimlar bilan yordam beramiz!
          </p>
        </div>

        {/* Ad Placeholder */}
        <div className="flex items-center justify-center bg-gray-200 rounded-lg  h-48 md:h-full mb-2">
          <div className="text-gray-500 text-center">
            <i className="fas fa-ad text-xl"></i>
            <p className="mt-2">Reklama uchun</p>
          </div>
        </div>
         {/* <div className="flex justify-center items-center">
          <Image
            src="/images/windows.jpg" // Replace with your actual image path
            alt="Reklama uchun"
            width={500}
            height={200}
            className="md:h-full  md:mb-0 rounded-lg shadow-lg object-cover"
          />
        </div> */}
      </div>
    </div>
  );
};

export default DataRecoveryPricing;
