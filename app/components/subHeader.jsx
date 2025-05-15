"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import {
  FiWifi,
  FiBarChart2,
  FiClipboard,
  FiBook,
  FiMonitor,
  FiMessageCircle,
} from "react-icons/fi";

const navItems = [
  { label: "Tariflər", icon: <FiWifi /> },
  { label: "Kampaniyalar", icon: <FiBarChart2 /> },
  { label: "Bizimlə əlaqə", icon: <FiClipboard /> },
  { label: "Xəbərlər", icon: <FiBook /> },
  { label: "Onlayn ödəmə", icon: <FiMonitor /> },
  { label: "Dəstək", icon: <FiMessageCircle /> },
];

const SubHeader = () => {
  const buttonsRef = useRef([]);

  useEffect(() => {
    gsap.from(buttonsRef.current, {
      opacity: 0,
      y: 10,
      duration: 0.6,
      ease: "power2.out",
      stagger: 0.1,
      delay: 0.2,
    });
  }, []);

  return (
    <nav className="w-full bg-[#f9f9f9] border-b border-gray-300 hidden md:block">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-wrap justify-center sm:justify-between items-center text-sm text-gray-700 font-medium">
          {navItems.map((item, index) => (
            <button
              key={item.label}
              ref={(el) => (buttonsRef.current[index] = el)}
              className={`cursor-pointer flex items-center gap-2 px-3 py-3 sm:px-4 sm:py-4 ${
                index !== 0 ? "border-l border-gray-200" : ""
              }`}
            >
              <span className="text-xl">{item.icon}</span>
              <span>{item.label}</span>
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default SubHeader;
