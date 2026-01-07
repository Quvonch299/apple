"use client";

export default function Home() {
  const watches = [
    {
      title: "Series 11",
      desc: "Eng yangi chip, kattaroq displey va yangi sog‘liq sensorlari",
      image:
        "https://www.apple.com/newsroom/images/2025/09/apple-debuts-apple-watch-series-11-featuring-groundbreaking-health-insights/article/Apple-Watch-Series-11-hero-250909_big.jpg.large.jpg",
    },
    {
      title: "Series 10",
      desc: "Eng nozik dizayn va har doim yoqilgan ekran",
      image:
        "https://www.apple.com/newsroom/images/2024/09/introducing-apple-watch-series-10/article/Apple-Watch-Series-10-hero-240909_big.jpg.large.jpg",
    },
    {
      title: "Ultra 2",
      desc: "Titanium korpus, 3000 nit yorqinlik",
      image:
        "https://www.apple.com/newsroom/images/2024/09/apple-watch-ultra-2-now-available-in-black-titanium/article/Apple-Watch-Ultra-2-hero-240909_big.jpg.large.jpg",
    },
    {
      title: "SE (3-gen)",
      desc: "Eng arzon, lekin kuchli funksiyalar bilan",
      image:
        "https://www.apple.com/v/apple-watch-se-3/b/images/meta/apple-watch-se-3__d0wwc67lzg02_og.png",
    },
    {
      title: "Series 9",
      desc: "Double Tap funksiyasi bilan",
      image:
        "https://www.apple.com/v/apple-watch-series-9/a/images/overview/hero/hero__d1y7q6h9n2e2_large.jpg",
    },
    {
      title: "Nike Edition",
      desc: "Sport dizayn va maxsus yuzlar",
      image:
        "https://www.apple.com/v/watch/bz/images/overview/nike/hero_nike__c0q2z1j5p6y2_large.jpg",
    },
    {
      title: "Hermès",
      desc: "Luks dizayn va teri remen",
      image:
        "https://www.apple.com/v/watch/bt/images/overview/hermes/hero_hermes__f5q2z1j5p6y2_large.jpg",
    },
    {
      title: "Ultra Titanium",
      desc: "Eng mustahkam batareya",
      image:
        "https://www.apple.com/newsroom/images/product/watch/standard/Apple-Watch-Ultra-3up-hero-220907.jpg.landing-big_2x.jpg",
    },
    {
      title: "Series 11 Black",
      desc: "Qora titan — yangi trend",
      image:
        "https://www.apple.com/v/apple-watch-series-11/c/images/overview/product-viewer/product_landing_endframe__eaytrp6zz6c2_large.jpg",
    },
    {
      title: "Future Edition",
      desc: "Kelajakdagi innovatsiyalar",
      image:
        "https://www.apple.com/v/watch/bt/images/meta/apple-watch__ywfuk5wnf1u2_og.png",
    },
  ];

  return (
    <main
      className="relative min-h-screen bg-cover bg-center bg-no-repeat text-white"
      style={{
        backgroundImage:
          "url('https://www.apple.com/v/apple-watch-series-11/c/images/overview/fitness/fitness_hero__f9uqyx14gmmq_xlarge_2x.jpg')",
      }}
    >
      {/* Dark overlay for text/card readability */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-16 md:py-24">
        <div className="text-center mb-16 md:mb-24">
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-4">
            Apple Watch
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Kelajak qo‘lingizda. Eng kuchli, eng aqlli, eng chiroyli soat.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
          {watches.map((watch, index) => (
            <div
              key={index}
              className="group relative bg-gray-900/70 backdrop-blur-md rounded-2xl overflow-hidden border border-gray-700/70 hover:border-blue-500/60 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/30"
            >
              <div className="h-48 md:h-56 relative overflow-hidden">
                <img
                  src={watch.image}
                  alt={watch.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-400 transition-colors">
                  {watch.title}
                </h3>
                <p className="text-gray-300 text-sm mb-4">
                  {watch.desc}
                </p>
                <button className="text-sm font-medium text-blue-400 hover:text-blue-300">
                  Batafsil →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
