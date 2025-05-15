"use client";

import { useState } from "react";
import Select from "react-select";

const rawCityList = [
  "Abşeron (Qobu qəsəbəsi)",
  "Abşeron (Görədil qəsəbəsi)",
  "Abşeron (Güzdək qəsəbəsi)",
  "Abşeron (Hökməli qəsəbəsi)",
  "Abşeron (Ceyranbatan qəsəbəsi)",
  "Abşeron (Məmmədli qəsəbəsi)",
  "Abşeron (Masazır qəsəbəsi)",
  "Abşeron (Mehdiabad qəsəbəsi)",
  "Abşeron (Novxanı qəsəbəsi)",
  "Abşeron (Saray qəsəbəsi)",
  "Ağdam",
  "Ağdaş",
  "Ağcabədi",
  "Ağstafa",
  "Ağsu",
  "Astara",
  "Bakı",
  "Bakı (28 May qəsəbəsi)",
  "Bakı (Ələt qəsəbəsi)",
  "Bakı (Albalılıq bağları)",
  "Bakı (Əmircan qəsəbəsi)",
  "Bakı (Bahar qəsəbəsi)",
  "Bakı (Bakıxanov qəsəbəsi)",
  "Bakı (Biləcəri qəsəbəsi)",
  "Bakı (Bilgəh qəsəbəsi)",
  "Bakı (Binəqədi qəsəbəsi)",
  "Bakı (Binə qəsəbəsi)",
  "Bakı (Bülbülə qəsəbəsi)",
  "Bakı (Buzovna qəsəbəsi)",
  "Bakı (Qala qəsəbəsi)",
  "Bakı (Qızıldaş qəsəbəsi)",
  "Balakən",
  "Bərdə",
  "Füzuli (Horadiz)",
  "Qəbələ",
  "Gədəbəy",
  "Qax",
  "Gəncə",
  "Qazax",
  "Xırdalan",
  "Xızı",
  "Lənkəran",
  "Masallı",
  "Mingəçevir",
  "Naftalan",
  "Neftçala",
  "Tərtər",
  "Tovuz",
  "Yevlax",
];

const groupCities = () => {
  const groups = {};

  rawCityList.forEach((city) => {
    const match = city.match(/(.*?) \((.*?)\)/);
    if (match) {
      const parent = match[1].trim();
      if (!groups[parent]) groups[parent] = [];
      groups[parent].push(city);
    } else {
      if (!groups[city]) groups[city] = [];
    }
  });

  return Object.entries(groups).map(([label, children]) => ({
    label,
    options: children.map((c) => ({ label: c, value: c })),
  }));
};

const AddressChecker = () => {
  const [city, setCity] = useState("");
  const [street, setStreet] = useState("");
  const [building, setBuilding] = useState("");

  const isButtonDisabled = !city || !street || !building;

  return (
    <div className="max-w-[1280px] mx-auto mt-10 bg-white rounded-3xl shadow-[0_15px_60px_rgba(0,0,0,0.06)] p-6 md:p-8">
      <h3 className="text-lg font-semibold mb-4 text-gray-800">
        Ünvanınızı yoxlayın
      </h3>

      <div className="flex flex-wrap md:flex-nowrap gap-4 items-end">
        {/* Şəhər seçimi */}
        <div className="flex flex-col w-full cursor-pointer  md:w-[28%]">
          <label className="text-sm  text-gray-500 mb-1">Şəhər</label>
          <div className="cursor-pointer">
            <Select
              options={groupCities()}
              value={city ? { label: city, value: city } : null}
              onChange={(option) => setCity(option?.value || "")}
              placeholder="Şəhər seçin"
              isSearchable
              styles={{
                control: (base, state) => ({
                  ...base,
                  borderRadius: "0.75rem", // rounded-xl
                  borderColor: "#d1d5db", // tailwind border-gray-300
                  boxShadow: state.isFocused
                    ? "0 0 0 2px #3b82f6"
                    : base.boxShadow, // ring-2 effect
                  cursor: "pointer",
                  "&:hover": {
                    borderColor: "#9e2039",
                  },
                }),
                menu: (base) => ({
                  ...base,
                  zIndex: 50,
                  maxHeight: 300,
                  overflowY: "auto",
                }),
              }}
            />
          </div>
        </div>

        {/* Küçə */}
        <div className="flex flex-col w-full md:w-[28%]">
          <label className="text-sm text-gray-500 mb-1">Küçə</label>
          <input
            type="text"
            placeholder="Küçə daxil edin"
            value={street}
            onChange={(e) => setStreet(e.target.value)}
            className="border rounded-xl px-4 py-2 text-gray-800 placeholder-gray-400 outline-none focus:ring-2 focus:ring-[#B72C48] transition cursor-pointer"
          />
        </div>

        {/* Ev */}
        <div className="flex flex-col w-full md:w-[18%]">
          <label className="text-sm text-gray-500 mb-1">Ev</label>
          <input
            type="text"
            placeholder="Bina nömrəsi"
            value={building}
            onChange={(e) => setBuilding(e.target.value)}
            className="border rounded-xl px-4 py-2 text-gray-800 placeholder-gray-400 outline-none focus:ring-2 focus:ring-[#B72C48] transition cursor-pointer"
          />
        </div>

        {/* Yoxla Button */}
        <div className="w-full md:w-[26%]">
          <button
            disabled={isButtonDisabled}
            className={`w-full h-full mt-5 md:mt-0 px-4 py-3 rounded-xl font-semibold text-white text-sm transition ${
              isButtonDisabled
                ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                : "bg-[#B72C48] hover:bg-[#9e2039] cursor-pointer"
            }`}
          >
            Mümkünlüyü yoxla
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddressChecker;
