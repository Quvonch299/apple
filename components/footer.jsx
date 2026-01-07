// components/Footer.tsx
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#f5f5f7] dark:bg-[#1d1d1f] text-[#1d1d1f] dark:text-[#f5f5f7] pt-10 pb-6 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-[980px] mx-auto px-6 lg:px-8">
        {/* Birinchi qator - kichik matn */}
        <div className="text-xs text-gray-500 dark:text-gray-400 mb-8 leading-relaxed">
          <p>
            * Ushbu sayt Apple Inc. ning rasmiy vakili emas. Bu shunchaki muxlislar tomonidan yaratilgan
            fan-sayt bo‘lib, Apple mahsulotlari haqida malumot berish uchun mo‘ljallangan.
          </p>
        </div>

        {/* Asosiy havolalar */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 text-sm mb-12">
          {footerSections.map((section, index) => (
            <div key={index}>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-4">{section.title}</h3>
              <ul className="space-y-2.5">
                {section.links.map((link) => (
                  <li key={link}>
                    <Link
                      href="#"
                      className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Pastki qism - copyright + legal */}
        <div className="pt-8 border-t border-gray-200 dark:border-gray-800 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-6 text-xs text-gray-500 dark:text-gray-400">
          <div>
            Copyright © {new Date().getFullYear()} Apple Inc. Barcha huquqlar himoyalangan.
          </div>

          <div className="flex flex-wrap gap-x-4 gap-y-2">
            {legalLinks.map((link) => (
              <Link
                key={link}
                href="#"
                className="hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                {link}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

const footerSections = [
  {
    title: "Do'kon",
    links: ["Yangi mahsulotlar", "Aksessuarlar", "Sovg‘alar", "Maxsus narxlar"],
  },
  {
    title: "Mahsulotlar",
    links: ["Mac", "iPhone", "iPad", "Apple Watch", "AirPods", "Apple TV"],
  },
  {
    title: "Xizmatlar",
    links: ["Apple Music", "Apple TV+", "iCloud", "Apple Pay", "Apple Card"],
  },
  {
    title: "Apple Store",
    links: ["Topish", "Buyurtma holati", "Sotib olish bo‘yicha yordam", "Ta'lim narxlari"],
  },
  {
    title: "Qo‘llab-quvvatlash",
    links: ["Apple Support", "Texnik xizmat", "Kafolat", "Kontakt"],
  },
];

const legalLinks = [
  "Maxfiylik siyosati",
  "Foydalanish shartlari",
  "Sotuv va qaytarish",
  "Sayt xaritasi",
  "Reklama",
  "Cookie sozlamalari",
];