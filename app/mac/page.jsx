"use client";

import { motion } from "framer-motion";

export default function MacPage() {
  return (
    <div className="bg-black text-white min-h-screen font-sans antialiased">

      {/* HERO — BACKGROUND VIDEO */}
      <section className="relative min-h-screen flex flex-col items-center justify-center px-6 text-center overflow-hidden">

        <video
          className="absolute inset-0 w-full h-full object-cover"
          src="https://www.apple.com/105/media/us/macbook-air/2025/0833fe28-c438-4dc4-8edc-e39ef30df5f9/anim/design-hero/large_2x.mp4"
          autoPlay
          loop
          muted
          playsInline
        />

        <div className="absolute inset-0 bg-black/60" />

        <motion.h1
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight mb-4"
        >
          Bir qadam oldinda.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative z-10 text-gray-300 text-lg md:text-2xl max-w-3xl mb-8"
        >
          Engil, kuchli va jim. Yaratish, ishlash va ilhom — barchasi bir joyda.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="relative z-10 flex gap-6"
        >
          <button className="px-7 py-3 bg-white text-black rounded-full font-semibold hover:bg-gray-200">
            Boshlash
          </button>

          <button className="px-7 py-3 border border-gray-500 rounded-full hover:border-white">
            Ko‘rib chiqish
          </button>
        </motion.div>
      </section>

      {/* iPHONE CARDS SECTION — WHITE BACKGROUND */}
      <section className="bg-white text-black py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-14">
            iPhone kolleksiya
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">

            {[
              "iPhone 16 Pro",
              "iPhone 16",
              "iPhone 15 Pro",
              "iPhone 15",
              "iPhone 14",
              "iPhone 13",
              "iPhone SE",
              "iPhone Max Edition",
              "iPhone Ultra",
              "iPhone Mini"
            ].map((name, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-gray-100 border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-xl transition"
              >
                <div className="w-full h-36 bg-gradient-to-br from-gray-200 to-gray-300 rounded-xl mb-4" />

                <h3 className="text-xl font-semibold mb-2">{name}</h3>

                <p className="text-gray-600 text-sm mb-4">
                  Tezlik, dizayn va aqlli imkoniyatlar — barchasi bir smartfonda.
                </p>

                <button className="px-5 py-2 bg-black text-white rounded-full text-sm">
                  Ko‘rib chiqish
                </button>
              </motion.div>
            ))}

          </div>
        </div>
      </section>
    </div>
  );
}
