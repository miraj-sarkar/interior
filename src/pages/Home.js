import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaLeaf, FaHeart, FaBrain, FaPeace } from "react-icons/fa";

const instagramFeed = [
  {
    id: 1,
    imageUrl: "https://images.unsplash.com/photo-1506126613408-eca07ce68773",
    caption: "Morning flow in our sunlit studio 🧘‍♀️✨ #MorningYoga #YogaLife",
    likes: 234,
    comments: 18,
    link: "https://instagram.com/p/xyz123",
  },
  {
    id: 2,
    imageUrl: "https://images.unsplash.com/photo-1599901860904-17e6ed7083a0",
    caption:
      "Join our upcoming meditation workshop this weekend 🌿 #Meditation #InnerPeace",
    likes: 187,
    comments: 12,
    link: "https://instagram.com/p/xyz124",
  },
  {
    id: 3,
    imageUrl: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b",
    caption:
      "Mastering the warrior pose with our advanced class 💪 #YogaPose #Strength",
    likes: 326,
    comments: 24,
    link: "https://instagram.com/p/xyz125",
  },
  {
    id: 4,
    imageUrl: "https://images.unsplash.com/photo-1591228127791-8e2eaef098d3",
    caption:
      "Peaceful vibes in our evening restorative session 🌙 #RestorativeYoga #Peace",
    likes: 289,
    comments: 15,
    link: "https://instagram.com/p/xyz126",
  },
  {
    id: 5,
    imageUrl: "https://images.unsplash.com/photo-1516939884455-1445c8652f83",
    caption: "Group meditation in the garden 🌺 #OutdoorYoga #Community",
    likes: 412,
    comments: 32,
    link: "https://instagram.com/p/xyz127",
  },
  {
    id: 6,
    imageUrl: "https://images.unsplash.com/photo-1545205597-3d9d02c29597",
    caption:
      "New beginners class starting next week! 🌟 #YogaForBeginners #StartYourJourney",
    likes: 156,
    comments: 21,
    link: "https://instagram.com/p/xyz128",
  },
];

