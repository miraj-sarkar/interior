import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { collection, getDocs, query, orderBy, limit } from "firebase/firestore";
import { db } from "../firebase/config";
import { FaSearch, FaTag, FaClock, FaUser } from "react-icons/fa";

const blogPosts = [
  {
    id: 1,
    title: "The Ultimate Guide to Morning Yoga Routine",
    excerpt:
      "Start your day with energy and purpose through these revitalizing yoga poses. Learn how a consistent morning practice can transform your entire day and boost your overall well-being.",
    category: "Yoga",
    author: "Sarah Wilson",
    readTime: "8 min read",
    imageUrl:
      "https://images.unsplash.com/photo-1506126613408-eca07ce68773?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    date: "March 15, 2024",
    featured: true,
  },
  {
    id: 2,
    title: "Mindfulness Meditation: A Beginner's Journey",
    excerpt:
      "Discover the transformative power of mindfulness meditation. This comprehensive guide will walk you through the basics of starting a meditation practice and maintaining it in your daily life.",
    category: "Meditation",
    author: "Michael Chang",
    readTime: "6 min read",
    imageUrl:
      "https://images.unsplash.com/photo-1591228127791-8e2eaef098d3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    date: "March 12, 2024",
  },
  {
    id: 3,
    title: "Advanced Yoga Poses for Core Strength",
    excerpt:
      "Ready to take your practice to the next level? These challenging poses will help you build core strength while improving balance and flexibility. Perfect for intermediate to advanced practitioners.",
    category: "Yoga",
    author: "Emma Rodriguez",
    readTime: "10 min read",
    imageUrl:
      "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    date: "March 10, 2024",
  },
  {
    id: 4,
    title: "The Connection Between Diet and Mental Wellness",
    excerpt:
      "Explore how your food choices affect your mental health and overall well-being. Learn about the best foods for supporting your yoga practice and maintaining emotional balance.",
    category: "Wellness",
    author: "Dr. James Mitchell",
    readTime: "12 min read",
    imageUrl:
      "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    date: "March 8, 2024",
  },
  {
    id: 5,
    title: "Creating a Sustainable Home Yoga Practice",
    excerpt:
      "Transform your living space into a peaceful yoga sanctuary. Get tips on setting up your home practice, staying motivated, and maintaining consistency in your yoga journey.",
    category: "Lifestyle",
    author: "Lisa Chen",
    readTime: "7 min read",
    imageUrl:
      "https://images.unsplash.com/photo-1545205597-3d9d02c29597?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    date: "March 5, 2024",
  },
  {
    id: 6,
    title: "Breathing Techniques for Stress Relief",
    excerpt:
      "Master these powerful pranayama techniques to reduce stress and anxiety. Learn how proper breathing can help you stay calm and centered throughout your day.",
    category: "Meditation",
    author: "David Kumar",
    readTime: "5 min read",
    imageUrl:
      "https://images.unsplash.com/photo-1506126613408-eca07ce68773?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    date: "March 3, 2024",
  },
  {
    id: 7,
    title: "The Art of Restorative Yoga",
    excerpt:
      "Discover the healing power of restorative yoga. Learn how gentle poses and proper props can help you recover from stress, injury, and fatigue.",
    category: "Yoga",
    author: "Rachel White",
    readTime: "9 min read",
    imageUrl:
      "https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    date: "March 1, 2024",
  },
  {
    id: 8,
    title: "Seasonal Wellness: Adapting Your Practice",
    excerpt:
      "Learn how to modify your yoga and wellness routine according to the seasons. Discover practices that will keep you balanced throughout the year.",
    category: "Wellness",
    author: "Mark Johnson",
    readTime: "8 min read",
    imageUrl:
      "https://images.unsplash.com/photo-1516939884455-1445c8652f83?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    date: "February 28, 2024",
  },
];

const categories = ["Yoga", "Meditation", "Wellness", "Lifestyle"];

