import {
  PiLightningThin,
  PiShieldCheckThin,
  PiWifiHighThin,
  PiHeadsetThin,
} from "react-icons/pi";

export default function WhyCityNet() {
  const reasons = [
    {
      title: "Yüksək sürət",
      description:
        "Şəbəkəyə qoşulmuş bütün cihazlar eyni anda yüksək sürətlə işləyir.",
      icon: PiLightningThin,
    },
    {
      title: "Cihazlar qorunur",
      description:
        "CityNet sistemindəki yüksək təhlükəsizlik sayəsində şəbəkəyə daxil olmuş bütün ailə üzvlərinin təhlükəsizliyi və məxfiliyi etibarlı şəkildə qorunur.",
      icon: PiShieldCheckThin,
    },
    {
      title: "Kəsintisiz qoşulma",
      description:
        "Evdəki bütün cihazlar şəbəkəyə qoşulduqda belə internet kəsintisiz işləyir.",
      icon: PiWifiHighThin,
    },
    {
      title: "Əvəzedilməz xidmət",
      description:
        "CityNet 7/24 aktiv müştəri dəstək xətti və sosial şəbəkələrdə sürətli cavablandırma ilə müştərilərinə yüksək keyfiyyətli xidmət təqdim edir.",
      icon: PiHeadsetThin,
    },
  ];

  return (
    <section className="py-10 px-4 sm:px-6 md:px-20 lg:px-32 bg-white">
      <h2 className="text-2xl sm:text-3xl font-bold text-center mb-10">
        CityNet-i seçmək üçün səbəblər
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {reasons.map((reason, index) => (
          <div
            key={index}
            className="bg-gray-100 rounded-xl p-6 flex flex-col gap-4 shadow-sm hover:shadow-md transition"
          >
            <div className="text-red-500 bg-white w-12 h-12 flex items-center justify-center rounded-full shadow text-2xl">
              <reason.icon />
            </div>
            <h3 className="text-lg sm:text-xl font-semibold">
              {reason.title}
            </h3>
            <p className="text-gray-700 text-sm sm:text-base">
              {reason.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
