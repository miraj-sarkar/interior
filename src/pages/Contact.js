import React, { useState } from "react";
import { motion } from "framer-motion";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase/config";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    try {
      await addDoc(collection(db, "contacts"), {
        ...formData,
        timestamp: new Date(),
      });
      setStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setStatus(""), 3000);
    } catch (error) {
      setStatus("error");
      console.error("Error submitting form:", error);
    }
  };

  const contactInfo = [
    {
      icon: <FaPhone />,
      title: "Phone",
      content: "+1 (555) 123-4567",
      link: "tel:+15551234567",
    },
    {
      icon: <FaEnvelope />,
      title: "Email",
      content: "info@interiorelegance.com",
      link: "mailto:info@interiorelegance.com",
    },
    {
      icon: <FaMapMarkerAlt />,
      title: "Location",
      content: "123 Design Avenue, Creative District, CD 12345",
      link: "https://maps.google.com",
    },
    {
      icon: <FaClock />,
      title: "Hours",
      content: "Mon-Fri: 9:00 AM - 6:00 PM",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Get in Touch</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Ready to transform your space? Contact us to discuss your project
            and schedule a consultation.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-semibold mb-6">
                Contact Information
              </h2>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start space-x-4"
                  >
                    <div className="text-blue-600 text-xl mt-1">
                      {info.icon}
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900">
                        {info.title}
                      </h3>
                      {info.link ? (
                        <a
                          href={info.link}
                          className="text-gray-600 hover:text-blue-600 transition-colors"
                        >
                          {info.content}
                        </a>
                      ) : (
                        <p className="text-gray-600">{info.content}</p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="mt-8 pt-8 border-t border-gray-200">
                <h3 className="font-semibold text-gray-900 mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  {[
                    { icon: "facebook", href: "https://facebook.com" },
                    { icon: "instagram", href: "https://instagram.com" },
                    { icon: "twitter", href: "https://twitter.com" },
                    { icon: "pinterest", href: "https://pinterest.com" },
                  ].map((social) => (
                    <a
                      key={social.icon}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-blue-600 hover:text-white transition-colors"
                    >
                      <i className={`fab fa-${social.icon}`}></i>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-semibold mb-6">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-700 mb-2">Name</label>
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
                    <label className="block text-gray-700 mb-2">Email</label>
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
                  <label className="block text-gray-700 mb-2">Subject</label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-blue-500 outline-none"
                    value={formData.subject}
                    onChange={(e) =>
                      setFormData({ ...formData, subject: e.target.value })
                    }
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">Message</label>
                  <textarea
                    required
                    rows="5"
                    className="w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-blue-500 outline-none resize-none"
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                  ></textarea>
                </div>
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className={`w-full py-3 rounded-lg text-white font-medium transition-colors ${
                    status === "sending"
                      ? "bg-gray-400"
                      : "bg-blue-600 hover:bg-blue-700"
                  }`}
                >
                  {status === "sending" ? "Sending..." : "Send Message"}
                </button>
                {status === "success" && (
                  <p className="text-green-600 text-center">
                    Message sent successfully!
                  </p>
                )}
                {status === "error" && (
                  <p className="text-red-600 text-center">
                    Error sending message. Please try again.
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Map Section */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Visit Our Studio
          </h2>
          <div className="rounded-xl overflow-hidden shadow-lg h-96">
            <iframe
              title="Interior Elegance Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.215266952082!2d-73.98784492404045!3d40.75798657138728!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25855c6480299%3A0x55194ec5a1ae072e!2sTimes%20Square!5e0!3m2!1sen!2sus!4v1690000000000!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Frequently Asked Questions
          </h2>
          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                question: "What is your design process?",
                answer:
                  "Our design process begins with an initial consultation to understand your needs and vision. We then create concept designs, refine based on your feedback, and finally implement the approved design with careful project management.",
              },
              {
                question: "How much does interior design cost?",
                answer:
                  "Our pricing varies based on project scope, size, and complexity. We offer different service packages to accommodate various budgets. Contact us for a personalized quote.",
              },
              {
                question: "How long does a typical project take?",
                answer:
                  "Project timelines depend on scope and complexity. Small room redesigns may take 4-6 weeks, while full home renovations can take 3-6 months. We'll provide a detailed timeline during our initial consultation.",
              },
              {
                question: "Do you work with clients remotely?",
                answer:
                  "Yes, we offer virtual design services for clients outside our local area. Through video consultations, digital mood boards, and 3D renderings, we can create beautiful spaces regardless of location.",
              },
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-lg shadow-md"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {faq.question}
                </h3>
                <p className="text-gray-600">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
