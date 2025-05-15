"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import {
  FiMapPin, FiUser, FiPhone, FiX, FiMenu,
  FiWifi, FiBarChart2, FiClipboard, FiBook,
  FiMonitor, FiMessageCircle
} from "react-icons/fi";

const navItems = [
  { label: "Tariflər", icon: <FiWifi /> },
  { label: "Kampaniyalar", icon: <FiBarChart2 /> },
  { label: "Bizimlə əlaqə", icon: <FiClipboard /> },
  { label: "Xəbərlər", icon: <FiBook /> },
  { label: "Onlayn ödəmə", icon: <FiMonitor /> },
  { label: "Dəstək", icon: <FiMessageCircle /> },
];

const Header = () => {
  const [userType, setUserType] = useState("ferdi");
  const [language, setLanguage] = useState("az");
  const [menuOpen, setMenuOpen] = useState(false);

  // Animasiya üçün referenslər
  const logoRef = useRef(null);
  const buttonsRef = useRef([]);
  const langRef = useRef(null);

  useEffect(() => {
    gsap.from(logoRef.current, {
      opacity: 0,
      y: -20,
      duration: 0.6,
      ease: "power2.out"
    });

    gsap.from(buttonsRef.current, {
      opacity: 0,
      y: 20,
      duration: 0.6,
      ease: "power2.out",
      stagger: 0.1,
      delay: 0.3
    });

    gsap.from(langRef.current, {
      opacity: 0,
      scale: 0.8,
      duration: 0.5,
      delay: 0.6,
      ease: "back.out(1.7)"
    });
  }, []);

  return (
    <>
      <header className="w-full bg-white px-4 sm:px-6 py-3 border-gray-300 border-b">
        <div className="max-w-7xl mx-auto flex flex-wrap lg:flex-nowrap justify-between items-center gap-4">
          <div className="flex items-center gap-4" ref={logoRef}>
            <Image src="/LogoWeb.webp" alt="CityNet Logo" width={110} height={40} className="object-contain" />
          </div>

          <div className="hidden md:flex bg-gray-100 rounded-full overflow-hidden text-sm font-semibold" ref={langRef}>
            {["az", "en", "ru"].map((lang) => (
              <button
                key={lang}
                className={`px-3 py-2 capitalize transition cursor-pointer ${
                  language === lang ? "bg-[#B72C48] text-white" : "text-gray-700"
                }`}
                onClick={() => setLanguage(lang)}
              >
                {lang.toUpperCase()}
              </button>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-4 flex-wrap" ref={(el) => buttonsRef.current[0] = el}>
            <button className="cursor-pointer flex items-center gap-2 border border-gray-300 px-4 py-2 rounded-full text-sm text-gray-800 font-medium">
              <FiPhone /> *1177
            </button>
            <button className="cursor-pointer px-4 py-2 rounded-full bg-gradient-to-r from-[#370019] to-[#B72C48] text-white text-sm font-semibold">
              CityNet TV izlə
            </button>
            <button className="cursor-pointer px-4 py-2 rounded-full bg-[#B72C48] text-white text-sm font-semibold">
              Qoşul
            </button>
            <div className="flex gap-2">
              <button className="cursor-pointer w-10 h-10 flex items-center justify-center border rounded-full text-xl">
                <FiMapPin />
              </button>
              <button className="cursor-pointer w-10 h-10 flex items-center justify-center border rounded-full text-xl">
                <FiUser />
              </button>
            </div>
          </div>

          <button
            className="cursor-pointer md:hidden flex items-center justify-center border border-gray-300 w-10 h-10 rounded-full"
            onClick={() => setMenuOpen(true)}
          >
            <FiMenu className="text-xl" />
          </button>
        </div>
      </header>
    </>
  );
};

export default Header;