const Home = () => {
  const benefits = [
    {
      icon: FaLeaf,
      title: "Natural Healing",
      description:
        "Connect with nature and find your inner balance through mindful practices.",
    },
    {
      icon: FaHeart,
      title: "Physical Wellness",
      description:
        "Improve flexibility, strength, and overall physical health.",
    },
    {
      icon: FaBrain,
      title: "Mental Clarity",
      description: "Enhance focus, reduce stress, and achieve mental peace.",
    },
    {
      icon: FaPeace,
      title: "Inner Peace",
      description: "Discover tranquility and harmony within yourself.",
    },
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Yoga Student",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      text: "The classes have transformed my life. I feel more balanced and centered than ever before.",
    },
    {
      name: "Michael Chen",
      role: "Wellness Enthusiast",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      text: "The instructor's expertise and calming presence make every session truly special.",
    },
    {
      name: "Emma Davis",
      role: "Meditation Practitioner",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      text: "I've found my spiritual home here. The community is welcoming and supportive.",
    },
  ];

  const featuredClasses = [
    {
      title: "Vinyasa Flow",
      description: "Dynamic sequences linking breath with movement",
      image:
        "https://images.unsplash.com/photo-1603988363607-e1e4a66962c6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      duration: "60 min",
      level: "All Levels",
    },
    {
      title: "Meditation & Mindfulness",
      description: "Guided sessions for inner peace and mental clarity",
      image:
        "https://images.unsplash.com/photo-1591228127791-8e2eaef098d3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      duration: "45 min",
      level: "Beginner",
    },
    {
      title: "Power Yoga",
      description: "Strengthen your body and mind through challenging poses",
      image:
        "https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      duration: "75 min",
      level: "Intermediate",
    },
  ];

  return (
    <div className="pt-16">
      {/* Enhanced Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1545205597-3d9d02c29597?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
            alt="Yoga in nature"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-transparent"></div>
        </div>
        <div className="relative z-10 text-center text-white px-4 max-w-5xl mx-auto">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-block px-6 py-2 border-2 border-green-400 rounded-full text-green-400 text-sm md:text-base mb-6"
          >
            Welcome to Your Wellness Journey
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
          >
            Transform Your Life Through{" "}
            <span className="text-green-400">Yoga</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto"
          >
            Discover inner peace, physical strength, and mental clarity through
            our expert-led yoga and wellness classes.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              to="/booking"
              className="btn-primary text-lg px-8 py-4 rounded-full bg-green-500 hover:bg-green-600 transition-all"
            >
              Start Your Journey
            </Link>
            <Link
              to="/classes"
              className="btn-secondary text-lg px-8 py-4 rounded-full border-2 border-white hover:bg-white hover:text-gray-900 transition-all"
            >
              Explore Classes
            </Link>
          </motion.div>
        </div>
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.8,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            className="text-white"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              The Benefits of Yoga & Wellness
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Experience the transformative power of yoga and wellness practices
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="text-center p-6 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors duration-300"
              >
                <benefit.icon className="w-12 h-12 mx-auto mb-4 text-primary-600" />
                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* New Featured Classes Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Featured Classes
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Join our most popular yoga and wellness sessions
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredClasses.map((class_, index) => (
              <motion.div
                key={class_.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative group rounded-xl overflow-hidden shadow-lg"
              >
                <div className="aspect-w-16 aspect-h-9">
                  <img
                    src={class_.image}
                    alt={class_.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent p-6 flex flex-col justify-end text-white">
                  <h3 className="text-2xl font-bold mb-2">{class_.title}</h3>
                  <p className="text-gray-200 mb-4">{class_.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-green-400">{class_.duration}</span>
                    <span className="text-green-400">{class_.level}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Our Students Say
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Join our community of satisfied students who have transformed
              their lives
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-lg shadow-lg"
              >
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full mx-auto mb-4 object-cover"
                />
                <p className="text-gray-600 mb-4 italic">
                  "{testimonial.text}"
                </p>
                <div className="text-center">
                  <h4 className="font-semibold">{testimonial.name}</h4>
                  <p className="text-gray-500">{testimonial.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Upcoming Events & Workshops
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Join our special events and deepen your practice
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Meditation Retreat",
                date: "June 15-17, 2024",
                image:
                  "https://images.unsplash.com/photo-1516939884455-1445c8652f83?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
                price: "$299",
                spots: "5 spots left",
              },
              {
                title: "Yoga Teacher Training",
                date: "July 1-30, 2024",
                image:
                  "https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
                price: "$1,999",
                spots: "3 spots left",
              },
              {
                title: "Mindfulness Workshop",
                date: "June 25, 2024",
                image:
                  "https://images.unsplash.com/photo-1591228127791-8e2eaef098d3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
                price: "$99",
                spots: "10 spots left",
              },
            ].map((event, index) => (
              <motion.div
                key={event.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-lg overflow-hidden group"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-green-500 text-white px-4 py-1 rounded-full text-sm">
                    {event.spots}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                  <p className="text-gray-600 mb-4">{event.date}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-green-600 font-semibold">
                      {event.price}
                    </span>
                    <button className="px-4 py-2 rounded-full bg-green-500 text-white hover:bg-green-600 transition-colors">
                      Register Now
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Instructor Spotlight Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Meet Our Expert Instructors
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Learn from our experienced and certified yoga teachers
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: "Sarah Johnson",
                role: "Vinyasa Flow Expert",
                image:
                  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
                experience: "10+ years",
              },
              {
                name: "Michael Chen",
                role: "Meditation Guide",
                image:
                  "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
                experience: "8 years",
              },
              {
                name: "Emma Davis",
                role: "Power Yoga Instructor",
                image:
                  "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
                experience: "12 years",
              },
              {
                name: "David Wilson",
                role: "Mindfulness Coach",
                image:
                  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
                experience: "15 years",
              },
            ].map((instructor, index) => (
              <motion.div
                key={instructor.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-lg p-6 text-center group"
              >
                <div className="relative w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
                  <img
                    src={instructor.image}
                    alt={instructor.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <h3 className="text-xl font-bold mb-2">{instructor.name}</h3>
                <p className="text-green-600 mb-2">{instructor.role}</p>
                <p className="text-gray-600">
                  {instructor.experience} experience
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Class Schedule Preview Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Weekly Class Schedule
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Find the perfect class for your schedule
            </p>
          </motion.div>

          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x">
              {[
                {
                  day: "Monday",
                  classes: [
                    {
                      time: "7:00 AM",
                      name: "Morning Flow",
                      instructor: "Sarah",
                    },
                    {
                      time: "12:00 PM",
                      name: "Power Yoga",
                      instructor: "Emma",
                    },
                    {
                      time: "6:00 PM",
                      name: "Gentle Yoga",
                      instructor: "Michael",
                    },
                  ],
                },
                {
                  day: "Wednesday",
                  classes: [
                    {
                      time: "8:00 AM",
                      name: "Vinyasa Flow",
                      instructor: "David",
                    },
                    {
                      time: "1:00 PM",
                      name: "Meditation",
                      instructor: "Michael",
                    },
                    { time: "5:30 PM", name: "Yin Yoga", instructor: "Sarah" },
                  ],
                },
                {
                  day: "Friday",
                  classes: [
                    { time: "7:30 AM", name: "Power Flow", instructor: "Emma" },
                    {
                      time: "12:30 PM",
                      name: "Mindfulness",
                      instructor: "David",
                    },
                    {
                      time: "6:30 PM",
                      name: "Restorative",
                      instructor: "Sarah",
                    },
                  ],
                },
              ].map((schedule, index) => (
                <motion.div
                  key={schedule.day}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="p-6"
                >
                  <h3 className="text-xl font-bold mb-4 text-center">
                    {schedule.day}
                  </h3>
                  <div className="space-y-4">
                    {schedule.classes.map((class_) => (
                      <div
                        key={class_.time}
                        className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50"
                      >
                        <div>
                          <p className="font-semibold">{class_.name}</p>
                          <p className="text-sm text-gray-600">
                            with {class_.instructor}
                          </p>
                        </div>
                        <span className="text-green-600">{class_.time}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          <div className="text-center mt-8">
            <Link
              to="/schedule"
              className="inline-block px-8 py-3 rounded-full bg-green-500 text-white hover:bg-green-600 transition-colors"
            >
              View Full Schedule
            </Link>
          </div>
        </div>
      </section>

      {/* Wellness Blog Preview Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Latest from Our Blog
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Insights and tips for your wellness journey
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Benefits of Morning Yoga Practice",
                excerpt:
                  "Discover why practicing yoga in the morning can transform your entire day...",
                image:
                  "https://images.unsplash.com/photo-1506126613408-eca07ce68773?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
                category: "Yoga Practice",
              },
              {
                title: "Mindfulness in Daily Life",
                excerpt:
                  "Learn how to incorporate mindfulness into your daily routine...",
                image:
                  "https://images.unsplash.com/photo-1591228127791-8e2eaef098d3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
                category: "Mindfulness",
              },
              {
                title: "Nutrition for Yogis",
                excerpt:
                  "The best foods to support your yoga practice and overall wellness...",
                image:
                  "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
                category: "Nutrition",
              },
            ].map((post, index) => (
              <motion.article
                key={post.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-lg overflow-hidden group"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm">
                    {post.category}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-green-600 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <Link
                    to="/blog"
                    className="text-green-600 hover:text-green-700 font-medium inline-flex items-center"
                  >
                    Read More
                    <svg
                      className="w-4 h-4 ml-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Instagram Feed Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Follow Us on Instagram
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              @yogawellness - Join our community of{" "}
              {instagramFeed.reduce((acc, post) => acc + post.likes, 0)}+
              followers
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {instagramFeed.map((post, index) => (
              <motion.a
                key={post.id}
                href={post.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative aspect-square overflow-hidden group"
              >
                <img
                  src={`${post.imageUrl}?w=600&h=600&fit=crop`}
                  alt={post.caption}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-4">
                    <div className="flex items-center space-x-4 mb-2">
                      <span className="flex items-center">
                        <svg
                          className="w-5 h-5 mr-1"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" />
                        </svg>
                        {post.likes}
                      </span>
                      <span className="flex items-center">
                        <svg
                          className="w-5 h-5 mr-1"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" />
                        </svg>
                        {post.comments}
                      </span>
                    </div>
                    <p className="text-sm text-center line-clamp-2">
                      {post.caption}
                    </p>
                  </div>
                </div>
              </motion.a>
            ))}
          </div>

          <div className="text-center mt-10">
            <a
              href="https://instagram.com/yogawellness"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 border-2 border-green-500 text-green-500 rounded-full hover:bg-green-500 hover:text-white transition-colors duration-300"
            >
              <span className="mr-2">Follow Us on Instagram</span>
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Updated CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-400 to-green-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Start Your Wellness Journey?
            </h2>
            <p className="text-xl mb-8">
              Join our community and experience the transformative power of yoga
              and wellness
            </p>
            <Link
              to="/booking"
              className="btn-secondary text-lg px-8 py-4 inline-block rounded-full bg-white text-green-800 hover:bg-green-100 transition-all"
            >
              Book Your First Class
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
