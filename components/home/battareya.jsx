import React from 'react'

export default function Battareya() {
  return (
   <section className="max-w-6xl mx-auto px-6 py-24 text-center">
        <h2 className="text-4xl md:text-6xl font-bold mb-8">
          Kun bo‘yi quvvat — ijod uchun
        </h2>

        <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
          Bir zaryadda 10 soatgacha video va internet.
        </p>

        <div className="flex flex-col md:flex-row gap-12 justify-center">
          <div>
            <h3 className="text-3xl font-semibold mb-2">Apple Pencil Pro</h3>
            <p className="text-gray-400">
              Squeeze, barrel roll, haptic — yangi daraja.
            </p>
          </div>

          <div>
            <h3 className="text-3xl font-semibold mb-2">Magic Keyboard</h3>
            <p className="text-gray-400">
              Kattaroq trackpad, funksiya tugmalari.
            </p>
          </div>
        </div>
      </section>
  )
}
