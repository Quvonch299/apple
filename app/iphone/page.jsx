"use client";

import { motion } from "framer-motion";

export default function iPhonePage() {
  return (
    <div className="bg-black text-white min-h-screen">

      {/* HERO — BACKGROUND VIDEO */}
      <section className="relative min-h-screen flex flex-col items-center justify-center px-6 text-center overflow-hidden">

        {/* VIDEO FON */}
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src="https://www.apple.com/105/media/us/iphone-air/2025/731189b1-a606-493f-afa4-7c766a8fd08d/anim/highlights-design/large_2x.mp4"
          autoPlay
          loop
          muted
          playsInline
        />

        {/* QORAYTIRISH EFFEKTI */}
        <div className="absolute inset-0 bg-black/60" />

        {/* MATN VA TUGMALAR */}
        <motion.h1
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 text-5xl sm:text-6xl md:text-8xl font-bold tracking-tight mb-4"
        >
          iPhone 16 Pro
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative z-10 text-xl md:text-2xl text-gray-300 max-w-3xl mb-10"
        >
          Titanium dizayn. A18 Pro chip. Apple Intelligence.  
          Tezkor, kuchli va aqlli — yangi avlod iPhone.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="relative z-10 flex gap-6"
        >
          <button className="px-8 py-4 bg-blue-600 hover:bg-blue-500 rounded-full font-semibold">
            Sotib olish
          </button>

          <button className="px-8 py-4 border border-gray-500 hover:border-white rounded-full font-semibold">
            Batafsil
          </button>
        </motion.div>
      </section>

      {/* PERFORMANCE */}
      <section className="max-w-6xl mx-auto px-6 py-24 text-center">
        <h2 className="text-4xl md:text-6xl font-bold mb-6">A18 Pro — kuch markazi</h2>
        <p className="text-gray-300 text-xl max-w-4xl mx-auto mb-12">
          O‘yinlar, AI va professional dasturlar — hammasi tezroq, silliq va samarali.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-zinc-900/60 border border-zinc-800 p-8 rounded-3xl">
            <h3 className="text-2xl font-semibold mb-3">Neural Engine</h3>
            <p className="text-gray-400">AI vazifalari uchun ulkan quvvat</p>
          </div>

          <div className="bg-zinc-900/60 border border-zinc-800 p-8 rounded-3xl">
            <h3 className="text-2xl font-semibold mb-3">GPU Pro</h3>
            <p className="text-gray-400">Ray tracing bilan realistik grafikalar</p>
          </div>

          <div className="bg-zinc-900/60 border border-zinc-800 p-8 rounded-3xl">
            <h3 className="text-2xl font-semibold mb-3">Apple Intelligence</h3>
            <p className="text-gray-400">Yozish, rasm, yordam — aqlli tarzda</p>
          </div>
        </div>
      </section>

      {/* BATTERY */}
      <section className="max-w-6xl mx-auto px-6 py-24 text-center">
        <h2 className="text-4xl md:text-6xl font-bold mb-6">
          Kun davomida quvvat
        </h2>

        <p className="text-gray-300 text-xl max-w-3xl mx-auto mb-12">
          Video, o‘yinlar va internet — yanada uzoqroq ishlash.
        </p>

        <div className="flex flex-col md:flex-row justify-center gap-12">
          <div>
            <h3 className="text-3xl font-semibold mb-2">MagSafe</h3>
            <p className="text-gray-400">Tezkor va qulay simsiz zaryadlash</p>
          </div>

          <div>
            <h3 className="text-3xl font-semibold mb-2">USB-C</h3>
            <p className="text-gray-400">Yuqori tezlikda uzatish va quvvatlash</p>
          </div>
        </div>
      </section>
    </div>
  );
}
