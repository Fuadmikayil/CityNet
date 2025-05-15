import {
    BsFacebook,
    BsTwitterX,
    BsLinkedin,
    BsYoutube,
    BsInstagram,
  } from "react-icons/bs";
  import {
    PiWifiHighThin,
    PiClipboardTextThin,
    PiBriefcaseThin,
    PiNewspaperThin,
    PiCreditCardThin,
    PiChatsThin,
  } from "react-icons/pi";
  
  const Footer = () => {
    const navItems = [
      { label: "Tariflər", icon: PiWifiHighThin },
      { label: "Kampaniyalar", icon: PiClipboardTextThin },
      { label: "Bizimlə əlaqə", icon: PiBriefcaseThin },
      { label: "Xəbərlər", icon: PiNewspaperThin },
      { label: "Onlayn ödəmə", icon: PiCreditCardThin },
      { label: "Dəstək", icon: PiChatsThin },
    ];
  
    return (
      <footer className="bg-[#3a3a3a] text-white px-4 sm:px-6 md:px-12 lg:px-28 pt-12 pb-8">
        {/* Top Section */}
        <div className="flex flex-col lg:flex-row justify-between gap-8 border-b border-gray-600 pb-8">
          {/* Logo & Links */}
          <div>
            <h1 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">CityNet</h1>
            <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 gap-3 text-sm">
              {navItems.map((item, index) => (
                <button
                  key={index}
                  className="bg-[#4a4a4a] hover:bg-[#5a5a5a] transition px-3 py-2 rounded-md flex items-center gap-2 w-full"
                >
                  <item.icon className="text-lg" />
                  <span>{item.label}</span>
                </button>
              ))}
            </div>
          </div>
  
          {/* Social Media */}
          <div className="flex flex-wrap gap-3 items-start">
            {[BsFacebook, BsTwitterX, BsLinkedin, BsYoutube, BsInstagram].map(
              (Icon, idx) => (
                <a
                  key={idx}
                  href="#"
                  className="bg-[#4a4a4a] hover:bg-[#5c5c5c] transition p-2 rounded-md"
                >
                  <Icon className="text-lg sm:text-xl" />
                </a>
              )
            )}
          </div>
        </div>
  
        {/* ...qalan hissə eyni qalır */}
      </footer>
    );
  };
  
  export default Footer;
  