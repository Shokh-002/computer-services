'use client';

import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';

const contactInfo = {
  title: 'SOTIB OLISH BOYICHA SAVOLLAR',
  description: 'Biz sizni qiziqtirgan barcha savollarga javob beramiz va kompyuter tanlashda yordam beramiz.',
  details: {
    phone: '+998 (90) 200-21-22',
    support: '@support.tme',
    workingHours: 'Du-Sha soat 10:00 dan 18:00 gacha',
    website: 'https://www.birnarsa.uz',
  },
  imageUrl: '/images/gaming.svg', // Replace with actual image path
};

export default function ContactSection() {
  return (
    <section className="container mx-auto px-4 py-10">
      <h2 className="text-2xl font-bold mb-6">KONTAKLAR</h2>
      <div className="grid md:grid-cols-3 gap-6 items-center">
        <Card className="bg-blue-900 text-white md:p-6 rounded-xl md:col-span-2">
          <CardContent className="space-y-4 md:w-[75%]">
            <h3 className="text-lg font-semibold">{contactInfo.title}</h3>
            <p>{contactInfo.description}</p>
            <div className="border-t border-white/50 pt-4 flex flex-col gap-y-4">
              <div className='flex  justify-between   md:w-[75%]'>
              <p className='w-full' ><strong className='text-muted-foreground'>Telefon</strong> <br /> {contactInfo.details.phone}</p>
              <p className='w-full'><strong className=' text-muted-foreground'>Sotib olish boyicha savollar:</strong> <br /> {contactInfo.details.support}</p>
              </div>
              <p><strong className='text-muted-foreground'>Ish tartibi:</strong> <br /> {contactInfo.details.workingHours}</p>
              <p><strong className='text-muted-foreground'>Veb sayt:</strong> <br /> <a href={contactInfo.details.website} className="underline">{contactInfo.details.website}</a></p>
            </div>
          </CardContent>
        </Card>
        <div className="relative w-full h-64 md:h-full rounded-xl overflow-hidden">
          <Image
            src={contactInfo.imageUrl}
            alt="Gaming PC Setup"
            layout="fill"
            objectFit="cover"
            className="rounded-xl"
            
          />
        </div>
      </div>
    </section>
  );
}
