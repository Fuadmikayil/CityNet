import { FiPhone } from "react-icons/fi";
import { BsTv, BsInfoCircle } from "react-icons/bs";
import { BiSolidBadgeCheck } from "react-icons/bi";
import { PiTelevisionSimpleBold } from "react-icons/pi";
import { PiMedalLight } from "react-icons/pi";

const PlanCard = ({
  title,
  speed,
  features,
  price,
  hasTVBox,
  hasSportPlus,
  hasPhoneLine,
}) => {
  return (
      <div className="border  border-gray-200 rounded-2xl p-6 shadow-sm w-full max-w-sm flex flex-col justify-between bg-white">
      <div>
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-lg font-semibold">{title}</h3>
          {title.includes("Telefon") && (
            <BsInfoCircle className="text-[#a43b4c] w-5 h-5 mt-1" />
          )}
        </div>
        <div className="flex flex-col items-center justify-center mb-6">
          <div className="relative w-24 h-24">
            <svg className="w-full h-full rotate-[-90deg]">
              <circle
                cx="50%"
                cy="50%"
                r="38"
                stroke="#f0f0f0"
                strokeWidth="8"
                fill="none"
              />
              <circle
                cx="50%"
                cy="50%"
                r="38"
                stroke="#e5a0ab"
                strokeWidth="8"
                strokeDasharray="238"
                strokeDashoffset="60"
                strokeLinecap="round"
                fill="none"
              />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <div className="text-2xl font-bold">{speed}</div>
              <div className="text-xs text-gray-500">mb/s</div>
            </div>
          </div>
        </div>

        <ul className="space-y-3 text-sm text-gray-800">
          {features.map((item, idx) => (
            <li key={idx} className="flex items-center gap-2">
              <BiSolidBadgeCheck className="text-[#a43b4c] w-5 h-5" />
              {item}
            </li>
          ))}

          {hasTVBox && (
            <li className="flex items-center gap-2">
              <BsTv className="text-[#a43b4c] w-5 h-5" />
              PULSUZ TV Box
            </li>
          )}
        </ul>
        <div className="mt-4 space-y-2">
          {hasTVBox && (
            <div className="bg-gray-100 rounded-lg px-4 py-2 flex justify-between items-center text-sm">
              <div className="flex items-center gap-2">
                <PiTelevisionSimpleBold className="text-[#a43b4c] w-5 h-5" />
                250-dək kanal
              </div>
              <span className="text-xs text-[#a43b4c] font-medium cursor-pointer">Ətraflı</span>
            </div>
          )}
          {hasSportPlus && (
            <div className="bg-gray-100 rounded-lg px-4 py-2 flex justify-between items-center text-sm">
              <div className="flex items-center gap-2">
                <PiMedalLight className="text-[#a43b4c] w-5 h-5" />
                Sport Plus
              </div>
              <span className="text-xs text-gray-500">2 ay</span>
            </div>
          )}
          {hasPhoneLine && (
            <div className="bg-gray-100 rounded-lg px-4 py-2 flex items-center text-sm gap-2">
              <FiPhone className="text-[#a43b4c] w-5 h-5" />
              Ev telefon xətti
            </div>
          )}
        </div>
      </div>
      <div className="mt-6">
        <div className="flex items-center justify-between">
          <span className="text-lg font-semibold">{price} ₼ / ayda</span>
          <button className="bg-[#a43b4c] text-white px-4 py-2 rounded-lg hover:bg-[#922f40] transition text-sm">
            Qoşul
          </button>
        </div>
        <div className="text-center text-sm mt-3 text-[#a43b4c] cursor-pointer">
          Ətraflı
        </div>
      </div>
    </div>
  );
};

export default PlanCard;
