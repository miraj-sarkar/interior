import React, { useState } from "react";
import { motion } from "framer-motion";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase/config";
import {
  FaCalendarAlt,
  FaHome,
  FaBuilding,
  FaLeaf,
  FaComments,
} from "react-icons/fa";

const Booking = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    serviceType: "",
    propertyType: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    try {
      await addDoc(collection(db, "bookings"), {
        ...formData,
        timestamp: new Date(),
      });
      setStatus("success");
      setFormData({
        name: "",
        email: "",
        phone: "",
        date: "",
        time: "",
        serviceType: "",
        propertyType: "",
        message: "",
      });
      setTimeout(() => setStatus(""), 3000);
    } catch (error) {
      setStatus("error");
      console.error("Error submitting form:", error);
    }
  };

  const serviceTypes = [
    {
      icon: <FaHome className="w-6 h-6 text-blue-600" />,
      title: "Residential Design",
      description:
        "Complete interior design for homes, apartments, and residential spaces",
    },
    {
      icon: <FaBuilding className="w-6 h-6 text-blue-600" />,
      title: "Commercial Design",
      description:
        "Professional design solutions for offices, retail spaces, and hospitality venues",
    },
    {
      icon: <FaLeaf className="w-6 h-6 text-blue-600" />,
      title: "Sustainable Design",
      description:
        "Eco-friendly interior design focusing on sustainable materials and energy efficiency",
    },
    {
      icon: <FaComments className="w-6 h-6 text-blue-600" />,
      title: "Consultation",
      description:
        "Expert advice on color schemes, furniture selection, and space planning",
    },
  ];

  return (
    <div className="pt-16 bg-gray-50">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Schedule a Design Consultation
            </h1>
            <p className="text-xl max-w-3xl mx-auto">
              Take the first step toward transforming your space. Book a
              consultation with our expert designers.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Booking Form Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Service Types */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Our Design Services
              </h2>
              <div className="space-y-6">
                {serviceTypes.map((service, index) => (
                  <motion.div
                    key={service.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 + 0.3 }}
                    className="bg-white p-6 rounded-lg shadow-md flex items-start space-x-4"
                  >
                    <div className="flex-shrink-0">{service.icon}</div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        {service.title}
                      </h3>
                      <p className="text-gray-600">{service.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="mt-12 bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  What to Expect
                </h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start space-x-3">
                    <svg
                      className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>
                      Initial consultation to understand your design needs and
                      preferences
                    </span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <svg
                      className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>
                      Discussion of project scope, timeline, and budget
                      considerations
                    </span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <svg
                      className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>Preliminary design ideas and recommendations</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <svg
                      className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>
                      Next steps and proposal for full design services
                    </span>
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* Booking Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-white p-8 rounded-lg shadow-lg"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Book Your Consultation
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-blue-500 outline-none"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      className="w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-blue-500 outline-none"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    className="w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-blue-500 outline-none"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-700 mb-2">
                      Preferred Date *
                    </label>
                    <input
                      type="date"
                      required
                      className="w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-blue-500 outline-none"
                      value={formData.date}
                      onChange={(e) =>
                        setFormData({ ...formData, date: e.target.value })
                      }
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-2">
                      Preferred Time *
                    </label>
                    <select
                      required
                      className="w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-blue-500 outline-none"
                      value={formData.time}
                      onChange={(e) =>
                        setFormData({ ...formData, time: e.target.value })
                      }
                    >
                      <option value="">Select a time</option>
                      <option value="9:00 AM">9:00 AM</option>
                      <option value="10:00 AM">10:00 AM</option>
                      <option value="11:00 AM">11:00 AM</option>
                      <option value="1:00 PM">1:00 PM</option>
                      <option value="2:00 PM">2:00 PM</option>
                      <option value="3:00 PM">3:00 PM</option>
                      <option value="4:00 PM">4:00 PM</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-gray-700 mb-2">
                    Service Type *
                  </label>
                  <select
                    required
                    className="w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-blue-500 outline-none"
                    value={formData.serviceType}
                    onChange={(e) =>
                      setFormData({ ...formData, serviceType: e.target.value })
                    }
                  >
                    <option value="">Select a service</option>
                    <option value="Residential Design">
                      Residential Design
                    </option>
                    <option value="Commercial Design">Commercial Design</option>
                    <option value="Sustainable Design">
                      Sustainable Design
                    </option>
                    <option value="Consultation">Consultation</option>
                  </select>
                </div>

                <div>
                  <label className="block text-gray-700 mb-2">
                    Property Type *
                  </label>
                  <select
                    required
                    className="w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-blue-500 outline-none"
                    value={formData.propertyType}
                    onChange={(e) =>
                      setFormData({ ...formData, propertyType: e.target.value })
                    }
                  >
                    <option value="">Select property type</option>
                    <option value="Apartment">Apartment</option>
                    <option value="House">House</option>
                    <option value="Office">Office</option>
                    <option value="Retail Space">Retail Space</option>
                    <option value="Restaurant">Restaurant</option>
                    <option value="Hotel">Hotel</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-gray-700 mb-2">
                    Additional Information
                  </label>
                  <textarea
                    rows="4"
                    className="w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-blue-500 outline-none resize-none"
                    placeholder="Tell us about your project, goals, and any specific requirements..."
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className={`w-full py-3 rounded-lg text-white font-medium transition-colors flex items-center justify-center space-x-2 ${
                    status === "sending"
                      ? "bg-gray-400"
                      : "bg-blue-600 hover:bg-blue-700"
                  }`}
                >
                  <FaCalendarAlt />
                  <span>
                    {status === "sending"
                      ? "Booking..."
                      : "Book Your Consultation"}
                  </span>
                </button>

                {status === "success" && (
                  <div className="p-4 bg-green-100 text-green-700 rounded-lg">
                    <p className="font-medium">Booking successful!</p>
                    <p>
                      We'll contact you shortly to confirm your appointment.
                    </p>
                  </div>
                )}

                {status === "error" && (
                  <div className="p-4 bg-red-100 text-red-700 rounded-lg">
                    <p className="font-medium">Error submitting booking.</p>
                    <p>Please try again or contact us directly.</p>
                  </div>
                )}
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hear from clients who have transformed their spaces with our
              design services
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Jennifer R.",
                role: "Homeowner",
                image:
                  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
                text: "The consultation was incredibly helpful. The designer understood exactly what I wanted and provided practical solutions I hadn't considered.",
              },
              {
                name: "Mark T.",
                role: "Office Manager",
                image:
                  "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
                text: "Booking a consultation was the best decision for our office redesign. The team was professional, punctual, and full of innovative ideas.",
              },
              {
                name: "Sophia L.",
                role: "Restaurant Owner",
                image:
                  "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
                text: "From consultation to completion, the design process was seamless. Our restaurant now has the perfect ambiance for our customers.",
              },
            ].map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-lg shadow-md"
              >
                <div className="flex items-center space-x-4 mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="font-semibold text-gray-900">
                      {testimonial.name}
                    </h3>
                    <p className="text-gray-600 text-sm">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-600 italic">"{testimonial.text}"</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Booking;
