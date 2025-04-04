import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Check, Search, Trash2, RefreshCcw, Settings2 } from "lucide-react";
import { Separator } from "./ui/separator";
import { DialogDemo } from './dialog-form-service';

const services = {
  standart: [
    {
      title: "LOGO SERVIS PLUS",
      description: "Kengaytirilgan va eng maqbul xizmatlar to'plami",
      features: [
        { icon: <Search />, text: "Diagnostika" },
        { icon: <Trash2 />, text: "Changdan tozalash" },
        { icon: <RefreshCcw />, text: "Terma pastani yangilash" },
        { icon: <Settings2 />, text: "Tamirlash hisobot" },
      ],
    },
    {
      title: "LOGO SERVIS PREMIUM",
      description: "Murakkab muammolarni hal qilish uchun xizmatlar to'liq to'plami",
      features: [
        { icon: <Search />, text: "Diagnostika" },
        { icon: <Trash2 />, text: "Changdan tozalash" },
        { icon: <RefreshCcw />, text: "Terma pastani yangilash" },
        { icon: <Settings2 />, text: "Windows qayta o'rnatish" },
        { icon: <Check />, text: "Drayverlarni yangilash" },
        { icon: <Check />, text: "BIOS yangilash va sozlash" },
      ],
    },
  ],
  maxsus: [
    {
      title: "LOGO SERVIS CUSTOM PLUS",
      description: "Kengaytirilgan va eng maqbul xizmatlar to'plami",
      features: [
        { icon: <Search />, text: "Diagnostika" },
        { icon: <Trash2 />, text: "Changdan tozalash" },
        { icon: <RefreshCcw />, text: "Terma pastani yangilash" },
        { icon: <Check />, text: "Sovutgichni almashtirish" },
        { icon: <Check />, text: "Termal prokladkalrni almashtirish" },
        { icon: <Settings2 />, text: "Tamirlash hisobot" },
      ],
    },
    {
      title: "LOGO SERVIS MAXSUS PREMIUM",
      description: "Murakkab muammolarni hal qilish uchun xizmatlar to'liq to'plami",
      features: [
        { icon: <Search />, text: "Diagnostika" },
        { icon: <Trash2 />, text: "Changdan tozalash" },
        { icon: <RefreshCcw />, text: "Terma pastani yangilash" },
        { icon: <Check />, text: "Sovutgichni almashtirish" },
        { icon: <Check />, text: "Radiatorni tozalash" },
        { icon: <Check />, text: "GPU/CPU suv bloklarini tozalash" },
        { icon: <Settings2 />, text: "Windows qayta o'rnatish" },
        { icon: <Check />, text: "Drayverlarni yangilash" },
        { icon: <Check />, text: "BIOS yangilash va sozlash" },
      ],
    },
  ],
};

export default function PricingTabs() {
  return (
    <Tabs defaultValue="standart" className=" w-full">
      <TabsList className="flex mx-auto justify-center bg-transparent">
      <TabsTrigger value="standart" className="data-[state=active]:bg-blue-900 data-[state=active]:text-white">STANDART</TabsTrigger>
      <TabsTrigger value="maxsus" className="data-[state=active]:bg-blue-900 data-[state=active]:text-white">MAXSUS</TabsTrigger>
      </TabsList>
      {Object.entries(services).map(([key, items]) => (
        <TabsContent key={key} value={key} className=" md:mx-90 grid grid-cols-1 md:grid-cols-2  mt-6">
          {items.map((service, index) => (
            <Card key={index} className="p-4 w-fit mt-1 bg-blue-900 text-white rounded-xl">
              <CardContent className="flex  h-full justify-between flex-col">
                <h3 className="text-xl font-bold">{service.title}</h3>
                <p className="mt-2 text-sm">{service.description}</p>
                <ul className="mt-4 space-y-2">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2">
                      {feature.icon} {feature.text}
                    </li>
                  ))}
                </ul>
                <div className="mt-auto">
                <Separator className="my-4" />
                    
                    <div className="mt-4 flex items-center gap-2">
                  <Checkbox /> Buyurtmani olib ketish va qaytarish
                </div>
                  <div className="flex justify-between">
                  <div>
                  <p className="font-semibold">Narxi: 100 000 so‘m</p>
                  <p>Ish muddati: 5 kun</p>
                  </div>
                  <DialogDemo  />
                  
                  </div>
                </div>
                
               
                
              </CardContent>
            </Card>
          ))}
        </TabsContent>
      ))}
    </Tabs>
  );
}
