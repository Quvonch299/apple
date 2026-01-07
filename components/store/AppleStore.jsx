"use client";

import { useState } from "react";
import { FaApple, FaSearch } from "react-icons/fa";

export default function AppleStore() {
  const [query, setQuery] = useState("");

const products = [
  { name: "iPhone 14", price: "$799", img: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-14-finish-select-202209-6-1inch-purple?wid=940&hei=1112&fmt=png-alpha" },
  { name: "iPhone 15 Pro", price: "$999", img: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-15-pro-finish-select-202309-6-7inch-blue-titanium?wid=940&hei=1112&fmt=png-alpha" },
  { name: "iPhone SE", price: "$429", img: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-se-finish-select-202203-midnight?wid=940&hei=1112&fmt=png-alpha" },

  { name: "MacBook Air M2", price: "$1099", img: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/macbook-air-midnight-select-20220606?wid=904&hei=840&fmt=jpeg&qlt=90" },
  { name: "MacBook Pro 16", price: "$2499", img: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/mbp16-spaceblack-select-202310?wid=904&hei=840&fmt=jpeg&qlt=90" },
  { name: "Mac mini M2", price: "$599", img: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/mac-mini-selection-202301?wid=904&hei=840&fmt=jpeg&qlt=90" },

  { name: "iPad Air", price: "$599", img: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/ipad-air-select-wifi-blue-202203?wid=940&hei=1112&fmt=png-alpha" },
  { name: "iPad Pro 12.9", price: "$1099", img: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/ipad-pro-12-select-wifi-spacegray-202210?wid=940&hei=1112&fmt=png-alpha" },
  { name: "iPad 10th Gen", price: "$449", img: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/ipad-10th-gen-select-wifi-blue-202210?wid=940&hei=1112&fmt=png-alpha" },

  { name: "Apple Watch Series 9", price: "$399", img: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MKUQ3_VW_PF+watch-case-45-alum-midnight-cell-9s_VW_PF_WF_CO_GEO_US?wid=800&hei=800&fmt=jpeg&qlt=95" },
  { name: "Apple Watch Ultra 2", price: "$799", img: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/watch-ultra2-select-202309?wid=800&hei=800&fmt=jpeg&qlt=95" },
  { name: "Apple Watch SE", price: "$249", img: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/watch-se-2nd-gen-select-202309?wid=800&hei=800&fmt=jpeg&qlt=95" },

  { name: "AirPods Pro (2nd Gen)", price: "$249", img: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MQD83?wid=572&hei=572&fmt=jpeg&qlt=95" },
  { name: "AirPods Max", price: "$549", img: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/airpods-max-select-pink-202211?wid=572&hei=572&fmt=jpeg&qlt=95" },
  { name: "AirPods (3rd Gen)", price: "$179", img: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MME73?wid=572&hei=572&fmt=jpeg&qlt=95" },

  { name: "Apple TV 4K", price: "$129", img: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/apple-tv-4k-hero-select-202210?wid=904&hei=840&fmt=jpeg&qlt=90" },
  { name: "HomePod mini", price: "$99", img: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/homepod-mini-select-yellow-202110?wid=904&hei=840&fmt=jpeg&qlt=90" },

  { name: "Magic Keyboard", price: "$99", img: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MK2A3?wid=572&hei=572&fmt=jpeg&qlt=95" },
  { name: "Magic Mouse", price: "$79", img: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MMMQ3?wid=572&hei=572&fmt=jpeg&qlt=95" },
  { name: "AirTag (4-pack)", price: "$99", img: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/airtag-4pack-select-202104?wid=572&hei=572&fmt=jpeg&qlt=95" }
];

  const filtered = products.filter((p) =>
    p.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <section className="max-w-7xl mx-auto px-6 py-12">
     <div className="rounded-3xl bg-gradient-to-br from-gray-950 via-black to-gray-900 text-white p-8 md:p-12 mb-12 overflow-hidden relative">
  {/* Optional subtle background effect */}
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(100,100,255,0.08),transparent_40%)]" />

  <div className="relative flex flex-col md:flex-row items-center justify-between gap-10 md:gap-16">
    {/* Left content */}
    <div className="max-w-lg text-center md:text-left">
      <h1 className="text-4xl sm:text-5xl font-bold tracking-tight flex items-center justify-center md:justify-start gap-3 mb-4">
        <span className="text-[#a5b4fc] drop-shadow-lg">
          <FaApple className="text-5xl" />
        </span>
        Apple Store
      </h1>

      <p className="text-lg sm:text-xl text-gray-300 font-light tracking-wide">
        Barcha Apple mahsulotlari — <span className="text-white font-medium">bir joyda</span>
      </p>

      {/* Small additional text (optional) */}
      <p className="mt-4 text-gray-400 text-sm sm:text-base">
        Yangi iPhone, Mac, iPad, Watch va aksessuarlar • Rasmiy kafolat • Tez yetkazib berish
      </p>
    </div>

    {/* Right image with nice effects */}
    <div className="relative group">
      <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-transparent rounded-full blur-2xl opacity-0 group-hover:opacity-70 transition-opacity duration-700" />

      <img
        src="https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/iphone-16-model-unselect-gallery-1-202409?wid=5120&hei=2880&fmt=webp&qlt=90&.v=ZnlzVUZzRWd3dlg0RllqbHhQSUpKTGdzSmpObkZCM3MrNmJ5SkhESlNDaWhXRnNvWU5kTFRnSWM5eDdhTWw0bEpFd0xhWDVibStLdGRYRmxkNGI4VTR2UjRaSC9URTlmd0FSb1ZTWjRnb3Y5aFhSWndydDBTaGRRd3dvbVFwcGk&traceId=1"
        alt="iPhone 15 Pro Max"
        className="w-72 sm:w-80 md:w-[340px] lg:w-[380px] object-contain 
                 drop-shadow-[0_35px_35px_rgba(0,0,0,0.6)] 
                 group-hover:scale-105 
                 transition-all duration-500 ease-out"
      />
    </div>
  </div>
</div>

      {/* Search */}
      <div className="relative mb-10">
        <FaSearch className="absolute left-4 top-3.5 text-gray-400" />
        <input
          type="text"
          placeholder="Mahsulot qidirish…"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full pl-11 pr-4 py-3 border rounded-2xl bg-gray-50 focus:bg-white focus:border-black outline-none transition"
        />
      </div>

      {/* Product grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {filtered.map((p) => (
          <div
            key={p.name}
            className="border rounded-3xl p-5 shadow-sm hover:shadow-xl transition bg-gradient-to-b from-gray-50 to-white"
          >
            <div className="rounded-2xl bg-gray-100 h-60 flex items-center justify-center mb-4 overflow-hidden">
              <img src={p.img} alt={p.name} className="object-contain h-full" />
            </div>

            <h3 className="text-lg font-semibold">{p.name}</h3>
            <p className="font-bold mt-1">{p.price}</p>

            <button className="mt-4 w-full bg-black text-white py-2.5 rounded-xl hover:opacity-80 transition">
              Sotib olish
            </button>
          </div>
        ))}

        {filtered.length === 0 && (
          <p className="text-center col-span-full text-gray-500">
            Hech narsa topilmadi 😔
          </p>
        )}
      </div>
    </section>
  );
}
