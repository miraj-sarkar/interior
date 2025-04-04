import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { collection, getDocs, query, orderBy, limit } from "firebase/firestore";
import { db } from "../firebase/config";
import { FaSearch, FaTag, FaClock, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";

const blogPosts = [
  {
    id: 1,
    title: "10 Interior Design Trends to Watch in 2023",
    excerpt:
      "Discover the hottest interior design trends that are shaping homes and commercial spaces this year, from sustainable materials to bold color choices.",
    image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace",
    date: "June 15, 2023",
    author: "Emily Johnson",
    category: "Design Trends",
    readTime: "8 min read",
  },
  {
    id: 2,
    title: "How to Choose the Perfect Color Palette for Your Home",
    excerpt:
      "Color selection can make or break your interior design. Learn expert tips for creating harmonious color schemes that reflect your personality and enhance your space.",
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6",
    date: "May 28, 2023",
    author: "Michael Chen",
    category: "Color Theory",
    readTime: "6 min read",
  },
  {
    id: 3,
    title: "Small Space Solutions: Maximizing Functionality in Apartments",
    excerpt:
      "Living in a compact space doesn't mean sacrificing style or function. Explore creative solutions for making the most of every square foot in small apartments.",
    image: "https://images.unsplash.com/photo-1600210492493-0946911123ea",
    date: "May 12, 2023",
    author: "Sarah Williams",
    category: "Space Planning",
    readTime: "7 min read",
  },
  {
    id: 4,
    title: "Sustainable Interior Design: Eco-Friendly Materials and Practices",
    excerpt:
      "Create beautiful, environmentally responsible interiors with our guide to sustainable design practices, materials, and suppliers.",
    image: "https://images.unsplash.com/photo-1616137466211-f939a420be84",
    date: "April 30, 2023",
    author: "David Rodriguez",
    category: "Sustainability",
    readTime: "9 min read",
  },
  {
    id: 5,
    title: "The Psychology of Interior Design: How Spaces Affect Mood",
    excerpt:
      "Explore the fascinating relationship between interior design elements and human psychology. Learn how to create spaces that positively impact wellbeing.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
    date: "April 15, 2023",
    author: "Lisa Thompson",
    category: "Design Psychology",
    readTime: "10 min read",
  },
  {
    id: 6,
    title: "Mixing Design Styles: Creating Eclectic Interiors That Work",
    excerpt:
      "Blending different design styles can create unique, personalized spaces. Discover how to mix elements from various aesthetics while maintaining harmony.",
    image: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0",
    date: "March 28, 2023",
    author: "James Wilson",
    category: "Style Guide",
    readTime: "7 min read",
  },
];

const categories = [
  "Design Trends",
  "Color Theory",
  "Space Planning",
  "Sustainability",
  "Design Psychology",
  "Style Guide",
  "Furniture",
  "Lighting",
  "Home Office",
];

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
              Interior Design Blog
            </h1>
            <p className="text-xl max-w-3xl mx-auto">
              Insights, inspiration, and expert advice to help you create
              beautiful, functional spaces
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white rounded-xl overflow-hidden shadow-lg"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="relative h-64 lg:h-auto">
                <img
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
              <div className="p-8 lg:p-12">
                <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-4">
                  Featured Post
                </span>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                  {featuredPost.title}
                </h2>
                <p className="text-gray-600 mb-6">{featuredPost.excerpt}</p>
                <div className="flex flex-wrap items-center text-sm text-gray-500 mb-6 space-x-4">
                  <div className="flex items-center">
                    <FaClock className="mr-2" />
                    <span>{featuredPost.readTime}</span>
                  </div>
                  <div className="flex items-center">
                    <FaUser className="mr-2" />
                    <span>{featuredPost.author}</span>
                  </div>
                  <div className="flex items-center">
                    <FaTag className="mr-2" />
                    <span>{featuredPost.category}</span>
                  </div>
                </div>
                <Link
                  to={`/blog/${featuredPost.id}`}
                  className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Read Full Article
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Blog Posts */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold text-gray-900 mb-8">
                Latest Articles
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {blogPosts.map((post, index) => (
                  <motion.div
                    key={post.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-white rounded-lg overflow-hidden shadow-md"
                  >
                    <div className="relative h-48">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex items-center text-sm text-gray-500 mb-2">
                        <FaClock className="mr-2" />
                        <span>{post.date}</span>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        {post.title}
                      </h3>
                      <p className="text-gray-600 mb-4 line-clamp-3">
                        {post.excerpt}
                      </p>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-blue-600">
                          {post.category}
                        </span>
                        <Link
                          to={`/blog/${post.id}`}
                          className="text-blue-600 hover:text-blue-800 font-medium"
                        >
                          Read More →
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
              <div className="mt-12 flex justify-center">
                <button className="px-6 py-3 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-600 hover:text-white transition-colors">
                  Load More Articles
                </button>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1 space-y-8">
              {/* Search */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Search Articles
                </h3>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search..."
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <button className="absolute right-3 top-2.5 text-gray-400 hover:text-blue-600">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Categories */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Categories
                </h3>
                <ul className="space-y-2">
                  {categories.map((category) => (
                    <li key={category}>
                      <Link
                        to={`/blog/category/${category
                          .toLowerCase()
                          .replace(/\s+/g, "-")}`}
                        className="flex items-center justify-between text-gray-600 hover:text-blue-600"
                      >
                        <span>{category}</span>
                        <span className="bg-gray-100 text-gray-500 text-xs px-2 py-1 rounded-full">
                          {Math.floor(Math.random() * 10) + 1}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Newsletter */}
              <div className="bg-blue-600 rounded-lg shadow-md p-6 text-white">
                <h3 className="text-xl font-bold mb-4">
                  Subscribe to Our Newsletter
                </h3>
                <p className="mb-4">
                  Get the latest design tips and inspiration delivered to your
                  inbox
                </p>
                <form>
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="w-full px-4 py-2 mb-3 text-gray-900 rounded-lg focus:outline-none"
                  />
                  <button
                    type="submit"
                    className="w-full px-4 py-2 bg-white text-blue-600 font-medium rounded-lg hover:bg-blue-50 transition-colors"
                  >
                    Subscribe
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Ready to Transform Your Space?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Put our design expertise to work for you. Schedule a consultation
              today.
            </p>
            <Link
              to="/booking"
              className="inline-block px-8 py-4 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors"
            >
              Book a Consultation
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
