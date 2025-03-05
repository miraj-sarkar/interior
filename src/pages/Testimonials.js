import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaQuoteLeft, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Yoga Student',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      text: 'The classes have transformed my life. I feel more balanced and centered than ever before. The instructor\'s guidance is gentle yet effective, making each session truly transformative.',
      rating: 5,
    },
    {
      name: 'Michael Chen',
      role: 'Wellness Enthusiast',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      text: 'I\'ve been practicing yoga for years, but this studio has taken my practice to a new level. The attention to detail and personalized guidance is exceptional.',
      rating: 5,
    },
    {
      name: 'Emma Davis',
      role: 'Meditation Practitioner',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      text: 'The meditation classes have helped me find inner peace and clarity. The instructor\'s deep knowledge and calming presence make every session truly special.',
      rating: 5,
    },
    {
      name: 'David Wilson',
      role: 'Fitness Enthusiast',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      text: 'As someone who was new to yoga, I was nervous about starting. But the welcoming environment and expert guidance made me feel comfortable from day one.',
      rating: 5,
    },
    {
      name: 'Lisa Anderson',
      role: 'Stress Management Coach',
      image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      text: 'The holistic approach to wellness here is truly remarkable. The combination of physical practice and mental well-being creates a complete transformation.',
      rating: 5,
    },
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const previousTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

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
      <section className="relative py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Student Testimonials
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hear from our community about their transformative yoga and wellness journeys
            </p>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Carousel */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-lg shadow-xl p-8 md:p-12"
              >
                <div className="flex flex-col items-center text-center">
                  <FaQuoteLeft className="w-12 h-12 text-primary-600 mb-6" />
                  <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl">
                    "{testimonials[currentIndex].text}"
                  </p>
                  <div className="flex items-center mb-4">
                    {renderStars(testimonials[currentIndex].rating)}
                  </div>
                  <div className="flex items-center space-x-4">
                    <img
                      src={testimonials[currentIndex].image}
                      alt={testimonials[currentIndex].name}
                      className="w-16 h-16 rounded-full object-cover"
                    />
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900">
                        {testimonials[currentIndex].name}
                      </h3>
                      <p className="text-gray-600">
                        {testimonials[currentIndex].role}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Buttons */}
            <div className="absolute top-1/2 transform -translate-y-1/2 w-full flex justify-between px-4">
              <button
                onClick={previousTestimonial}
                className="bg-white rounded-full p-3 shadow-lg hover:bg-gray-50 transition-colors duration-200"
              >
                <FaChevronLeft className="w-6 h-6 text-gray-600" />
              </button>
              <button
                onClick={nextTestimonial}
                className="bg-white rounded-full p-3 shadow-lg hover:bg-gray-50 transition-colors duration-200"
              >
                <FaChevronRight className="w-6 h-6 text-gray-600" />
              </button>
            </div>

            {/* Dots Navigation */}
            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                    index === currentIndex
                      ? 'bg-primary-600'
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-primary-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-6">
              Ready to Start Your Journey?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Join our community and experience the transformative power of yoga and wellness
            </p>
            <a
              href="/booking"
              className="btn-secondary text-lg px-8 py-4 inline-block"
            >
              Book Your First Class
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Testimonials; 