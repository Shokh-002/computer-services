"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { ChevronDown, GlobeIcon } from "lucide-react";

declare global {
  interface Window {
    google: {
      translate: {
        TranslateElement: new (
          options: { pageLanguage: string; autoDisplay?: boolean },
          containerId: string
        ) => void;
      };
    };
    googleTranslateElementInit: () => void;
  }
}

const languages = [
  // { code: "en", label: "English" },
  { code: "ru", label: "Русский" },
  { code: "uz", label: "O'zbek" },
];

export default function CustomGoogleTranslate() {
  const [currentLang, setCurrentLang] = useState("O'zbek");

  useEffect(() => {
    const addGoogleTranslateScript = () => {
      if (document.querySelector("#google-translate-script")) return;
      const script = document.createElement("script");
      script.id = "google-translate-script";
      script.src =
        "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      document.body.appendChild(script);
    };

    window.googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement(
        {
          pageLanguage: "uz",
          autoDisplay: false,
        },
        "google_translate_element"
      );
    };

    addGoogleTranslateScript();

    const observer = new MutationObserver(() => {
      const selectEl = document.querySelector(".goog-te-combo") as HTMLSelectElement;
      if (selectEl) {
        observer.disconnect();

        // select o‘zgarganda yangilash
        selectEl.addEventListener("change", () => {
          updateCurrentLang(selectEl.value);
        });

        // ilk yuklashda ham tilni tekshirib qo‘yamiz
        updateCurrentLang(selectEl.value);
      }
    });

    observer.observe(document.body, { childList: true, subtree: true });

    return () => observer.disconnect();
  }, []);

  const updateCurrentLang = (googleCode: string) => {
    // Google Translate kodlari ba'zan murakkab bo‘lishi mumkin, shuning uchun moslaymiz
    const normalizedCode = googleCode.split("|")[0]; // "uz|Cyrl" -> "uz"
    const matchedLang = languages.find((lang) => lang.code === normalizedCode);
    if (matchedLang) {
      setCurrentLang(matchedLang.label);
    } else {
      setCurrentLang("O'zbek"); // Default til
    }
  };

  const handleLanguageChange = (langCode: string, langLabel: string) => {
    const selectEl = document.querySelector(".goog-te-combo") as HTMLSelectElement;
    if (selectEl) {
      selectEl.value = langCode;
      selectEl.dispatchEvent(new Event("change"));
    }
    setCurrentLang(langLabel);
  };

  return (
    <div className="relative inline-block">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button className="bg-transparent rounded-full">
            <GlobeIcon className="mr-2" />
            {currentLang}
            <ChevronDown className="ml-2" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-40">
          {languages.map((lang) => (
            <DropdownMenuItem
              key={lang.code}
              onClick={() => handleLanguageChange(lang.code, lang.label)}
            >
              {lang.label}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>

      {/* Google Translate div */}
      <div id="google_translate_element" className="hidden"></div>
    </div>
  );
}
