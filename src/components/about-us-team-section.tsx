'use client';

import { Card, CardContent } from "@/components/ui/card";

export default function TeamSection() {
  return (
    <section className="flex  min-h-screen bg-gray-200 p-4">
      <Card className="mx-auto h-fit w-full max-w-3xl bg-transparent  p-8 text-center">
        <CardContent>
          <h2 className="text-2xl font-semibold mb-2">Bizning jamoa</h2>
          <p className="text-gray-600 text-sm md:text-base">
            Bizning fondimiz yuqori toifali jamoadir. Bizni umumiy ishtiyoq birlashtiradi 
            dunyodagi eng yaxshi kompyuterlarni yaratish.
          </p>
        </CardContent>
      </Card>
    </section>
  );
}
