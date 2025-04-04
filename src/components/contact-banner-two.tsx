'use client';

import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog';
import { Button } from './ui/button';
import { Textarea } from './ui/textarea';
import { RadioGroup, RadioGroupItem } from './ui/radio-group';
import { Input } from './ui/input';
import { Label } from "./ui/label";
import { Checkbox } from "./ui/checkbox";
const contactInfo = {
  title: 'TEXNIK YORDAM',
  description: 'Qurilmangizda muammo bormi? Biz siz uchun eng yaxshi yordam varyantini topamiz.',
  details: {
    phone: '+998 (90) 200-21-22',
    support: '@support.tme',
    workingHours: 'Du-Sha soat 10:00 dan 18:00 gacha',
    website: 'https://www.birnarsa.uz',
  },
  imageUrl: '/images/supporter.svg', // Replace with actual image path
};

export default function ContactSectionTwo() {
  return (
    <section className="container mx-auto px-4">
      <div className="grid md:grid-cols-3 gap-6 items-center">
        
        <div className="relative w-full h-64 md:h-full rounded-xl overflow-hidden">
          <Image
            src={contactInfo.imageUrl}
            alt="Gaming PC Setup"
            layout="fill"
            objectFit="cover"
            className="rounded-xl"
            
          />
        </div>
        <Card className="bg-blue-900 text-white md:p-6 rounded-xl md:col-span-2">
          <CardContent className="space-y-4 md:w-[75%]">
            <h3 className="text-lg font-semibold">{contactInfo.title}</h3>
            <p>{contactInfo.description}</p>
            <div className="border-t border-white/50 pt-4 flex flex-col gap-y-4">
              <div className=' flex justify-between   md:w-[75%]'>
              <p className='w-full' ><strong className='text-muted-foreground'>Telefon</strong> <br /> {contactInfo.details.phone}</p>
              <p className='w-full'><strong className='text-muted-foreground'>Texnik yordam:</strong> <br /> {contactInfo.details.support}</p>
              </div>
              <p><strong className='text-muted-foreground'>Ish tartibi:</strong> <br /> {contactInfo.details.workingHours}</p>
              <Dialog>
      <DialogTrigger asChild>
        <Button variant='secondary' className="w-1/2 rounded-full bg-white mx-5   md:block">
            Xizmatga ro`yxatdan o`ting
          </Button>
      </DialogTrigger>
      <DialogContent className=" sm:max-w-[425px] md:w-full  top-37   my-37 md:mx-135">
<form  action="">
<DialogHeader>
          <DialogTitle>Texnik qo`llab quvvatlash markazi</DialogTitle>
          <DialogDescription>
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          
        <div className="grid w-full mx-1 max-w-sm items-center gap-1.5">
      <Label htmlFor="name">Email *</Label>
      <Input className="w-1/2 md:w-full" type="name" id="name" placeholder="Ismingiz" required />
    </div>

          <div className="grid w-full mx-1 max-w-sm items-center gap-1.5">
            <Label htmlFor="phone" >
              Telefon raqam *
            </Label>
            <Input
            type="phone"
              id="phone"
              placeholder="+998"
              className="col-span-3"
              required
              maxLength={13}
            />
          </div>
          <div className="grid w-full mx-1 max-w-sm items-center gap-1.5">
            <Label htmlFor="phone" >
              Qanday yordam olishni xohlaysiz *
            </Label>
            <RadioGroup defaultValue="comfortable">
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="default" id="r1" required />
        <div><Label htmlFor="r1">Logo biz borib tuzatib beramiz  </Label>
        <span className="text-sm">Faqat Urganch shahar ichida</span>
        </div>
      </div>
       
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="comfortable" id="r2" required  />
        <Label htmlFor="r2">O`zingiz yetkazib berasiz</Label>
      </div>
      
    </RadioGroup>
    <div className="grid w-full gap-1.5 my-2">
      <Label htmlFor="message">Izoh *</Label>
      <Textarea placeholder="Muammoni batafsil yozing" id="message" />
    </div>
    <div className="flex items-center space-x-2">
      <Checkbox id="terms" required />
      <label
        htmlFor="terms"
        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        Men robot emasman
      </label>
      <img
  src="/logos_recaptcha.svg"
  alt="reCAPTCHA"
  className="w-10 h-10"
/>


    </div>
    <h6 className="text-sm">&quot;Ariza yuborish&quot; tugmasini bosish orqali siz shaxsiy ma`lumotlarni qayta ishlashga roziligingizni tasdiqlaysiz</h6>
          </div>
          
        </div>
        
        <DialogFooter>
          <Button className="w-full" type="submit">Yuborish</Button>
        </DialogFooter>
        
</form>

      </DialogContent>
    </Dialog>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
