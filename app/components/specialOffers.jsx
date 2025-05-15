import Image from "next/image";

const offers = [
  {
    title: "Dəvət et, qazan kampaniyası",
    description:
      "Dostunuzu dəvət edin, növbəti ay həm siz, həm dostunuz 25 AZN əlavə balans qazanın!",
    image: "/tk1.webp",
  },
  {
    title: "Ən yeni nəsil cihazlar istifadə müddətinə pulsuz!",
    description:
      "CityNet müştərilərinə ən yeni nəsil Wi-Fi ruter və TV Box-u istifadə müddətinə pulsuz təqdim edir.",
    image: "/tk2.webp",
  },
  {
    title: "1+1 kampaniyası",
    description:
      "Kampaniyadan yalnız www.citynet.az veb saytı vasitəsilə xidmətlərə qoşulmaqla yararlanmaq mümkündür.",
    image: "/tk3.webp",
  },
];

const SpecialOffers = () => {
  return (
    <section className="px-4 sm:px-8 md:px-16 lg:px-28 py-16">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-10 text-gray-900">
        Xüsusi təkliflər
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {offers.map((offer, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100 flex flex-col"
          >
            <div className="w-full h-56 relative">
              <Image
                src={offer.image}
                alt={offer.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6 flex flex-col flex-grow justify-between">
              <div>
                <h3 className="text-lg font-semibold text-[#a43b4c] mb-2">
                  {offer.title}
                </h3>
                <p className="text-gray-600 text-sm">{offer.description}</p>
              </div>
              <div className="mt-6">
                <button className="w-10 h-10 flex items-center justify-center rounded-md bg-[#a43b4c] text-white hover:opacity-90 transition">
                  <span className="text-xl">&#8594;</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SpecialOffers;
