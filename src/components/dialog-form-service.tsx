/* eslint-disable react/no-unescaped-entities */
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from '@/components/ui/checkbox';

export function DialogDemo() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button  className="my-auto rounded-2xl bg-white text-black ">Buyurtma</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] bg-[#06235B]">
        <DialogHeader>
          <DialogTitle className="text-center font-bold text-white">Bir qadam qoldi</DialogTitle>
          <DialogDescription>
          Tafsilotlaringizni kiriting va mutaxassis maslahatini oling
          </DialogDescription>
        </DialogHeader>
        <form action="">
        <div className="grid gap-4 py-4 text-white">
          <div className="flex grid-cols-4  gap-2  flex-col">
            <Label htmlFor="name" className="text-right">
              Ism *
            </Label>
            <Input
              id="name"
              placeholder="Ismingiz"
              className="col-span-3"
              required
            />
          </div>
          <div className="flex flex-col grid-cols-4  gap-2">
            <Label htmlFor="username" className="text-right">
              Telefon raqam *
            </Label>
            <Input
              id="phone"
              placeholder="+998"
              className="col-span-3"
              required
            />
          </div>
        </div>
        <DialogFooter >
          <Button className="bg-white text-black w-[100%]" type="submit">Yuborish</Button>
         
        </DialogFooter>
        <div className="mt-2 text-white ">
          <Checkbox required /> <span className="mb-2 text-[10.5px] md:text-sm">Men shaxsiy ma`lumotlarimni qayta ishlashga roziman</span>
          </div>
        <div className="flex items-center gap-2 h-16 border w-[59%] px-2 my-2">
            <Checkbox id="captcha" />
            <label htmlFor="captcha" className="text-sm text-white">Men robot emasman</label>
            <img
  src="/logos_recaptcha.svg"
  alt="reCAPTCHA"
  className="w-10 h-10"
/>
          </div>
          
        </form>
        
      </DialogContent>
    </Dialog>
  )
}
