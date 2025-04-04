"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function ExpertsSection() {
  const experts = [
    {
      name: "Bednik Aleksey",
      title: "Yangilash va texnik xizmat ko‘rsatish bo‘yicha katta mutaxassis",
    },
    {
      name: "Zalyadnov Stepan",
      title: "Ta’mirlash bo‘yicha mutaxassis",
    },
  ];

  return (
    <div className="py-12 px-6 md:px-16 text-center">
      <h2 className="text-2xl font-semibold mb-8">
        Xizmatimizning sertifikatlangan mutaxassislari
      </h2>

      <div className="flex flex-col md:flex-row items-center justify-center gap-8">
        {experts.map((expert, index) => (
          <Card key={index} className="w-full md:w-1/3 p-6 shadow-md">
            <CardContent className="flex flex-col items-center">
              <div className="w-32 h-32 bg-gray-300 rounded-lg flex items-center justify-center">
                <Image
                  src="/user-placeholder.svg"
                  alt="Expert"
                  width={50}
                  height={50}
                />
              </div>
              <h3 className="mt-4 font-semibold">{expert.name}</h3>
              <p className="text-gray-500 text-sm text-center">{expert.title}</p>
              <Button variant="outline" className="mt-4">
                MASLAHOT OLISH
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
