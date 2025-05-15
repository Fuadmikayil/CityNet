"use client";

import { useState } from "react";
import PlanCard from "./planCard";

// Burda plan məlumatlarını birbaşa daxil edirik
const planData = {
  all: [
    {
      title: "İnternet",
      speed: "100",
      features: ["Fiber Optik", "Wi-Fi ruter PULSUZ"],
      price: 25,
    },
    {
      title: "İnternet + TV",
      speed: "100",
      features: ["Fiber Optik", "Wi-Fi ruter PULSUZ"],
      price: 31,
      hasTVBox: true,
      hasSportPlus: true,
    },
    {
      title: "İnternet + TV + Telefon xətti",
      speed: "100",
      features: ["Fiber Optik", "Wi-Fi ruter PULSUZ"],
      price: 33,
      hasTVBox: true,
      hasSportPlus: true,
      hasPhoneLine: true,
    },
  ],
  "100": [
    {
      title: "İnternet",
      speed: "100",
      features: ["Fiber Optik", "Wi-Fi ruter PULSUZ"],
      price: 25,
    },
  ],
  "150": [
    {
      title: "İnternet",
      speed: "150",
      features: ["Fiber Optik", "Wi-Fi ruter PULSUZ"],
      price: 30,
    },
  ],
  "250": [
    {
      title: "İnternet + TV",
      speed: "250",
      features: ["Fiber Optik", "Wi-Fi ruter PULSUZ"],
      price: 40,
      hasTVBox: true,
      hasSportPlus: true,
    },
  ],
  "500": [
    {
      title: "İnternet + TV + Telefon xətti",
      speed: "500",
      features: ["Fiber Optik", "Wi-Fi ruter PULSUZ"],
      price: 50,
      hasTVBox: true,
      hasSportPlus: true,
      hasPhoneLine: true,
    },
  ],
  "750": [
    {
      title: "Premium İnternet",
      speed: "750",
      features: ["Fiber Optik", "Wi-Fi ruter PULSUZ", "VIP texniki dəstək"],
      price: 65,
    },
  ],
};

export default function TarifTabs() {
  const [activeTab, setActiveTab] = useState("all");

  const tabs = [
    { id: "all", label: "Bütün tariflər" },
    { id: "100", label: "100 Mb/s" },
    { id: "150", label: "150 Mb/s" },
    { id: "250", label: "250 Mb/s" },
    { id: "500", label: "500 Mb/s" },
    { id: "750", label: "750 Mb/s" },
  ];

  const filteredPlans = planData[activeTab] || [];

  return (
    <section className="max-w-7xl mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold mb-6">Tariflərimiz</h2>

      {/* Tablar */}
      <div className="border-b border-gray-300">
        <div className="flex space-x-6 overflow-x-auto">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`py-2 cursor-pointer whitespace-nowrap font-medium text-sm border-b-2 transition-all duration-300 ${
                activeTab === tab.id
                  ? "text-[#a43b4c] border-[#a43b4c]"
                  : "text-gray-600 border-transparent hover:text-black"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Planlar */}
      <div className="mt-6">
        {filteredPlans.length > 0 ? (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredPlans.map((plan, index) => (
              <PlanCard key={index} {...plan} />
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-500 mt-10">
            Bu kateqoriyada heç bir plan mövcud deyil.
          </p>
        )}
      </div>
    </section>
  );
}