const Blog = () => {
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const postsRef = collection(db, "blog-posts");
      const q = query(postsRef, orderBy("createdAt", "desc"), limit(9));
      const querySnapshot = await getDocs(q);
      const postsData = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      // Assuming postsData is already in the desired format
      // If not, you might need to map it to the blogPosts format
      // blogPosts = postsData.map(post => ({ ...post, date: new Date(post.date).toLocaleDateString() }));
    } catch (error) {
      console.error("Error fetching posts:", error);
    } finally {
      setLoading(false);
    }
  };

  const filteredPosts = blogPosts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "all" || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  // Featured post is the first post in the array
  const featuredPost = blogPosts[0];
  const regularPosts = filteredPosts.filter(
    (post) => post.id !== featuredPost.id
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-green-600 to-green-800 text-white py-32">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-8">
              Wellness & Yoga Blog
            </h1>
            <p className="text-xl md:text-2xl opacity-90">
              Explore our collection of articles about yoga, meditation, and
              mindful living
            </p>
          </motion.div>
        </div>
      </div>

      {/* Search and Filter Section */}
      <div className="sticky top-20 z-10 bg-white shadow-md py-6 mb-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-6 justify-between items-center">
            <div className="relative w-full md:w-96">
              <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search articles..."
                className="w-full pl-12 pr-4 py-3 rounded-full border-2 border-green-500 focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="flex gap-3 flex-wrap justify-center">
              <button
                onClick={() => setSelectedCategory("all")}
                className={`px-6 py-3 rounded-full flex items-center gap-2 transition-colors ${
                  selectedCategory === "all"
                    ? "bg-green-600 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-green-50"
                }`}
              >
                All
              </button>
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-3 rounded-full flex items-center gap-2 transition-colors ${
                    selectedCategory === category
                      ? "bg-green-600 text-white"
                      : "bg-gray-100 text-gray-700 hover:bg-green-50"
                  }`}
                >
                  <FaTag className="text-sm" />
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Featured Post Section */}
      <section className="container mx-auto px-4 mb-24">
        <motion.article
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl overflow-hidden shadow-xl"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="h-96 lg:h-auto">
              <img
                src={featuredPost.imageUrl}
                alt={featuredPost.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-8 lg:p-12 flex flex-col justify-center">
              <span className="inline-block px-4 py-2 rounded-full bg-green-100 text-green-800 text-sm font-medium mb-6">
                Featured Post
              </span>
              <h2 className="text-3xl font-bold mb-6 hover:text-green-600 transition-colors">
                {featuredPost.title}
              </h2>
              <p className="text-gray-600 mb-8 text-lg">
                {featuredPost.excerpt}
              </p>
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center space-x-4">
                  <FaUser className="text-green-600" />
                  <span className="text-gray-600">{featuredPost.author}</span>
                </div>
                <div className="flex items-center space-x-4">
                  <FaClock className="text-green-600" />
                  <span className="text-gray-600">{featuredPost.readTime}</span>
                </div>
              </div>
              <button className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-lg font-medium rounded-full text-white bg-green-600 hover:bg-green-700 transition-colors">
                Read Article
              </button>
            </div>
          </div>
        </motion.article>
      </section>

      {/* Latest Posts Grid */}
      <section className="container mx-auto px-4 mb-24">
        <h2 className="text-3xl font-bold mb-12 text-gray-900">
          Latest Articles
        </h2>
        <div className="grid grid-cols-1 gap-12">
          {regularPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex flex-col md:flex-row h-full">
                <div className="md:w-1/2">
                  <img
                    src={post.imageUrl}
                    alt={post.title}
                    className="w-full h-64 md:h-full object-cover"
                  />
                </div>
                <div className="md:w-1/2 p-8 lg:p-12 flex flex-col justify-between">
                  <div>
                    <span className="inline-block px-4 py-2 rounded-full bg-green-100 text-green-800 text-sm font-medium mb-6">
                      {post.category}
                    </span>
                    <h2 className="text-2xl font-bold mb-6 hover:text-green-600 transition-colors">
                      {post.title}
                    </h2>
                    <p className="text-gray-600 mb-6 line-clamp-3">
                      {post.excerpt}
                    </p>
                  </div>
                  <div className="flex flex-col gap-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <FaUser className="text-green-600" />
                        <span className="text-gray-600">{post.author}</span>
                      </div>
                      <div className="flex items-center space-x-4">
                        <FaClock className="text-green-600" />
                        <span className="text-gray-600">{post.readTime}</span>
                      </div>
                    </div>
                    <button className="w-full inline-flex items-center justify-center px-8 py-4 border border-transparent text-lg font-medium rounded-full text-white bg-green-600 hover:bg-green-700 transition-colors">
                      Read Article
                    </button>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="bg-green-600 text-white py-24 mb-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">
              Subscribe to Our Newsletter
            </h2>
            <p className="text-lg mb-8 opacity-90">
              Get the latest articles and wellness tips delivered straight to
              your inbox
            </p>
            <form className="flex flex-col sm:flex-row gap-4 justify-center">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-6 py-4 rounded-full text-gray-900 w-full sm:w-96"
              />
              <button className="px-8 py-4 bg-white text-green-600 rounded-full font-medium hover:bg-green-50 transition-colors">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
