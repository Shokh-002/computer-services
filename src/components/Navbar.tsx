"use client"
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { MenuIcon, XIcon, Send, GlobeIcon, ChevronDown } from 'lucide-react';
import * as React from "react"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
  } from "@/components/ui/popover"
  import {
    DropdownMenu,
    DropdownMenuTrigger,
    DropdownMenuContent,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuRadioGroup,
    DropdownMenuRadioItem,
  } from "@/components/ui/dropdown-menu";

//   import { useTranslation } from 'next-i18next';
// import { useRouter } from 'next/router';
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [position, setPosition] = useState("bottom")
  // const { i18n } = useTranslation("uz");
  // const router = useRouter();

  // const changeLanguage = (lang:string) => {
  //   i18n.changeLanguage(lang);
  //   router.push(router.pathname, router.asPath, { locale: lang });
  // };
  return (
    <header className="bg-black text-white border-b border-gray-800">
      <div className="flex justify-between items-center px-4 py-2 text-sm border-b border-gray-700">
        <div className="justify-between flex w-full  md:w-fit items-center gap-2">
          
          <span className="text-gray-400 flex"><Send className="m-auto" size={16} /> Urganch</span>
          <span className="text-gray-400">+998 (90) 200-21-22</span>
        </div>
      </div>

      <div className="flex justify-between items-center px-4 py-3 ">
        <div className="text-xl font-bold">Logo</div>

        <nav className="hidden mr-auto ml-16 ms-0 md:flex my-0 gap-6">
          <a href="#" className="hover:text-gray-400">Xizmatlar</a>
          <a href="#" className="hover:text-gray-400">Narxlar</a>
          <a href="#" className="hover:text-gray-400">Biz haqimizda</a>
          <a href="#" className="hover:text-gray-400">Biz qanday ishlaymiz</a>
        </nav>

        <div className="flex items-center gap-4">
        <div id="google_translate_element"></div>
        <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button className="bg-transparent rounded-full"><GlobeIcon/> UZ <ChevronDown/></Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>Tillar</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
          <DropdownMenuRadioItem value="uz">Uzbek</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="en">English</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="ru">Ruscha</DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
          <Popover>
      <PopoverTrigger asChild>
        <Button variant='outline' className="rounded-full bg-transparent  hidden md:block">
            Murojat qoldirish
          </Button>
      </PopoverTrigger>
      <PopoverContent className="w-80">
        <h2>Hello</h2>
      </PopoverContent>
    </Popover>
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
          <Button variant="outline" className="rounded-full bg-transparent border-gray-600 text-white w-full">
            Murojat qoldirish
          </Button>
        </div>
      )}
    </header>
  );
}
