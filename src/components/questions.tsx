"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const faqs = [
  {
    question: "Kompyuterni Yangilash Nima? Nima Uchun Buni Qilish Kerak?",
    answer: "Kompyuterni yangilash orqali tezlik va samaradorlikni oshirishingiz mumkin.",
  },
  {
    question: "Kompyuterni Yangilash Nima? Bu Har Xil Narsalarmi?",
    answer: "Ha, apparat va dasturiy ta'minot yangilanishlari mavjud.",
  },
  {
    question: "Oldindan Yig'ilgan Kompyuterni Sotib Olsam Bo'ladimi?",
    answer: "Albatta, lekin ehtiyojlaringizga mos kelishiga ishonch hosil qiling.",
  },
  {
    question: "Siz Shaxsiy Kompyuter Yaratasizmi?",
    answer: "Ha, siz xohlagan konfiguratsiyada kompyuter yig'ib bera olamiz.",
  },
  {
    question: "Noutbukni Yangilash Mumkinmi?",
    answer: "Ba'zi qismlarini yangilash mumkin, masalan, RAM va SSD.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="container px-14 py-8">
      <motion.h2
        className="text-lg md:text-xl font-semibold mb-4"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        viewport={{ once: true }}
      >
        TEZ-TEZ SO`RALADIGAN SAVOLLAR
      </motion.h2>

      <div className="space-y-1">
        {faqs.map((faq, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05, duration: 0.3 }}
            viewport={{ once: true }}
          >
            <Card className="py-1 border-0 border-b border-black dark:border-gray-700 rounded-none hover:bg-gray-50 dark:hover:bg-neutral-800 transition-colors">
              <button
                onClick={() => toggleFAQ(index)}
                className="flex justify-between items-center w-full p-3"
              >
                <span className="text-sm text-left">
                  {faq.question}
                </span>
                <motion.span
                  animate={{ rotate: openIndex === index ? 45 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="text-gray-500 dark:text-gray-400"
                >
                  <Plus size={16} />
                </motion.span>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <CardContent className="pt-0 pb-3 px-3 text-xs text-gray-600 dark:text-gray-300">
                      {faq.answer}
                    </CardContent>
                  </motion.div>
                )}
              </AnimatePresence>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
