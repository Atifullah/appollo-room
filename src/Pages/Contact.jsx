import React, { useState, useEffect } from "react";
import { LuHexagon } from "react-icons/lu";
import { Icon } from "@iconify/react";
import axios from "axios";

const Contact = () => {
  const [workItems, setWorkItems] = useState([
    {
      id: 1,
      name: "Phone",
      icon: "uil:phone",
      desc: "The phrasal sequence of the is now so that many campaign and benefit",
      info: "+152 534-468-854",
    },
    {
      id: 2,
      name: "Email",
      icon: "uil:envelope",
      desc: "The phrasal sequence of the is now so that many campaign and benefit",
      info: "hello@apollorooms.com",
    },
    {
      id: 3,
      name: "Location",
      icon: "uil:map-marker",
      desc: "C/54 Northwest Freeway, Suite 558,Houston, USA 485",
      info: "View on Google map",
    },
  ]);

  // Form state
  const [formData, setFormData] = useState({
    guest_name: "",
    guest_email: "",
    guest_phone: "",
    check_in_date: "",
    check_out_date: "",
    adults: 1,
    children: 0,
    notes: "",
    property_id: 1, // Default property ID
  });

  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState({ show: false, message: "", type: "" });

  // Auto-hide toast after 5 seconds
  useEffect(() => {
    if (toast.show) {
      const timer = setTimeout(() => {
        setToast({ show: false, message: "", type: "" });
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [toast.show]);

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "number" ? parseInt(value) || 0 : value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axios.post(
        "https://booking.dynumtech.com/api/bookings",
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log(formData);
      // Success - show success toast and reset form
      setToast({
        show: true,
        message: "Your message has been sent successfully!",
        type: "success",
      });

      // Reset form
      setFormData({
        guest_name: "",
        guest_email: "",
        guest_phone: "",
        check_in_date: "",
        check_out_date: "",
        adults: 1,
        children: 0,
        notes: "",
        property_id: 1,
      });
    } catch (error) {
      // Error - show error toast
      console.error("Error:", error);
      setToast({
        show: true,
        message: "There is an issue in the message send. Please try again.",
        type: "error",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      {/* Custom Toast Notification */}
      {toast.show && (
        <div
          className={`fixed top-4 right-4 z-50 p-4 rounded-md shadow-lg transition-all duration-300 ${
            toast.type === "success"
              ? "bg-green-500 text-white"
              : "bg-red-500 text-white"
          }`}
        >
          <div className="flex items-center justify-between">
            <span>{toast.message}</span>
            <button
              onClick={() => setToast({ show: false, message: "", type: "" })}
              className="ml-4 text-white hover:text-gray-200"
            >
              ✕
            </button>
          </div>
        </div>
      )}

      <iframe
        className="w-full h-[500px] border-none leading-[0] border-0 mt-6"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13219.520702411606!2d73.37169875069449!3d34.072585794501215!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfd4b203243f2b%3A0xe2a84441ca2e0678!2sNathia%20Gali%2C%20Pakistan!5e0!3m2!1sen!2s!4v1756315810401!5m2!1sen!2s"
      ></iframe>
      <section className=" pb-16 md:pb-24 dark:bg-slate-900">
        {/* contact */}
        <div className="container-2xl mt-16 lg:mt-24">
          <div className="grid-layout-2 items-center mt-8">
            <div className="md:col-span-6 lg:col-span-7">
              <img
                src="https://hously-react.vercel.app/static/media/contact.9a5ddc68f4f732b0d302408faa525a9d.svg"
                alt=""
              />
            </div>
            <div className="md:col-span-6 lg:col-span-5 ">
              <div className="bg-white dark:bg-slate-900 rounded-md shadow dark:shadow-gray-700 p-6">
                <h1 className="h1 dark:text-white">Book Your Stay!</h1>

                <form onSubmit={handleSubmit}>
                  <div className="flex flex-col md:flex-row gap-4 mt-6">
                    <div className="flex-1">
                      <p className="paragraph-3 dark:text-white">Your Name:</p>
                      <input
                        name="guest_name"
                        type="text"
                        value={formData.guest_name}
                        onChange={handleChange}
                        className="border border-gray-200 rounded overflow-hidden dark:border-slate-800 focus:outline-none form-box-3 dark:bg-slate-900 dark:text-white"
                        placeholder="Name:"
                        required
                      />
                    </div>
                    <div className="flex-1">
                      <p className="paragraph-3 dark:text-white">Your Email:</p>
                      <input
                        name="guest_email"
                        type="email"
                        value={formData.guest_email}
                        onChange={handleChange}
                        className="border border-gray-200 rounded overflow-hidden dark:border-slate-800 focus:outline-none form-box-3 dark:bg-slate-900 dark:text-white"
                        placeholder="Email:"
                        required
                      />
                    </div>
                  </div>

                  <div className="flex flex-col md:flex-row gap-4 mt-4">
                    <div className="flex-1">
                      <p className="paragraph-3 dark:text-white">
                        Phone Number:
                      </p>
                      <input
                        name="guest_phone"
                        type="tel"
                        value={formData.guest_phone}
                        onChange={handleChange}
                        className="border border-gray-200 rounded overflow-hidden dark:border-slate-800 focus:outline-none form-box-3 dark:bg-slate-900 dark:text-white"
                        placeholder="Phone:"
                        required
                      />
                    </div>
                    <div className="flex-1">
                      <p className="paragraph-3 dark:text-white">
                        Property ID:
                      </p>
                      <input
                        name="property_id"
                        type="number"
                        value={formData.property_id}
                        onChange={handleChange}
                        className="border border-gray-200 rounded overflow-hidden dark:border-slate-800 focus:outline-none form-box-3 dark:bg-slate-900 dark:text-white"
                        placeholder="Property ID:"
                        min="1"
                        required
                      />
                    </div>
                  </div>

                  <div className="flex flex-col md:flex-row gap-4 mt-4">
                    <div className="flex-1">
                      <p className="paragraph-3 dark:text-white">
                        Check-in Date:
                      </p>
                      <input
                        name="check_in_date"
                        type="date"
                        value={formData.check_in_date}
                        onChange={handleChange}
                        className="border border-gray-200 rounded overflow-hidden dark:border-slate-800 focus:outline-none form-box-3 dark:bg-slate-900 dark:text-white"
                        required
                      />
                    </div>
                    <div className="flex-1">
                      <p className="paragraph-3 dark:text-white">
                        Check-out Date:
                      </p>
                      <input
                        name="check_out_date"
                        type="date"
                        value={formData.check_out_date}
                        onChange={handleChange}
                        className="border border-gray-200 rounded overflow-hidden dark:border-slate-800 focus:outline-none form-box-3 dark:bg-slate-900 dark:text-white"
                        required
                      />
                    </div>
                  </div>

                  <div className="flex flex-col md:flex-row gap-4 mt-4">
                    <div className="flex-1">
                      <p className="paragraph-3 dark:text-white">Adults:</p>
                      <input
                        name="adults"
                        type="number"
                        value={formData.adults}
                        onChange={handleChange}
                        className="border border-gray-200 rounded overflow-hidden dark:border-slate-800 focus:outline-none form-box-3 dark:bg-slate-900 dark:text-white"
                        placeholder="Number of adults"
                        min="1"
                        required
                      />
                    </div>
                    <div className="flex-1">
                      <p className="paragraph-3 dark:text-white">Children:</p>
                      <input
                        name="children"
                        type="number"
                        value={formData.children}
                        onChange={handleChange}
                        className="border border-gray-200 rounded overflow-hidden dark:border-slate-800 focus:outline-none form-box-3 dark:bg-slate-900 dark:text-white"
                        placeholder="Number of children"
                        min="0"
                      />
                    </div>
                  </div>

                  <div className="mt-4">
                    <p className="paragraph-3 dark:text-white">
                      Special Requests:
                    </p>
                    <textarea
                      name="notes"
                      value={formData.notes}
                      onChange={handleChange}
                      className="border border-gray-200 rounded overflow-hidden dark:border-slate-800 focus:outline-none form-box-3 dark:bg-slate-900 dark:text-white h-24"
                      placeholder="Any special requests or notes..."
                    />
                  </div>

                  <div className="mt-4">
                    <button
                      type="submit"
                      disabled={loading}
                      className="btn px-5 py-2 sm:px-7 sm:py-[12px] md:px-6 md:py-2 my-1 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {loading ? "Sending..." : "Send Booking Request"}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

        {/* phone,email,location */}
        <div className="container-2xl mt-16 lg:mt-24">
          <div className="grid-layout-3 mt-8">
            {workItems?.map((item) => {
              const IconComponent = item.icon;
              return (
                <div className="lg:px-8" key={item.id}>
                  <div className="relative">
                    <LuHexagon className=" w-32 h-32 text-[#f3faf6] mx-auto dark:text-slate-900 fill-[#f3faf6] dark:fill-[#0F1e2c]" />
                    <div className="absolute center-h-v ">
                      <Icon
                        icon={item.icon}
                        className=" text-4xl text-[#771f28]"
                      />
                    </div>
                  </div>
                  <div className="mt-6">
                    <h2 className="sub-header-2 text-center  dark:text-white">
                      {item.name}
                    </h2>
                    <p className="paragraph mt-3">{item.desc}</p>
                  </div>
                  <div className="mt-6">
                    <p className=" paragraph-4 mt-3  ">
                      <span className=" pb-1 cursor-pointer transition duration-150 border-b-[1px] border-transparent hover:border-[#771f28] text-[#771f28]">
                        {item.info}
                      </span>
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
