"use client";

import React from "react";
import { motion } from "framer-motion";

export default function MacHero() {
  return (
    <div className='bg-[black]'>

    <section className="max-w-7xl  mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 grid md:grid-cols-2 gap-8 md:gap-12 items-center">
      {/* Matn qismi */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="order-2 md:order-1"
      >
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 md:mb-6 tracking-tight">
          MacBook Pro
        </h1>

        <p className="text-gray-300 text-base sm:text-lg md:text-xl max-w-lg leading-relaxed">
          M-chiplar MacBook’ni yangi darajaga olib chiqdi. Kuchli grafikasi, ko‘p vazifani parallel bajarish qobiliyati va jim ishlashi — hammasi bir qurilmada.
        </p>

        <div className="mt-6 md:mt-8 flex flex-wrap gap-4">
          <div >
            <button className="px-5 py-2.5 md:px-6 md:py-3 bg-white text-black rounded-full font-semibold text-sm md:text-base hover:bg-gray-200 transition-colors">
              Buyurtma berish
            </button>
          </div>

          <div >
            <button className="px-5 py-2.5 md:px-6 md:py-3 border border-gray-500 text-[white] rounded-full text-sm md:text-base hover:border-white transition-colors">
              Batafsil
            </button>
          </div>
        </div>
      </motion.div>

      {/* Rasm qismi */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        className="order-1 md:order-2 flex justify-center"
      >
        <img
          src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/mbp16-spaceblack-select-202310?wid=1200&hei=900&fmt=jpeg&qlt=90"
          alt="MacBook Pro Space Black"
          className="max-w-full h-auto rounded-xl shadow-2xl"
          loading="lazy"
        />
      </motion.div>
    </section>
    </div>
  );
}