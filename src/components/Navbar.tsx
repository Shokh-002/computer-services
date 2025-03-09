/* eslint-disable @next/next/no-img-element */
"use client"
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { MenuIcon, XIcon, Send } from 'lucide-react';
import * as React from "react"
import CustomGoogleTranslate from "./GoogleTranslate";
import { Separator } from "./ui/separator";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import { Textarea } from "./ui/textarea";
import { Checkbox } from "./ui/checkbox";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-black text-white">
      <div className="flex justify-between items-center mx-5 px-4 py-2 text-sm">
        <div className="justify-between flex w-full  md:w-fit items-center gap-2">
          
          <span className="text-white flex justify-between"><Send className="m-auto" size={16} />&nbsp; Urganch</span>
          <span className="text-white">+998 (90) 200-21-22</span>
        </div>
      </div>
      <div className="mt-2 mx-9.5"><Separator/></div>        

      <div className="flex justify-between items-center px-4 py-3 ">
        <div className="text-xl font-bold mx-6">Logo</div>

        <nav className="hidden mr-auto ml-16 ms-0 md:flex my-0 gap-6">
          <a href="#" className="hover:text-gray-400">Xizmatlar</a>
          <a href="#" className="hover:text-gray-400">Narxlar</a>
          <a href="#" className="hover:text-gray-400">Biz haqimizda</a>
          <a href="#" className="hover:text-gray-400">Biz qanday ishlaymiz</a>
        </nav>

        <div className="flex items-center gap-4">
        <CustomGoogleTranslate/>
        
          <Dialog>
      <DialogTrigger asChild>
        <Button variant='outline' className="rounded-full bg-transparent mx-5  hidden md:block">
            Murojat qoldirish
          </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]  top-37   my-37 md:mx-135">
<form action="">
<DialogHeader>
          <DialogTitle>Texnik qo`llab quvvatlash markazi</DialogTitle>
          <DialogDescription>
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          
        <div className="grid w-full mx-1 max-w-sm items-center gap-1.5">
      <Label htmlFor="name">Email *</Label>
      <Input type="name" id="name" placeholder="Ismingiz" required />
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

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <XIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden flex flex-col gap-4 px-4 pb-4">
          <a href="#" className="hover:text-gray-400">Xizmatlar</a>
          <a href="#" className="hover:text-gray-400">Narxlar</a>
          <a href="#" className="hover:text-gray-400">Biz haqimizda</a>
          <a href="#" className="hover:text-gray-400">Biz qanday ishlaymiz</a>
          
          <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className="rounded-full bg-transparent border-gray-600 text-white w-full">
            Murojat qoldirish
          </Button>
      </DialogTrigger>
      <DialogContent className="w-[320px] top-85 -mx-25   ">
      <form action="" className="w-full">
<DialogHeader>
          <DialogTitle>Texnik qo`llab quvvatlash markazi</DialogTitle>
          <DialogDescription>
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          
        <div className="grid w-full mx-1 max-w-sm items-center gap-1.5">
      <Label htmlFor="name">Email *</Label>
      <Input type="name" id="name" placeholder="Ismingiz" required />
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
      )}
    </header>
  );
}
