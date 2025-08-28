import React from "react";

const logos = [
  "/images/logo1.jpeg",
  "/images/logo2.jpeg",
  "/images/logo3.jpeg",
  "/images/logo4.jpeg",
];

const ClientLogosSlider = () => {
  return (
    <div className="bg-[#EADBCE] py-10 overflow-hidden">
      <div className="text-center">
        <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal text-black dark:text-white font-semibold">
          Our Brand Partners.
        </h3>
      </div>

      {/* Outer wrapper with center alignment */}
      <div className="overflow-hidden w-full flex justify-center">
        {/* Slider container with reduced width */}
        <div className="w-[80%] overflow-hidden">
          <div className="flex animate-marquee whitespace-nowrap">
            {[...Array(2)].map((_, i) => (
              <div key={i} className="flex">
                {logos.map((logo, idx) => (
                  <div
                    key={`${i}-${idx}`}
                    className="w-20 h-14 mx-3 flex items-center justify-center bg-white rounded shadow-sm"
                  >
                    <img
                      src={logo}
                      alt={`Logo ${idx + 1}`}
                      className="object-contain max-h-full max-w-full"
                    />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientLogosSlider;
