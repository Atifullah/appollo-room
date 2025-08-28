import React, { useState } from "react";
import { BsTelephone } from "react-icons/bs";
import { Link } from "react-router-dom";
import FaqComponent from "../Components/FaqComponent";

const Faqs = () => {
  const [links, setLinks] = useState([
    {
      id: 1,
      linkName: "General Questions",
      goLink: "#general-faq",
      isActive: true,
    },
    {
      id: 2,
      linkName: "Service & Process Faq's",
      goLink: "#service-faq",
      isActive: false,
    },
    {
      id: 3,
      linkName: "Pricing & Income Faq's",
      goLink: "#pricing-faq",
      isActive: false,
    },
    {
      id: 4,
      linkName: "Operations & Support",
      goLink: "#support-faq",
      isActive: false,
    },
    {
      id: 5,
      linkName: "Locations & Expansion",
      goLink: "#location-faq",
      isActive: false,
    },
  ]);

  const generalFaq = [
    {
      id: 1,
      que: "How much does Apollo Rooms charge?",
      ans: "Apollo Rooms is a full-service Airbnb and short-term rental management company. We help property owners, investors, and hospitality businesses turn furnished properties into high-performing vacation rentals. From design and listing to daily operations and revenue management—we handle everything.",
    },
    {
      id: 2,
      que: "Who can benefit from your services?",
      ans: "We work with: • Individual property owners (apartments, villas, homes) • Real estate investors with multiple units • Boutique hotels & serviced apartments • Developers building STR-ready inventory  Whether you have one listing or an entire building, we help you scale with ease",
    },
    {
      id: 3,
      que: "Do I have to be located in the same city/country as my property?",
      ans: "No! We specialize in remote property management. Owners can live anywhere in the world—our systems and local partners handle everything on the ground.",
      showAns: false,
    },
  ];

  const supportFaqs = [
    {
      id: 1,
      que: "What platforms do you list on?",
      ans: "We list your property on Airbnb, Booking.com, Agoda, and even Google for maximum exposure. We also offer direct booking website support for hotels and larger portfolios.",
      showAns: false,
    },
    {
      id: 2,
      que: "Can you help me launch my first Airbnb?",
      ans: "Absolutely. We offer turnkey setup services including design advice, photography, pricing, and platform onboarding. You’ll go from 'empty space' to 'booked out' in a matter of weeks.",
      showAns: false,
    },
    {
      id: 3,
      que: "What does the onboarding process look like?",
      ans: "1. Property Assessment & Strategy Call 2. Interior Design / Staging Review 3. Photography & Listing Creation 4. OTA Optimization & Calendar Setup 5. Launch + Guest Handling Begins 6. You Get a Dashboard to Track Everything",
      showAns: false,
    },
    {
      id: 4,
      que: "What if my property is already listed?",
      ans: "We’ll review your current setup, improve the listing, re-optimize your pricing, and start managing it end-to-end. Many of our clients switch to Apollo for better performance and less hassle.",
      showAns: false,
    },
  ];
  const priceFaq = [
    {
      id: 1,
      que: "How much does Apollo Rooms charge?",
      ans: "Our pricing is flexible depending on the property type and scope. Generally: • A one-time setup fee (e.g., for design, listing, launch) • A monthly commission (typically 20–30% of net revenue) • Optional add-ons like renovations, direct booking websites, or furnishing. We only profit when you do—our model is aligned with your success.",
      showAns: false,
    },
    {
      id: 2,
      que: "Do I still own the property and control pricing?",
      ans: "Yes, you retain full ownership and access. We recommend pricing based on data, but you can always review or adjust. You're in control; we're the engine behind the scenes.",
      showAns: false,
    },
    {
      id: 3,
      que: "How much can I earn with Apollo Rooms?",
      ans: "Income depends on your location, design quality, seasonality, and demand. We provide realistic income projections during onboarding—backed by comps and market data.",
      showAns: false,
    },
  ];
  const operationFaq = [
    {
      id: 1,
      que: "Who handles cleaning and maintenance?",
      ans: "We coordinate all on-the-ground operations—cleaning, restocking, laundry, and maintenance—using local, vetted vendors. You don’t need to worry about any day-to-day tasks.",
      showAns: false,
    },
    {
      id: 2,
      que: "How do you deal with guest issues?",
      ans: "Our 24/7 guest support team handles all communications, questions, and problems—fast. We aim for 5-star experiences every time and protect your property with strict screening, clear house rules, and guest reviews.",
      showAns: false,
    },
    {
      id: 3,
      que: "What tech and tools do you use?",
      ans: "We leverage industry-leading tools like: • PriceLabs for dynamic pricing • Hostaway & Guesty for calendar and guest management • Breezeway & Properly for cleaning operations • QuickBooks for financial reporting • Smart locks and digital check-in solutions",
      showAns: false,
    },
  ];
  const locationFaq = [
    {
      id: 1,
      que: "Where do you operate?",
      ans: "We manage properties across urban, resort, and seasonal markets worldwide, including: • 🇵🇰 Pakistan (Islamabad, Rawalpindi, Lahore, Murree, etc.) • 🇦🇪 UAE (Dubai) • 🇬🇧 United Kingdom • 🇲🇾 Malaysia • 🇮🇩 Indonesia • And expanding into new cities globally",
      showAns: false,
    },
    {
      id: 2,
      que: "Can you manage my boutique hotel or serviced apartment building?",
      ans: "Yes. We offer tailored solutions for hospitality properties, including OTA strategy, guest handling, room pricing, and off-season packages. We specialize in helping hotels increase occupancy via Airbnb, Booking.com, and Google listings.",
      showAns: false,
    },
  ];

  const activeLink = (id) => {
    setLinks(
      links.map((link) => {
        if (link.id === id) {
          link.isActive = !link.isActive;
        } else {
          link.isActive = false;
        }
        return link;
      })
    );
  };

  const scrollYHandler = () => {
    window.scroll(0, 0);
  };

  return (
    <div className=" dark:bg-slate-900 mt-[70px] ">
      <div
        className="relative bgTop table w-full py-32 lg:py-36 bg-no-repeat bg-center bg-cover "
        style={{
          backgroundImage: "url('/images/hotel-3.jpg')",
          width: "100%",
        }}
      >
        <div className="absolute inset-0 opacity-80 bg-no-repeat "></div>
        <div className="container mx-auto px-4 ">
          <div className="grid grid-cols-1 text-center mt-10 ">
            <h3 className="md:text-4xl text-3xl md:leading-normal leading-normal font-medium text-white z-50">
              Frequently Asked Questions
            </h3>
          </div>
        </div>
      </div>
      <div className="relative lg:py-24 pt-16 pb-32 lg:pb-44 dark:bg-slate-900 mt-10">
        <div className="container mx-auto px-2 lg:px-20">
          <div className="grid md:grid-cols-12 grid-cols-1 gap-[30px]">
            <div className="lg:col-span-4 md:col-span-5">
              <div className="rounded-md shadow  p-6 sticky top-20  dark:text-white dark:shadow-gray-700">
                <ul className="list-unstyled sidebar-nav mb-0 py-0">
                  {links.map((link) => (
                    <li
                      key={link.id}
                      className="navbar-item p-0 mt-3 hover:text-green-600"
                    >
                      <a
                        href={link.goLink}
                        onClick={() => activeLink(link.id)}
                        className={`text-base font-medium ${
                          link.isActive ? "text-green-600" : ""
                        }`}
                      >
                        {link.linkName}
                      </a>
                    </li>
                  ))}

                  {/* <li className="navbar-item p-0">
                    <a
                      href="#buying-questions"
                      onClick={()=>setIsActive(true)}
                      className={isActive? "text-base font-medium text-green-700 ":"text-base font-medium navbar-link"} 
                    >
                      Buying Questions
                    </a>
                  </li>
                  <li className="navbar-item mt-3 p-0">
                    <a
                    href="#general-questions"
                    onClick={()=>setIsActive(true)}
                      className={isActive? "text-base font-medium text-green-700 ":"text-base font-medium navbar-link"}
                    >
                      General Questions
                    </a>
                  </li>
                  <li className="navbar-item mt-3 p-0">
                    <a
                      href="#payment-questions"
                      onClick={()=>setIsActive(true)}
                      className={isActive? "text-base font-medium text-green-700 ":"text-base font-medium navbar-link"}
                    >
                      Payments Questions
                    </a>
                  </li>
                  <li className="navbar-item mt-3 p-0">
                    <a
                     href="#support-questions"
                     onClick={()=>setIsActive(true)}
                     className={isActive? "text-base font-medium text-green-700 ":"text-base font-medium navbar-link"}                    >
                      Support Questions
                    </a>
                  </li> */}
                </ul>
              </div>
            </div>
            <div className="lg:col-span-8 md:col-span-7">
              <div id="general-faq">
                <h5 className="text-2xl font-semibold dark:text-white dark:bg-slate-900">
                  General Faq's
                </h5>
                <div className="mt-6">
                  <FaqComponent data={generalFaq} />
                </div>
              </div>
              <div id="service-faq" className="mt-8 ">
                <h5 className="text-2xl font-semibold dark:text-white">
                  Service & Process Faq's
                </h5>
                <div className="mt-6">
                  <FaqComponent data={supportFaqs} />
                </div>
              </div>
              <div id="pricing-faq" className="mt-8 ">
                <h5 className="text-2xl font-semibold dark:text-white">
                  Pricing & Income Faq's
                </h5>
                <div className="mt-6">
                  <FaqComponent data={priceFaq} />
                </div>
              </div>
              <div id="support-faq" className="mt-8 ">
                <h5 className="text-2xl font-semibold dark:text-white">
                  Operations & Support
                </h5>
                <div className="mt-6">
                  <FaqComponent data={operationFaq} />
                </div>
              </div>
              <div id="location-faq" className="mt-8 ">
                <h5 className="text-2xl font-semibold dark:text-white">
                  Locations & Expansion
                </h5>
                <div className="mt-6">
                  <FaqComponent data={locationFaq} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container lg:mt-24 mt-16 mx-auto px-4">
          <div className="grid grid-cols-1 text-center">
            <h3 className="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-medium text-black ">
              Have Question ? Get in touch!
            </h3>
            <p className="text-slate-400 max-w-xl mx-auto">
              A great plateform to buy, sell and rent your properties without
              any agent or commisions.
            </p>
            <div className="mt-6">
              <button
                className="py-3 px-5 bg-green-600 hover:bg-green-700 border border-green-600 text-white rounded-md"
                href="/contact"
              >
                <span className="flex gap-2">
                  <i>
                    <BsTelephone className=" font-semibold align-middle mt-[2px] " />
                  </i>
                  <Link to={"/contact"} onClick={scrollYHandler}>
                    <span className="font-semibold">Contact us</span>
                  </Link>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faqs;
