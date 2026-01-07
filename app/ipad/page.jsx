"use client";

import { motion } from "framer-motion";

export default function iPadProPage() {
  return (
    <div className="bg-black text-white min-h-screen font-sans antialiased">

      <section className="relative min-h-screen flex flex-col items-center justify-center px-6 text-center overflow-hidden">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src="https://www.apple.com/105/media/us/ipad-pro/2024/0c9bbbd7-a24c-4d49-a28f-2f2c2b9c6127/anim/hero/large_2x.mp4"
          autoPlay
          loop
          muted
          playsInline
        />

        <div className="absolute inset-0 bg-black/65" />

        <motion.h1
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 text-5xl sm:text-6xl md:text-8xl font-bold tracking-tight mb-4"
        >
          iPad Pro
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative z-10 text-gray-300 text-xl md:text-2xl max-w-3xl mb-10"
        >
          Ultra Retina XDR. M5 chip. Apple Intelligence.  
          Eng kuchli va eng ingichka iPad.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="relative z-10 flex gap-6"
        >
          <button className="px-8 py-3 bg-white text-black rounded-full font-semibold hover:bg-gray-200">
            Sotib olish
          </button>

          <button className="px-8 py-3 border border-gray-500 rounded-full hover:border-white">
            Batafsil
          </button>
        </motion.div>
      </section>

      {/* M5 */}
      <section className="max-w-6xl mx-auto px-6 py-24 text-center">
        <h2 className="text-4xl md:text-6xl font-bold mb-8">M5 — yangi avlod</h2>

        <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-12">
          AI vazifalari tezroq, grafikalar silliq, energiya esa tejamkor.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-zinc-900/60 border border-zinc-800 p-8 rounded-3xl">
            <h3 className="text-2xl font-semibold mb-3">Neural Engine</h3>
            <p className="text-gray-400">On-device AI imkoniyatlari</p>
          </div>

          <div className="bg-zinc-900/60 border border-zinc-800 p-8 rounded-3xl">
            <h3 className="text-2xl font-semibold mb-3">Powerful GPU</h3>
            <p className="text-gray-400">Ray tracing bilan silliq grafika</p>
          </div>

          <div className="bg-zinc-900/60 border border-zinc-800 p-8 rounded-3xl">
            <h3 className="text-2xl font-semibold mb-3">Apple Intelligence</h3>
            <p className="text-gray-400">Rasm, matn va yordam — aqlli tarzda</p>
          </div>
        </div>
      </section>

      {/* DISPLAY */}
      <section className="bg-black py-24">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-5xl md:text-7xl font-bold mb-6">Ultra Retina XDR</h2>

          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
            Tandem OLED — yorqinlik, kontrast va mukammal ranglar.
          </p>

          <div className="rounded-3xl overflow-hidden shadow-2xl">
            <img
              src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/ipad-pro-display?wid=1200&hei=800&fmt=jpeg&qlt=90"
              alt="iPad Pro Display"
            />
          </div>
        </div>
      </section>

      {/* iPad CARDS — 10 ta */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <h2 className="text-4xl md:text-6xl font-bold text-center mb-14">
          iPad modellari
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
          {[
            "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/ipad-pro-model-unselect-gallery-1-202405?wid=600&hei=600",
            "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/ipad-pro-model-unselect-gallery-2-202405?wid=600&hei=600",
            "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/ipad-air-select-202405?wid=600&hei=600",
            "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/ipad-air-model-unselect-gallery-2-202405?wid=600&hei=600",
            "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/ipad-10th-gen-select-2022?wid=600&hei=600",
            "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/ipad-10th-gen-hero-2022?wid=600&hei=600",
            "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/ipad-mini-select-202109?wid=600&hei=600",
            "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/ipad-mini-gallery-1-202109?wid=600&hei=600",
            "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/ipad-pro-gallery-1-2022?wid=600&hei=600",
            "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/ipad-pro-gallery-3-2022?wid=600&hei=600"
          ].map((src, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
              className="bg-zinc-900/60 border border-zinc-800 rounded-3xl p-6 hover:scale-105 transition"
            >
              <img src={src} alt="iPad" className="rounded-2xl mb-4" />
              <p className="text-center text-gray-300">iPad model #{i + 1}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
