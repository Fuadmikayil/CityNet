import Image from "next/image";

const PromoBanner = () => {
  return (
    <div className="bg-[#a43b4c] mx-4 sm:mx-8 md:mx-16 lg:mx-28 rounded-2xl text-white flex flex-col lg:flex-row items-center justify-between px-6 sm:px-10 py-10 sm:py-12 relative overflow-hidden">
      
      {/* Sol hissə - mətn */}
      <div className="w-full lg:max-w-lg z-10 text-center lg:text-left">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
          Pulsuz yeni nəsil Wi-Fi 5 ruter
        </h2>
        <p className="text-base sm:text-lg mb-6">
          Archer C20 AC750 Wireless Dual Band 5 Ghz Router
        </p>
        <button className="bg-white text-[#a43b4c] px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg font-medium hover:opacity-90 transition">
          Ətraflı
        </button>
      </div>

      {/* Sağ hissə - şəkil */}
      <div className="mt-10 lg:mt-0 lg:absolute right-4 md:right-10 bottom-0 z-50">
        <Image
          src="/router.webp"
          alt="Wi-Fi Router"
          width={240}
          height={240}
          className="object-contain w-[180px] sm:w-[240px] lg:w-[320px] h-auto"
        />
      </div>

      {/* Dekorativ dairə */}
      <div className="absolute right-0 top-0 w-[250px] sm:w-[300px] lg:w-[400px] h-[250px] sm:h-[300px] lg:h-[400px] bg-[#00000010] rounded-full z-0 translate-x-1/3 -translate-y-1/3"></div>
    </div>
  );
};

export default PromoBanner;
