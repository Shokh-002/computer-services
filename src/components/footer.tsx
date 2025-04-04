/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";
import { FaPhone, FaClock, FaTelegramPlane, FaInstagram, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="my-2 bg-gradient-to-r from-[#05235B] to-[#000505] text-white py-10 px-5">
      <div className="max-w-7xl mx-14 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Location */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Bizning manzil</h2>
          <div className="rounded-2xl overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2995.123456789!2d60.620123!3d41.555123!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sYour%20Location!5e0!3m2!1sen!2s!4v1610000000000"
              width="100%"
              height="200"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
        </div>

        {/* Navigation */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Asosiy</h2>
          <ul className="space-y-2 text-gray-300">
            <li>
              <Link href="/services-page/" className="hover:text-white transition">
                Xizmatlar
              </Link>
            </li>
            <li>
              <Link href="/prices/" className="hover:text-white transition">
                Narxlar
              </Link>
            </li>
            <li>
              <Link href="/reviews/" className="hover:text-white transition">
                Sharhlar
              </Link>
            </li>
            <li>
              <Link href="/about-us/" className="hover:text-white transition">
                Biz haqimizda
              </Link>
            </li>
            <li>
              <Link href="#work" className="hover:text-white transition">
                Biz qanday ishlaymiz
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Kontaktlar</h2>
          <ul className="space-y-4 text-gray-300">
            <li className="flex items-center gap-2">
              <FaPhone /> <a href="tel:+998902002122" className="hover:text-white transition">+998 (90) 200-21-22</a>
            </li>
            <li className="flex items-center gap-2">
              <FaClock /> Du-Sha 10:00–18:00
            </li>
            <li className="flex items-start gap-2">
              <FaTelegramPlane /> a uy, Tinchlik ko'chasi 6, Urganch, Xorazm Viloyati, O‘zbekiston
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mx-14 border-t border-gray-700 mt-10 pt-6 flex flex-col md:flex-row items-center justify-between text-gray-400 text-sm">
        <p>MBOS Group</p>
        <div className="flex gap-4 mt-4 md:mt-0">
          <a href="https://t.me/yourchannel" target="_blank" rel="noopener noreferrer" className="hover:text-white">
            <FaTelegramPlane className="w-5 h-5" />
          </a>
          <a href="https://youtube.com/yourchannel" target="_blank" rel="noopener noreferrer" className="hover:text-white">
            <FaYoutube className="w-5 h-5" />
          </a>
          <a href="https://instagram.com/yourprofile" target="_blank" rel="noopener noreferrer" className="hover:text-white">
            <FaInstagram className="w-5 h-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
