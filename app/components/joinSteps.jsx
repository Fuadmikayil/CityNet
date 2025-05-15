import Image from "next/image";

const JoinSteps = () => {
  const steps = [
    {
      number: "1",
      title: "CityNet-lə əlaqə saxla",
      description:
        "İstər *1177, citynet.az, istərsə də sosial media hesablarımız və ya business@citynet.az olsun, bizimlə 24/7 əlaqə saxlaya bilərsən.",
    },
    {
      number: "2",
      title: "Quraşdırmaya hazır ol",
      description:
        "Razılaşdırılmış vaxtda əməkdaşlarımız ünvana gəlib, qısa müddətdə internet xətti çəkəcək və quraşdırma işlərini həyata keçirəcək.",
    },
    {
      number: "3",
      title: "Ödəniş et",
      description:
        "Əməkdaşlarımızdan istifadə təlimatı aldıqdan sonra seçdiyin tarifə uyğun ödəniş et.",
    },
    {
      number: "4",
      title: "Artıq CityNet-lisən!",
      description:
        "Hazırsan! CityNet-in yüksək sürəti ilə biznesini inkişaf etdir.",
    },
  ];

  return (
    <div className="flex flex-col lg:flex-row items-center gap-12 px-4 sm:px-8 md:px-16 lg:px-28 py-12 md:py-16">
      
      {/* Text section */}
      <div className="w-full lg:w-1/2">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 text-center lg:text-left">
          CityNet-ə necə qoşulmaq olar?
        </h2>
        <p className="text-sm sm:text-base text-gray-500 mb-8 text-center lg:text-left">
          Sadəcə bir neçə addıma yüksək sürətə qoşul!
        </p>
        <div className="space-y-6 sm:space-y-8">
          {steps.map((step) => (
            <div key={step.number} className="flex items-start gap-4">
              <div className="flex-shrink-0 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#fcebed] text-[#ea3f49] font-bold flex items-center justify-center text-base sm:text-lg">
                {step.number}
              </div>
              <div>
                <h4 className="font-semibold text-base sm:text-lg mb-1">{step.title}</h4>
                <p className="text-gray-600 text-sm sm:text-base">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Image section */}
      <div className="w-full lg:w-1/2 mt-8 lg:mt-0">
        <Image
          src="/connectImg.webp" // şəkil `public/` qovluğunda olmalıdır
          alt="CityNet qoşulma addımları"
          width={600}
          height={400}
          className="rounded-xl object-cover w-full h-auto"
        />
      </div>
    </div>
  );
};

export default JoinSteps;
