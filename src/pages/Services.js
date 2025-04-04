import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaHome, FaBuilding, FaLeaf, FaComments } from "react-icons/fa";

const Services = () => {
  const designServices = [
    {
      id: "residential",
      icon: FaHome,
      title: "Residential Design",
      description:
        "Transform your home into a beautiful, functional space that reflects your personality and meets your lifestyle needs.",
      features: [
        "Comprehensive space planning",
        "Custom furniture selection",
        "Color scheme development",
        "Lighting design",
        "Material and finish selection",
        "Art and accessory curation",
      ],
      image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace",
    },
    {
      id: "commercial",
      icon: FaBuilding,
      title: "Commercial Design",
      description:
        "Create impressive, functional commercial spaces that enhance your brand identity and improve productivity.",
      features: [
        "Brand integration in design",
        "Space optimization for workflow",
        "Ergonomic workspace design",
        "Commercial-grade materials",
        "ADA compliance planning",
        "Vendor coordination",
      ],
      image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72",
    },
    {
      id: "sustainable",
      icon: FaLeaf,
      title: "Sustainable Design",
      description:
        "Eco-friendly interior design focusing on sustainable materials, energy efficiency, and healthy living environments.",
      features: [
        "Eco-friendly material selection",
        "Energy-efficient lighting",
        "Indoor air quality improvement",
        "Water conservation solutions",
        "Sustainable furniture sourcing",
        "LEED certification guidance",
      ],
      image:
        "https://plus.unsplash.com/premium_photo-1684508638760-72ad80c0055f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8aW50ZXJpb3J8ZW58MHx8MHx8fDA%3D",
    },
    {
      id: "consultations",
      icon: FaComments,
      title: "Design Consultations",
      description:
        "Expert advice on color schemes, furniture selection, space planning, and more for your DIY projects.",
      features: [
        "Two-hour in-home consultation",
        "Written design recommendations",
        "Space planning guidance",
        "Color palette development",
        "Furniture arrangement advice",
        "Resource and vendor referrals",
      ],
      image: "https://images.unsplash.com/photo-1600210491892-03d54c0aaf87",
    },
  ];

  const processSteps = [
    {
      number: "01",
      title: "Initial Consultation",
      description:
        "We begin with a thorough discussion of your needs, preferences, and budget to understand your vision.",
    },
    {
      number: "02",
      title: "Concept Development",
      description:
        "Our designers create preliminary concepts including space planning, color schemes, and material selections.",
    },
    {
      number: "03",
      title: "Design Refinement",
      description:
        "Based on your feedback, we refine the design concepts and present detailed plans and visualizations.",
    },
    {
      number: "04",
      title: "Implementation",
      description:
        "We coordinate with contractors and vendors to bring your design to life, ensuring quality execution.",
    },
  ];

  return (
    <div className="pt-16">
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
              Our Design Services
            </h1>
            <p className="text-xl max-w-3xl mx-auto">
              Comprehensive interior design solutions tailored to your unique
              needs and style preferences
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-24">
            {designServices.map((service, index) => (
              <div
                key={service.id}
                id={service.id}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <motion.div
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className={index % 2 === 1 ? "lg:order-2" : ""}
                >
                  <img
                    src={service.image}
                    alt={service.title}
                    className="rounded-lg shadow-xl w-full h-80 object-cover"
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className={index % 2 === 1 ? "lg:order-1" : ""}
                >
                  <div className="flex items-center mb-4 text-blue-600">
                    <service.icon className="w-8 h-8 mr-3" />
                    <h2 className="text-3xl font-bold">{service.title}</h2>
                  </div>
                  <p className="text-xl text-gray-600 mb-6">
                    {service.description}
                  </p>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start text-gray-700">
                        <svg
                          className="w-5 h-5 text-blue-600 mt-1 mr-2 flex-shrink-0"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/booking"
                    className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    Book a Consultation
                  </Link>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Design Process */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Our Design Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A structured approach to bringing your design vision to life
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-lg shadow-lg relative"
              >
                <span className="absolute -top-6 -left-6 flex items-center justify-center w-16 h-16 bg-blue-600 text-white text-2xl font-bold rounded-full">
                  {step.number}
                </span>
                <h3 className="text-xl font-bold text-gray-900 mt-6 mb-4">
                  {step.title}
                </h3>
                <p className="text-gray-600">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Investment in Quality Design
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our pricing is tailored to the scope and requirements of each
              project
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Consultation",
                price: "$250",
                unit: "per session",
                description:
                  "Expert advice for DIY projects and small-scale improvements",
                features: [
                  "2-hour in-home consultation",
                  "Written recommendations",
                  "Resource guide",
                  "Follow-up call",
                ],
                cta: "Book a Consultation",
                popular: false,
              },
              {
                title: "Full-Service Design",
                price: "Custom",
                unit: "quote",
                description:
                  "Comprehensive design services for complete room or home transformations",
                features: [
                  "Detailed space planning",
                  "Custom furniture selection",
                  "Material & finish specifications",
                  "Contractor coordination",
                  "Installation management",
                  "Final styling",
                ],
                cta: "Request a Quote",
                popular: true,
              },
              {
                title: "Commercial Design",
                price: "Custom",
                unit: "quote",
                description:
                  "Professional design solutions for businesses and commercial spaces",
                features: [
                  "Brand integration",
                  "Space planning & optimization",
                  "Commercial-grade specifications",
                  "Vendor management",
                  "Project timeline development",
                  "Budget management",
                ],
                cta: "Contact Us",
                popular: false,
              },
            ].map((plan, index) => (
              <motion.div
                key={plan.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`rounded-lg overflow-hidden shadow-lg ${
                  plan.popular
                    ? "ring-2 ring-blue-600 transform scale-105 z-10"
                    : "bg-white"
                }`}
              >
                {plan.popular && (
                  <div className="bg-blue-600 text-white text-center py-2 font-medium">
                    Most Popular
                  </div>
                )}
                <div className="p-8 bg-white">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {plan.title}
                  </h3>
                  <div className="flex items-baseline mb-6">
                    <span className="text-4xl font-bold text-gray-900">
                      {plan.price}
                    </span>
                    <span className="text-gray-600 ml-2">{plan.unit}</span>
                  </div>
                  <p className="text-gray-600 mb-6">{plan.description}</p>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start text-gray-700">
                        <svg
                          className="w-5 h-5 text-blue-600 mt-0.5 mr-2 flex-shrink-0"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/booking"
                    className={`block text-center py-3 px-6 rounded-lg transition-colors ${
                      plan.popular
                        ? "bg-blue-600 text-white hover:bg-blue-700"
                        : "bg-gray-100 text-gray-800 hover:bg-gray-200"
                    }`}
                  >
                    {plan.cta}
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-6">
              Ready to Transform Your Space?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Contact us today to discuss your project and schedule a
              consultation
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Link
                to="/booking"
                className="px-8 py-4 bg-white text-blue-600 rounded-full hover:bg-blue-50 transition-colors font-medium"
              >
                Book a Consultation
              </Link>
              <Link
                to="/contact"
                className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-full hover:bg-white/10 transition-colors font-medium"
              >
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;
