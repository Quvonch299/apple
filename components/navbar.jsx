'use client'
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search, ShoppingBag, Menu, X,
  Grid, Store, Laptop, Tablet, Smartphone,
  Watch, Headphones, Tv, Gamepad2, Box
} from "lucide-react";
import Link from "next/link";

export default function AppleNavbar() {
  const [open, setOpen] = useState(false);

  // ⚠️ — ESKI PAGESLAR SAQLANDI + Catalog qo‘shildi
  const links = [
    { label: "Store", icon: <Store size={18} />, href: "/store" },
    { label: "Mac", icon: <Laptop size={18} />, href: "/mac" },
    { label: "iPad", icon: <Tablet size={18} />, href: "/ipad" },
    { label: "iPhone", icon: <Smartphone size={18} />, href: "/iphone" },
    { label: "Watch", icon: <Watch size={18} />, href: "/watch" },
    { label: "AirPods", icon: <Headphones size={18} />, href: "/airpods" },
    // { label: "TV & Home", icon: <Tv size={18} />, href: "/tv-home" },
    // { label: "Entertainment", icon: <Gamepad2 size={18} />, href: "/entertainment" },
    // { label: "Accessories", icon: <Box size={18} />, href: "/accessories" },
    // { label: "Support", icon: <Store size={18} />, href: "/support" },

    { label: "Catalog", icon: <Grid size={18} />, href: "/catalog" },
  ];

  return (
    <header className=" bg-black/80 backdrop-blur border-b border-white/10">
      <nav className="mx-auto max-w-7xl px-4">
        <div className="flex items-center justify-between h-12">

          <div className="flex items-center gap-3">
            <button
              className="md:hidden text-gray-200 hover:text-white"
              onClick={() => setOpen(!open)}
            >
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>

            <Link href="/" className="text-gray-200 hover:text-white">
              <svg viewBox="0 0 256 315" className="w-5 h-5 fill-current">
                <path d="M213.19 167.12c-.36-36.27 29.64-53.64 30.96-54.39-16.88-24.64-43.1-28-52.34-28.39-22.3-2.26-43.52 13.15-54.84 13.15-11.32 0-28.76-12.8-47.3-12.46-24.36.36-46.78 14.1-59.3 35.74-25.4 44.1-6.46 109.14 18.26 144.86 12.1 17.46 26.52 36.92 45.38 36.22 18.16-.7 25.02-11.68 46.98-11.68 21.96 0 27.9 11.68 47.3 11.32 19.5-.36 31.84-17.78 43.9-35.32 13.86-20.26 19.62-39.86 19.98-40.9-.44-.2-38.4-14.74-38.66-58.65zM170.9 56.77c10.06-12.2 16.84-29.16 14.98-45.99-14.5.58-32.06 9.64-42.48 21.82-9.18 10.62-17.22 27.6-15.08 44.04 15.96 1.24 32.52-8.14 42.58-19.87z"/>
              </svg>
            </Link>
          </div>

          <ul className="hidden md:flex items-center gap-6 text-sm">
            {links.map((l, i) => (
              <motion.li
                key={l.label}
                initial={{ opacity: 0, y: -6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.03 * i }}
              >
                <Link
                  href={l.href}
                  className="flex items-center gap-2 text-gray-300 hover:text-white transition"
                >
                  {l.icon}
                  <span>{l.label}</span>
                </Link>
              </motion.li>
            ))}
          </ul>

          {/* Right */}
          <div className="flex items-center gap-4 text-gray-200">
            <button className="hover:text-white"><Search size={18} /></button>
            <button className="hover:text-white"><ShoppingBag size={18} /></button>
          </div>
        </div>

        {/* Mobile */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden overflow-hidden"
            >
              <ul className="py-3 space-y-2">
                {links.map((l) => (
                  <li key={l.label}>
                    <Link
                      onClick={() => setOpen(false)}
                      href={l.href}
                      className="flex items-center gap-3 px-3 py-2 rounded-xl text-gray-200 hover:bg-white/5"
                    >
                      {l.icon}
                      <span>{l.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
