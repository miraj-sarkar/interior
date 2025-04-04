import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaQuoteLeft, FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const renderStars = (rating) => {
    return [...Array(rating)].map((_, index) => (
      <svg
        key={index}
        className="w-5 h-5 text-yellow-400"
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.363 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.363-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ));
  };

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative py-20 bg-gray-50"></section>

      {/* Project Gallery */}
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
              Our Client Projects
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Browse through some of our recent transformations
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Modern Apartment",
                location: "New York, NY",
                image:
                  "https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
              },
              {
                title: "Coastal Home",
                location: "Malibu, CA",
                image:
                  "https://images.unsplash.com/photo-1631679706909-1844bbd07221?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aW50ZXJpb3J8ZW58MHx8MHx8fDA%3D",
              },
              {
                title: "Executive Office",
                location: "Chicago, IL",
                image:
                  "https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
              },
              {
                title: "Luxury Penthouse",
                location: "Miami, FL",
                image:
                  "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
              },
              {
                title: "Boutique Hotel",
                location: "Austin, TX",
                image:
                  "https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
              },
              {
                title: "Mountain Retreat",
                location: "Aspen, CO",
                image:
                  "https://images.unsplash.com/photo-1600585154526-990dced4db0d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
              },
            ].map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative overflow-hidden rounded-lg shadow-lg"
              >
                <div className="aspect-w-3 aspect-h-2">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <h3 className="text-xl font-bold text-white">
                    {project.title}
                  </h3>
                  <p className="text-blue-300">{project.location}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-blue-600 text-white">
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
              Join our satisfied clients and experience the difference
              professional interior design can make
            </p>
            <a
              href="/booking"
              className="btn-secondary text-lg px-8 py-4 inline-block bg-white text-blue-600 rounded-full hover:bg-blue-50 transition-colors"
            >
              Schedule a Consultation
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;
