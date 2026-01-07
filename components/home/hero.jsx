'use client'
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-white">
 <div className="absolute inset-0 z-0">
  <img
    src="https://www.apple.com/newsroom/images/product/iphone/standard/Apple-iPhone-14-iPhone-14-Plus-hero-220907.jpg.landing-big_2x.jpg"
    alt="iPhone hero showcase"
    className="object-contain object-center opacity-90 scale-90 md:scale-100 w-full h-full"
  />
</div>

      <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-transparent to-white/70 z-10" />

      <div className="relative z-20 px-6 text-center max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 70 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
        >
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-semibold tracking-tight text-black leading-none mb-5 md:mb-6">
            iPhone.
          </h1>

          <p className="text-xl sm:text-2xl md:text-3xl font-light text-black/80 max-w-3xl mx-auto leading-relaxed mb-10 md:mb-14">
            Designed to be loved. Engineered to amaze.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-5 md:gap-8">
            <motion.a
              href="#"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex px-10 py-5 md:px-12 md:py-6 
                         bg-black text-white font-medium text-lg md:text-xl 
                         rounded-full shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              Learn more
            </motion.a>

            <motion.a
              href="#"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex px-10 py-5 md:px-12 md:py-6 
                         border-2 border-black/80 text-black font-medium text-lg md:text-xl 
                         rounded-full hover:bg-black/5 transition-all duration-300"
            >
              Buy
            </motion.a>
          </div>
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-20"
      >
        <div className="w-7 h-11 border-2 border-black/50 rounded-full flex items-start justify-center pt-2">
          <motion.div
            animate={{ y: [0, 14, 0] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
            className="w-1.5 h-3 bg-black/70 rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
}