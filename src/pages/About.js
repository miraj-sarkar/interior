import React from "react";
import { motion } from "framer-motion";
import { FaOm, FaHeart, FaLeaf, FaMoon, FaLeanpub } from "react-icons/fa";

const About = () => {
  const designServices = [
    {
      icon: FaLeanpub,
      title: "Residential Design",
      description:
        "Comprehensive interior design services for homes and apartments. We transform living spaces into beautiful, functional environments.",
      benefits: [
        "Personalized approach",
        "Space optimization",
        "Custom furniture",
        "Cohesive aesthetics",
      ],
    },
    {
      icon: FaHeart,
      title: "Commercial Design",
      description:
        "Professional design solutions for offices, retail spaces, and hospitality venues. Create impressive environments that enhance your brand.",
      benefits: [
        "Brand integration",
        "Ergonomic workspaces",
        "Traffic flow optimization",
        "Professional atmosphere",
      ],
    },
    {
      icon: FaLeaf,
      title: "Sustainable Design",
      description:
        "Eco-friendly interior design focusing on sustainable materials and energy efficiency. Beautiful spaces with minimal environmental impact.",
      benefits: [
        "Eco-friendly materials",
        "Energy efficiency",
        "Improved air quality",
        "Reduced carbon footprint",
      ],
    },
    {
      icon: FaMoon,
      title: "Consultation Services",
      description:
        "Expert advice on color schemes, furniture selection, and space planning. Get professional guidance for your DIY projects.",
      benefits: [
        "Professional expertise",
        "Budget optimization",
        "Vendor recommendations",
        "Design direction",
      ],
    },
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              About Our Design Studio
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover the vision, expertise, and creative process behind our
              award-winning interior design services
            </p>
          </motion.div>
        </div>
      </section>

      {/* Designer Introduction */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img
                src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
                alt="Interior Designer"
                className="rounded-lg shadow-xl"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Meet Our Design Team
              </h2>
              <p className="text-gray-600 mb-6">
                With over 15 years of experience in interior design, our team
                has transformed countless spaces into beautiful, functional
                environments that reflect our clients' unique personalities and
                needs.
              </p>
              <p className="text-gray-600 mb-6">
                Our journey began with a passion for creating harmonious spaces
                that enhance wellbeing. Today, we combine timeless design
                principles with innovative approaches to deliver exceptional
                interiors for residential and commercial clients.
              </p>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-900">
                  Credentials
                </h3>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>American Society of Interior Designers (ASID) Members</li>
                  <li>LEED Accredited Professionals</li>
                  <li>Award-Winning Design Portfolio</li>
                  <li>Certified Interior Decorators (CID)</li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Design Philosophy */}
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
              Design Philosophy
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our approach combines aesthetic excellence with practical
              functionality to create spaces that are both beautiful and
              livable.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {["Functionality", "Sustainability", "Personalization"].map(
              (value, index) => (
                <motion.div
                  key={value}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="bg-white p-6 rounded-lg shadow-lg"
                >
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    {value}
                  </h3>
                  <p className="text-gray-600">
                    {value === "Functionality" &&
                      "Creating spaces that work seamlessly with your lifestyle and needs."}
                    {value === "Sustainability" &&
                      "Incorporating eco-friendly materials and energy-efficient solutions."}
                    {value === "Personalization" &&
                      "Designing unique interiors that reflect your personality and taste."}
                  </p>
                </motion.div>
              )
            )}
          </div>
        </div>
      </section>

      {/* Design Services */}
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
              Our Design Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our comprehensive range of interior design services
              tailored to your specific needs
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {designServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-lg shadow-lg"
              >
                <service.icon className="w-12 h-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <h4 className="font-semibold text-gray-900 mb-2">
                  Key Features:
                </h4>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  {service.benefits.map((benefit) => (
                    <li key={benefit}>{benefit}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
