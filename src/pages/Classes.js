import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaClock, FaUsers, FaMapMarkerAlt, FaFilter } from 'react-icons/fa';

const Classes = () => {
  const [selectedType, setSelectedType] = useState('all');
  const [selectedLevel, setSelectedLevel] = useState('all');

  const classTypes = [
    { id: 'all', name: 'All Classes' },
    { id: 'hatha', name: 'Hatha Yoga' },
    { id: 'vinyasa', name: 'Vinyasa Flow' },
    { id: 'yin', name: 'Yin Yoga' },
    { id: 'meditation', name: 'Meditation' },
  ];

  const levels = [
    { id: 'all', name: 'All Levels' },
    { id: 'beginner', name: 'Beginner' },
    { id: 'intermediate', name: 'Intermediate' },
    { id: 'advanced', name: 'Advanced' },
  ];

  const classes = [
    {
      id: 1,
      title: 'Morning Hatha Flow',
      type: 'hatha',
      level: 'beginner',
      description: 'Start your day with a gentle Hatha yoga flow that energizes and centers your mind.',
      duration: '60 min',
      capacity: '12 students',
      location: 'Main Studio',
      price: '$25',
      schedule: 'Mon, Wed, Fri 7:00 AM',
      image: 'https://images.unsplash.com/photo-1545205597-3d9d02c29597?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    },
    {
      id: 2,
      title: 'Power Vinyasa',
      type: 'vinyasa',
      level: 'intermediate',
      description: 'A dynamic Vinyasa flow that builds strength and flexibility while maintaining mindfulness.',
      duration: '75 min',
      capacity: '15 students',
      location: 'Flow Studio',
      price: '$30',
      schedule: 'Tue, Thu 6:00 PM',
      image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    },
    {
      id: 3,
      title: 'Restorative Yin',
      type: 'yin',
      level: 'beginner',
      description: 'Deep stretching and relaxation through long-held poses to release tension and stress.',
      duration: '90 min',
      capacity: '10 students',
      location: 'Peace Studio',
      price: '$35',
      schedule: 'Wed, Fri 6:00 PM',
      image: 'https://images.unsplash.com/photo-1545205597-3d9d02c29597?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    },
    {
      id: 4,
      title: 'Mindful Meditation',
      type: 'meditation',
      level: 'all',
      description: 'Learn meditation techniques to cultivate peace and clarity in your daily life.',
      duration: '45 min',
      capacity: '20 students',
      location: 'Zen Room',
      price: '$20',
      schedule: 'Mon, Wed, Fri 12:00 PM',
      image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    },
  ];

  const filteredClasses = classes.filter(
    (cls) =>
      (selectedType === 'all' || cls.type === selectedType) &&
      (selectedLevel === 'all' || cls.level === selectedLevel)
  );

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
              Our Yoga Classes
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Find the perfect class for your journey to wellness and inner peace
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center space-x-4">
              <FaFilter className="text-gray-500" />
              <select
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className="rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
              >
                {classTypes.map((type) => (
                  <option key={type.id} value={type.id}>
                    {type.name}
                  </option>
                ))}
              </select>
              <select
                value={selectedLevel}
                onChange={(e) => setSelectedLevel(e.target.value)}
                className="rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
              >
                {levels.map((level) => (
                  <option key={level.id} value={level.id}>
                    {level.name}
                  </option>
                ))}
              </select>
            </div>
            <Link
              to="/booking"
              className="btn-primary"
            >
              Book a Class
            </Link>
          </div>
        </div>
      </section>

      {/* Classes Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredClasses.map((cls, index) => (
              <motion.div
                key={cls.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <img
                  src={cls.image}
                  alt={cls.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {cls.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{cls.description}</p>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-gray-600">
                      <FaClock className="mr-2" />
                      <span>{cls.duration}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <FaUsers className="mr-2" />
                      <span>{cls.capacity}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <FaMapMarkerAlt className="mr-2" />
                      <span>{cls.location}</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-primary-600">
                      {cls.price}
                    </span>
                    <Link
                      to={`/booking?class=${cls.id}`}
                      className="btn-secondary"
                    >
                      Book Now
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
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
              Class Packages
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the perfect package for your yoga journey
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'Starter',
                price: '$150',
                classes: '10 classes',
                features: ['Valid for 3 months', 'All class types', 'Basic props included'],
              },
              {
                name: 'Enthusiast',
                price: '$280',
                classes: '20 classes',
                features: ['Valid for 6 months', 'All class types', 'Props included', 'Priority booking'],
              },
              {
                name: 'Dedicated',
                price: '$500',
                classes: 'Unlimited',
                features: ['Valid for 12 months', 'All class types', 'Props included', 'Priority booking', 'Private session'],
              },
            ].map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-lg shadow-lg"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{plan.name}</h3>
                <div className="text-4xl font-bold text-primary-600 mb-6">{plan.price}</div>
                <div className="text-xl text-gray-600 mb-6">{plan.classes}</div>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center text-gray-600">
                      <svg
                        className="w-5 h-5 text-primary-600 mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/booking"
                  className="btn-primary w-full text-center"
                >
                  Get Started
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Classes; 