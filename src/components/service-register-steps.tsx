"use client";

import { Card, CardContent } from "@/components/ui/card";

const steps = [
  {
    number: "1",
    text: "Saytda ariza yuboring yoki biz bilan bog'laning. Biz har doim yordam berishdan xursandmiz",
  },
  {
    number: "2",
    text: "Bizning menejerimiz sizga buyurtma berishda yordam beradi va barcha tafsilotlarni siz bilan muvofiqlashtiradi",
  },
  {
    number: "3",
    text: "Shaxsiy kompyuteringizni olib keling yoki LOGO kuryeri orqali yetkazib berishga buyurtma bering",
  },
  {
    number: "4",
    text: "Bizning xizmat ko‘rsatish markazimiz mutaxassislari 24 soat ichida texnik xizmat ko‘rsatishni amalga oshiradilar",
  },
  {
    number: "5",
    text: "Bizning logistimiz kompyuterni yetkazib berish uchun qulay sana va vaqtni aniqlash uchun siz bilan bog'lanadi",
  },
];

export default function ServiceSteps() {
  return (
    <div className="py-12 px-6 md:px-16 text-center">
      <h2 className="text-2xl font-semibold mb-8">
        Texnik xizmat ko‘rsatishni ro‘yxatdan o‘tkazish bosqichlari
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
        {steps.map((step, index) => (
          <Card key={index} className="shadow-md text-center p-4 border-none">
            <CardContent className="flex flex-col items-center">
              <div className="w-10 h-10 flex items-center justify-center border-2 border-red-500 text-red-500 rounded-full text-lg font-semibold">
                {step.number}
              </div>
              <p className="text-gray-700 text-sm mt-3">{step.text}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
