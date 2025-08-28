import React from "react";

const countries = [
  { name: "USA", image: "/images/usamap.jpeg" },
  { name: "UK", image: "/images/ukmap.jpeg" },
  { name: "UAE", image: "/images/uaemap.jpeg" },
  { name: "PAKISTAN", image: "/images/pakmap.jpeg" },
];

const PropertiesSection = () => {
  return (
    <div className="bg-[#EADBCE] px-4 py-10 md:py-16 text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-[#6E1D1D] mb-6 tracking-wide">
        60+ PROPERTIES
      </h2>

      <p className="max-w-3xl mx-auto text-sm md:text-base text-[#3a2e2e] leading-relaxed mb-10">
        With over a decade of experience in short-term rentals, Suit Success
        operates across the USA, UK, UAE, and Pakistan. Our global presence
        gives us a unique understanding of diverse audiences and market
        dynamics, allowing us to tailor our services to meet the specific needs
        of property owners and guests worldwide. At Suit Success, our
        international expertise ensures your property excels, no matter where
        it’s located.
      </p>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 justify-items-center items-center">
        {countries.map((country, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className="w-24 h-24 md:w-28 md:h-28 bg-white rounded flex items-center justify-center overflow-hidden">
              <img
                src={country.image}
                alt={country.name}
                className="object-contain w-full h-full"
              />
            </div>
            <p className="mt-2 text-[#6E1D1D] font-semibold text-sm md:text-base">
              {country.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PropertiesSection;
