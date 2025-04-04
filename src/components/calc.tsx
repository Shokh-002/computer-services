/* eslint-disable react/no-unescaped-entities */
"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plus, X } from "lucide-react";
import Link from "next/link";

const services = [
  { name: "Windows aktiv tizimini faollashtirish", price: 30000 },
  { name: "Ma'lumotlarni qayta tiklash (o‘chirilgan yoki shikastlangan axborot vositalar)", price: 200000 },
  { name: "Qattiq diskni tiklash (bad-sector)", price: 100000 },
  { name: "Qurilmalar diagnostikasi (tarmoqlar, video karta, PCI kontroller)", price: 100000 },
  { name: "Kompyuter diagnostikasi", price: 100000 },
  { name: "Zaryadlovchi batareya yoki blokpitaniya qismini almashtirish", price: 100000 },
  { name: "Sovutgich kuler qismini almashtirish", price: 50000 },
  { name: "Video kartani almashtirish, drayverlarni o‘rnatish", price: 50000 },
  { name: "Qattiq disk, SSD, M.2ni almashtirish (dasturiy ta’minotsiz)", price: 50000 },
  { name: "Noutbuk qismlarini almashtirish (dasturiy ta’minotsiz)", price: 100000 },
  { name: "Kompyuter platasini almashtirish (dasturiy ta’minotsiz)", price: 100000 },
];

export default function ServiceTable() {
  const [selectedServices, setSelectedServices] = useState<{ name: string; price: number }[]>([]);

  const toggleService = (service: { name: string; price: number }) => {
    if (selectedServices.some((s) => s.name === service.name)) {
      setSelectedServices(selectedServices.filter((s) => s.name !== service.name));
    } else {
      setSelectedServices([...selectedServices, service]);
    }
  };

  const total = selectedServices.reduce((sum, service) => sum + service.price, 0);

  return (
    <Card className="bg-[#0A1930] text-white max-w-4xl mx-auto p-6 rounded-lg shadow-lg w-full">
      <CardContent>
        <Link href="/" className="text-3xl md:text-4xl font-bold mb-4 text-center md:text-left">Logo</Link>
        <h2 className="text-lg md:text-xl font-semibold text-center md:text-left">
          Kompyuter va noutbuklarni ta'mirlash xizmatlari
        </h2>
        <div className="flex justify-between">
        <p className="text-gray-300 mt-2 text-center md:text-left text-sm md:text-base">Xizmat nomi</p>
        <p className="text-gray-300 mt-2 text-center md:text-left text-sm md:text-base">Narxlar</p>

        </div>
        {/* Responsive Table */}
        <div className="mt-4 border border-white rounded-lg overflow-hidden">
          {services.map((service, index) => {
            const isSelected = selectedServices.some((s) => s.name === service.name);

            return (
              <div
                key={index}
                className={`flex flex-col sm:flex-row justify-between items-center border-t border-white p-3 ${
                  isSelected ? "bg-green-700" : "hover:bg-gray-800 transition"
                }`}
              >
                <span className="text-xs sm:text-sm text-center sm:text-left w-full">{service.name}</span>
                <div className="flex justify-between w-full items-center gap-3 mt-2 sm:mt-0">
                  <span className="text-xs sm:text-sm">{service.price.toLocaleString()} so'm</span>
                  <Button
                    size="icon"
                    className={` rounded-full transition ${
                      isSelected ? "bg-green-500 text-white" : "bg-white text-black hover:bg-gray-200"
                    }`}
                    onClick={() => toggleService(service)}
                  >
                    {isSelected ? <X size={16} /> : <Plus size={16} />}
                  </Button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Total Calculation */}
        <div className="mt-4 flex flex-col sm:flex-row justify-between items-center text-lg font-semibold">
          <span className="text-center sm:text-left">Tanlangan xizmatingiz</span>
          <span className="text-center sm:text-left">Jami: {total.toLocaleString()} so'm</span>
        </div>

        {/* Calculate Button */}
        {/* <Button className="mt-4 w-full bg-green-500 hover:bg-green-600 text-lg py-2">
          Hisoblash
        </Button> */}
      </CardContent>
    </Card>
  );
}
