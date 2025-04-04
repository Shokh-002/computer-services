'use client';

import { Card, CardContent } from "@/components/ui/card";

const serviceData = {
  title: "KORXONALAR UCHUN KOMPYUTER XIZMAT TA’RIF REJASI 1-YIL UCHUN",
  technicalSupport: {
    title: "TEXNIK VA DASTURIY QO‘LLAB QUVVATLASH XIZMATI",
    headers: ["Xizmatimiz 1-dona", "Bir donasi 1-oy uchun"],
    data: [
      ["5 Kompyuter", "150.00 so‘m", "70.00 so‘m/oy"],
      ["6-10 Kompyuter", "120.00 so‘m", "60.00 so‘m/oy"],
      ["11-20 Kompyuter", "150.00 so‘m", "50.00 so‘m/oy"],
      ["Qo‘shimcha manzil", "150.00 so‘m", "100.00 so‘m/oy"],
      ["Serverga texnik xizmat", "shartli ravishda", "shartli ravishda"],
      ["Serverga dasturiy xizmat", "shartli ravishda", "shartli ravishda"],
    ],
  },
  mainServices: {
    title: "ASOSIY KO‘RSATMALAR",
    data: [
      ["Takliflar va maslahatlar", "ha", "ha"],
      ["Javob vaqti", "10 daqiqa", "1 soat"],
      ["Bizga qo‘ng‘iroqdan so‘ng borish vaqti", "2 soat", "24 soat"],
      ["Navbatdagi texnik yordam", "ha", "ha"],
    ],
  },
  antivirus: {
    title: "ANTIVIRUS XAVFSIZLIK TIZIMINI TA’MINLASH",
    description: "3 oylik abonent to‘lovi amalga oshirilganda litsenziyalangan dasturiy ta’minot \"Kaspersky Antivirus\" hamkorlarimiz uchun 1 yil muddatga (3 dona) kompyuter uchun.",
  },
  providedServices: {
    title: "TAQDIM ETILGAN XIZMATLARIMIZ",
    data: [
      ["Kompyuter tarmoqlarini ulash va sozlash", "ha", "shartli ravishda"],
      ["Printer qurilma siyohlarini to‘ldirish", "shartli ravishda", "shartli ravishda"],
      ["Korxonangizga texnik xizmat", "ha", "ha"],
      ["Server uskunasiga texnik xizmat", "shartli ravishda", "shartli ravishda"],
      ["Masofaviy texnik yordam", "ha", "ha"],
      ["Ma’lumotlar xavfsizligini ta’minlash", "ha", "ha"],
    ],
  },
};

const BusinessComputerPlan = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-gradient-to-r from-[#05235B] to-[#000505] text-white rounded-lg space-y-6">
      <h2 className="text-xl font-bold text-center">{serviceData.title}</h2>
      
      {/* TECHNICAL SUPPORT PLAN */}
      <Card className="bg-[#FFFFFF80]">
        <CardContent className="p-4">
          <div className="mt-2 grid grid-cols-3 gap-4 font-semibold">
          <h3 className="text-lg font-semibold">{serviceData.technicalSupport.title}</h3>
            
            {serviceData.technicalSupport.headers.map((header, index) => (
              <div key={index}>{header}</div>
            ))}
          </div>
          <div className="mt-2 grid grid-cols-3 gap-4">
            {serviceData.technicalSupport.data.map((item, index) => (
              <>
                <div key={index + '-0'}>{item[0]}</div>
                <div key={index + '-1'}>{item[1]}</div>
                <div key={index + '-2'}>{item[2]}</div>
              </>
            ))}
          </div>
        </CardContent>
      </Card>
      
      {/* MAIN SERVICES */}
      <Card className="bg-[#FFFFFF80]">
        <CardContent className="p-4">
          <h3 className="text-lg font-semibold">{serviceData.mainServices.title}</h3>
          <div className="mt-2 grid grid-cols-3 gap-4">
            {serviceData.mainServices.data.map((item, index) => (
              <>
                <div key={index + '-a'}>{item[0]}</div>
                <div key={index + '-b'}>{item[1]}</div>
                <div key={index + '-c'}>{item[2]}</div>
              </>
            ))}
          </div>
        </CardContent>
      </Card>
      
      {/* ANTIVIRUS SECURITY */}
      <Card className="bg-[#FFFFFF80]">
        <CardContent className="p-4">
          <h3 className="text-lg font-semibold">{serviceData.antivirus.title}</h3>
          <p className="mt-2">{serviceData.antivirus.description}</p>
        </CardContent>
      </Card>
      
      {/* PROVIDED SERVICES */}
      <Card className="bg-[#FFFFFF80]">
        <CardContent className="p-4">
          <h3 className="text-lg font-semibold">{serviceData.providedServices.title}</h3>
          <div className="mt-2 grid grid-cols-3 gap-4">
            {serviceData.providedServices.data.map((item, index) => (
              <>
                <div key={index + '-x'}>{item[0]}</div>
                <div key={index + '-y'}>{item[1]}</div>
                <div key={index + '-z'}>{item[2]}</div>
              </>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default BusinessComputerPlan;
