import Image from "next/image";

const paymentOptions = [
  {
    name: "Hesab.az",
    logo: "/payment1.webp",
    link: "#",
  },
  {
    name: "MilliÖn",
    logo: "/payment2.webp",
    link: "#",
  },
  {
    name: "e-Pul.az",
    logo: "/payment3.webp",
    link: "#",
  },
  {
    name: "MPAY",
    logo: "/payment4.webp",
    link: "#",
  },
];

const OnlinePayment = () => {
  return (
    <section className="px-4 sm:px-8 md:px-16 lg:px-28 py-16">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-2">
        Onlayn ödəniş
      </h2>
      <p className="text-gray-500 mb-8">Abunə haqqını buradan ödəyin:</p>

      <div className="bg-[#f7f7f7] p-6 sm:p-10 rounded-2xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
        {paymentOptions.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-xl p-4 flex items-center justify-between shadow-sm border border-gray-100"
          >
            <div className="flex items-center gap-3">
              <Image
                src={item.logo}
                alt={item.name}
                width={40}
                height={40}
                className="object-contain"
              />
              <span className="text-gray-800 font-medium">{item.name}</span>
            </div>
            <a
              href={item.link}
              className="w-10 h-10 flex items-center justify-center bg-[#fcebed] text-[#a43b4c] rounded-md hover:bg-[#f9d8dc] transition"
            >
              <span className="text-xl">&#8594;</span>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OnlinePayment;
