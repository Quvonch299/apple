// components/AirPodsSection.jsx

export default function AirPodsSection() {
  return (
    <section className="relative min-h-[80vh] w-full overflow-hidden bg-black text-white">
      {/* Background video */}
      <div className="absolute inset-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-80"
        >
          <source src="https://www.apple.com/105/media/us/airpods-max/2024/e8f376d6-82b2-40ca-8a22-5f87de755d6b/anim/max-loop/xlarge_2x.mp4" type="video/mp4" />
        </video>

        {/* Overlay (matn oson o‘qilishi uchun) */}
        <div className="absolute inset-0 bg-black/50" />
      </div>

    

       <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white px-6 text-center">
      <h1 className="text-7xl font-bold mb-4">404</h1>

      <p className="text-gray-400 text-lg mb-8">
        Kechirasiz, siz qidirayotgan sahifa topilmadi.
      </p>

    </div>
    </section>
  );
}
