import React from 'react';
import { motion } from 'framer-motion';
import { FaOm, FaHeart, FaLeaf, FaMoon } from 'react-icons/fa';

const About = () => {
  const yogaTypes = [
    {
      icon: FaOm,
      title: 'Hatha Yoga',
      description: 'A gentle form of yoga focusing on basic postures and breathing techniques. Perfect for beginners and those seeking a balanced practice.',
      benefits: ['Improved flexibility', 'Better posture', 'Stress reduction', 'Mind-body connection'],
    },
    {
      icon: FaHeart,
      title: 'Vinyasa Flow',
      description: 'A dynamic style of yoga that links breath with movement. Energizing and invigorating, perfect for building strength and endurance.',
      benefits: ['Cardiovascular health', 'Muscle toning', 'Mental focus', 'Flow state'],
    },
    {
      icon: FaLeaf,
      title: 'Yin Yoga',
      description: 'A slow-paced style of yoga with postures held for longer periods. Deeply relaxing and restorative, ideal for stress relief.',
      benefits: ['Deep stretching', 'Joint health', 'Relaxation', 'Meditation'],
    },
    {
      icon: FaMoon,
      title: 'Meditation',
      description: 'Guided meditation sessions to cultivate mindfulness and inner peace. Learn techniques for stress management and mental clarity.',
      benefits: ['Mental clarity', 'Stress reduction', 'Emotional balance', 'Self-awareness'],
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
              About Your Yoga Instructor
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover the journey, philosophy, and expertise behind our yoga and wellness teachings
            </p>
          </motion.div>
        </div>
      </section>

      {/* Instructor Introduction */}
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
                src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
                alt="Yoga Instructor"
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
                Meet Your Guide
              </h2>
              <p className="text-gray-600 mb-6">
                With over 15 years of experience in yoga and wellness, I've dedicated my life to helping others find balance, peace, and strength through mindful movement and meditation.
              </p>
              <p className="text-gray-600 mb-6">
                My journey began in the serene mountains of India, where I studied under renowned masters and immersed myself in the ancient wisdom of yoga. Today, I blend traditional teachings with modern approaches to create accessible, transformative experiences for all levels.
              </p>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-900">Credentials</h3>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Certified Yoga Alliance Instructor (E-RYT 500)</li>
                  <li>Advanced Meditation Teacher</li>
                  <li>Wellness Coach Certification</li>
                  <li>Trauma-Informed Yoga Specialist</li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Teaching Philosophy */}
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
              Teaching Philosophy
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              My approach combines traditional wisdom with modern understanding to create a holistic practice that nurtures body, mind, and spirit.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {['Mindfulness', 'Personal Growth', 'Community'].map((value, index) => (
              <motion.div
                key={value}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-lg shadow-lg"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{value}</h3>
                <p className="text-gray-600">
                  {value === 'Mindfulness' && 'Cultivating present-moment awareness through breath and movement.'}
                  {value === 'Personal Growth' && 'Supporting individual journeys of transformation and self-discovery.'}
                  {value === 'Community' && 'Creating a supportive space for collective learning and growth.'}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Yoga Types */}
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
              Types of Yoga We Offer
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our diverse range of yoga styles, each designed to meet different needs and goals
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {yogaTypes.map((type, index) => (
              <motion.div
                key={type.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-lg shadow-lg"
              >
                <type.icon className="w-12 h-12 text-primary-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{type.title}</h3>
                <p className="text-gray-600 mb-4">{type.description}</p>
                <h4 className="font-semibold text-gray-900 mb-2">Benefits:</h4>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  {type.benefits.map((benefit) => (
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