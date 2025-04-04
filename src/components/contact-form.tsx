/* eslint-disable react/no-unescaped-entities */
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import Image from 'next/image';
export default function ContactForm() {
  return (
    <div className="flex flex-col md:flex-row border border-solid my-8 rounded-lg p-6 md:p-10 max-w-full mx-4 border-blue-950 bg-white shadow-lg">
      <div className="md:w-1/2 p-4">
        <h2 className="text-xl font-semibold mb-2">HALIHAM SAVOLINGIZ BORMI?</h2>
        <p className="text-gray-600 text-sm">
          Shaklni to`ldiring va biz sizning savolingizga javob berish uchun sizga qo'ng'iroq qilamiz. Agar telefon orqali bog'lanmasak, sizga messenjер orqali yozamiz.
        </p>
      </div>
      <div className="md:w-1/2 p-4">
        <form className="space-y-4">
          <div>
            <label className="text-sm font-medium">Ism*</label>
            <Input placeholder="Ismingizni kiriting" className="mt-1" />
          </div>
          <div>
            <label className="text-sm font-medium">Telefon raqam*</label>
            <Input type="tel" placeholder="+998" className="mt-1" />
          </div>
          <div className="flex items-center gap-2">
            <Checkbox id="telegram" />
            <label htmlFor="telegram" className="text-sm">Telegram orqali yozsak bo’ladimi</label>
          </div>
          <div>
            <label className="text-sm font-medium">Savolingiz*</label>
            <Textarea className="mt-1" rows={4} placeholder="Savolingizni yozing..." />
          </div>
          <div className="flex items-center gap-2 border w-1/3 px-2">
            <Checkbox id="captcha" />
            <label htmlFor="captcha" className="text-sm">Men robot emasman</label>
            <Image
  src="/logos_recaptcha.svg"
  alt="reCAPTCHA"
  className="w-10 h-10"
  width={10}
  height={10}
/>
          </div>
          <Button className="w-full bg-blue-600 hover:bg-blue-700">Jo’natish</Button>
          <p className="text-xs text-gray-500 text-center">
            “Jo’natish” tugmasini bosish orqali siz shaxsiy ma’lumotlarni qayta ishlashga roziligingizni tasdiqlaysiz.
          </p>
        </form>
      </div>
    </div>
  );
}
