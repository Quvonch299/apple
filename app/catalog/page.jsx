"use client";

import { useState } from "react";
import { FaApple } from "react-icons/fa";

export default function AppleCatalog() {
  const [category, setCategory] = useState("iphone");

  const products = {
    iphone: [
      { name: "iPhone 15 Pro", price: "$999", img: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-15-pro-max-finish-select-202309-6-1inch-blue_titanium?wid=940&hei=1112&fmt=png-alpha" },
      { name: "iPhone 15", price: "$899", img: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-15-finish-select-202309-6-1inch-pink?wid=940&hei=1112&fmt=png-alpha" },
      { name: "iPhone 14", price: "$799", img: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-14-finish-select-202209-6-1inch-purple?wid=940&hei=1112&fmt=png-alpha" },
      { name: "iPhone 13", price: "$699", img: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-13-finish-select-202207-green?wid=940&hei=1112&fmt=png-alpha" },
    ],

    macbook: [
      { name: "MacBook Air M2", price: "$1299", img: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/macbook-air-m2-midnight-select-20220606?wid=904&hei=840&fmt=jpeg&qlt=90&.v=1655158092157" },
      { name: "MacBook Air M3", price: "$1399", img: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/macbook-air-13-spacegray-select-202402?wid=904&hei=840&fmt=jpeg&qlt=90" },
      { name: "MacBook Pro 14", price: "$1999", img: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/mbp14-spacegray-select-202310?wid=904&hei=840&fmt=jpeg&qlt=90" },
      { name: "MacBook Pro 16", price: "$2499", img: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/mbp16-spaceblack-select-202310?wid=904&hei=840&fmt=jpeg&qlt=90" },
    ],

    ipad: [
      { name: "iPad Pro", price: "$1099", img: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/ipad-pro-12-11-select-202210?wid=940&hei=1112&fmt=png-alpha" },
      { name: "iPad Air", price: "$599", img: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/ipad-air-select-wifi-blue-202203?wid=940&hei=1112&fmt=png-alpha" },
      { name: "iPad 10th Gen", price: "$449", img: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/ipad-10th-gen-finish-select-202212-blue-wifi?wid=940&hei=1112&fmt=png-alpha" },
      { name: "iPad mini", price: "$499", img: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/ipad-mini-select-wifi-purple-202109?wid=940&hei=1112&fmt=png-alpha" },
    ],

    airpods: [
      { name: "AirPods Pro (2-gen)", price: "$249", img: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MQD83?wid=800&hei=800&fmt=jpeg&qlt=90" },
      { name: "AirPods (3-gen)", price: "$179", img: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MME73?wid=800&hei=800&fmt=jpeg&qlt=90" },
      { name: "AirPods Max", price: "$549", img: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/airpods-max-select-skyblue-202011?wid=800&hei=800&fmt=jpeg&qlt=90" },
      { name: "AirPods (2-gen)", price: "$129", img: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MV7N2?wid=800&hei=800&fmt=jpeg&qlt=90" },
    ],
  };

  return (
    <section className="max-w-7xl mx-auto px-6 py-12">
      <h2 className="flex items-center gap-2 text-4xl font-bold mb-8">
        <FaApple /> Apple katalogi
      </h2>

      {/* Category Tabs */}
      <div className="flex flex-wrap gap-4 mb-10">
        {["iphone", "macbook", "ipad", "airpods"].map((c) => (
          <button
            key={c}
            onClick={() => setCategory(c)}
            className={`px-5 py-2.5 rounded-2xl border transition font-medium ${
              category === c
                ? "bg-black text-white shadow"
                : "bg-white hover:bg-gray-100"
            }`}
          >
            {c === "iphone" && "iPhone"}
            {c === "macbook" && "MacBook"}
            {c === "ipad" && "iPad"}
            {c === "airpods" && "AirPods"}
          </button>
        ))}
      </div>

      {/* Products */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {products[category].map((p) => (
          <div
            key={p.name}
            className="border rounded-3xl p-5 shadow-sm hover:shadow-2xl transition bg-gradient-to-b from-gray-50 to-white"
          >
            <div className="rounded-2xl bg-gray-100 h-64 flex items-center justify-center mb-4 overflow-hidden">
              <img src={p.img} alt={p.name} className="object-contain h-full" />
            </div>

            <h3 className="text-lg font-semibold">{p.name}</h3>
            <p className="font-bold mt-1">{p.price}</p>

            <button className="mt-4 w-full bg-black text-white py-2.5 rounded-xl hover:opacity-80 transition">
              Sotib olish
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
