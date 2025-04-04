'use client';

import { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, Plus } from "lucide-react";

const services = [
  { name: "Protsessor, operativ xotirani almashtirish texnik xizmat", price: 100000 },
  { name: "Noutbuk ekranini almashtirish", price: 150000 },
  { name: "Tarmoq kartasini almashtirish (dasturiy ta’minot o‘rnatish bilan)", price: 80000 },
  { name: "Kompyuterni texnik tozalash va termal pasta qöyish", price: 50000 },
  { name: "Operation tizimini optimallashtirish", price: 50000 },
  { name: "Operation tizimini qayta tiklash", price: 50000 },
  { name: "Kompyuterlarni viruslardan tozalash", price: 50000 },
  { name: "Tarmoqlarni sozlash (set) tarmoq kabel (1 dona)", price: 75000 },
  { name: "Kompyuterni yig‘ish", price: 100000 },
  { name: "Noutbuklarni diagnostics qilish", price: 50000 },
];

export default function ComputerServices() {
  const [selected, setSelected] = useState<number[]>([]);

  const toggleSelect = (index: number) => {
    setSelected((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  const total = selected.reduce((sum, index) => sum + services[index].price, 0);

  return (
    <div className="max-w-3xl mx-auto p-6 bg-gray-900 text-white rounded-lg">
      <h2 className="text-xl font-bold mb-4">Kompyuterga texnik va dasturiy ta’minot xizmat ko‘rsatish</h2>
      <div className="space-y-2">
        {services.map((service, index) => (
          <Card
            key={index}
            className={`p-4 flex justify-between items-center transition-all ${selected.includes(index) ? 'bg-green-600' : 'bg-gray-800'}`}
          >
            <CardContent className="flex justify-between w-full items-center">
              <span>{service.name}</span>
              <span>{service.price.toLocaleString()} so‘m</span>
              <Button
                size="icon"
                variant="ghost"
                className="text-white"
                onClick={() => toggleSelect(index)}
              >
                {selected.includes(index) ? <Check /> : <Plus />}
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
      <div className="mt-4 text-lg font-semibold">
        Tanlangan xizmatingiz: Jami {total.toLocaleString()} so‘m
      </div>
    </div>
  );
}
