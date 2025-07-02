import React, { useState, useEffect } from "react";
import {
  Menu,
  X,
  ShoppingCart,
  Download,
  Star,
  TrendingUp,
  Security,
  Support,
  CheckCircle,
  ArrowRight,
  BookOpen,
  Users,
  Award,
  Zap,
  Shield,
  HeadphonesIcon,
  UserCircle,
  UserCircle2,
} from "lucide-react";
import { motion } from "framer-motion";
import Image1 from "../images/Thumbnails Assets Pack Bundle.png";
import Image2 from "../images/GRAPHICBUNDLE-675-GB-PLAN-si8jx2.png";
import Image3 from "../images/AI Reels Bundle.png";
import Image4 from "../images/ALL-in-One-Bundle.png";
import Image5 from "../images/2025 New Digital Products.png";
import Image6 from "../images/1700  ai reels Bundle DM Digital _20231116_201830_0000.png";
import Image7 from "../images/500+ 𝙒𝙤𝙧𝙙𝙋𝙧𝙚𝙨𝙨 𝙀𝙡𝙚𝙢𝙚𝙣𝙩𝙤𝙧 𝙏𝙚𝙢𝙥𝙡𝙖𝙩𝙚 𝙆𝙞𝙩𝙨.png";
import Image8 from "../images/30,000+ SOCIAL MEDIA POSTS BUNDLE.png";

const Dashboard = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "Products", href: "#products" },
    { name: "Bundles", href: "#bundles" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  const features = [
    {
      icon: <Download className="w-12 h-12 text-blue-500" />,
      title: "Instant Download",
      description:
        "Access your digital products immediately after purchase with no waiting time",
    },
    {
      icon: <Shield className="w-12 h-12 text-green-500" />,
      title: "MRR Licensed",
      description:
        "Full Master Resell Rights included with every purchase for maximum profit",
    },
    {
      icon: <HeadphonesIcon className="w-12 h-12 text-purple-500" />,
      title: "24/7 Support",
      description:
        "Expert support team ready to help you succeed in your digital journey",
    },
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Digital Entrepreneur",
      rating: 5,
      text: "Digital Product transformed my business! The MRR bundles are perfectly packaged and reasonably priced. Perfect for freelancers starting out.",
      avatar: "SJ",
      color: "bg-blue-500",
    },
    {
      name: "Mike Chen",
      role: "Content Creator",
      rating: 5,
      text: "One of the best PLR websites around. Competitive prices, great quality, and an amazing knowledge base for beginners. Highly recommended!",
      avatar: "MC",
      color: "bg-purple-500",
    },
  ];

  const productCategories = [
    {
      title: "MRR eBook Bundles",
      description: "Complete packages ready to sell with full rights",
      image: Image1,
      price: "From $29",
      bestseller: true,
      gradient: "from-blue-500 to-purple-600",
    },
    {
      title: "PLR Content Packs",
      description: "Customizable digital products for your brand",
      image: Image2,
      price: "From $19",
      gradient: "from-green-500 to-blue-500",
    },
    {
      title: "Graphics Bundles",
      description: "Professional design assets and templates",
      image: Image3,
      price: "From $24",
      gradient: "from-pink-500 to-red-500",
    },
    {
      title: "Social Media Kits",
      description: "Eye-catching templates for posts and stories",
      image: Image4,
      price: "From $22",
      gradient: "from-yellow-400 to-orange-500",
    },
    {
      title: "Canva Templates",
      description: "Easy-to-edit designs for marketers and coaches",
      image: Image5,
      price: "From $21",
      gradient: "from-teal-400 to-cyan-500",
    },
    {
      title: "Business Starter Packs",
      description: "Ready-made tools for online entrepreneurs",
      image: Image6,
      price: "From $35",
      gradient: "from-indigo-500 to-blue-400",
    },
    {
      title: "Email Marketing Kits",
      description: "Pre-written email sequences to boost sales",
      image: Image7,
      price: "From $18",
      gradient: "from-rose-400 to-fuchsia-500",
    },
    {
      title: "Ecommerce Branding Packs",
      description: "Logo, palette & brand kit for your store",
      image: Image8,
      price: "From $26",
      gradient: "from-emerald-400 to-lime-500",
    },
  ];
  

  const stats = [
    {
      number: "500+",
      label: "Digital Products",
      icon: <BookOpen className="w-6 h-6" />,
    },
    {
      number: "10K+",
      label: "Happy Customers",
      icon: <Users className="w-6 h-6" />,
    },
    {
      number: "98%",
      label: "Success Rate",
      icon: <TrendingUp className="w-6 h-6" />,
    },
    { number: "MRR", label: "Licensed", icon: <Award className="w-6 h-6" /> },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Navigation */}
      <nav
        className={`fixed w-full z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-lg"
            : "bg-white/90 backdrop-blur-sm"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Digital Product
              </h1>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors duration-200"
                  >
                    {item.name}
                  </a>
                ))}
                <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full hover:from-blue-700 hover:to-purple-700 transition-all duration-200 flex items-center space-x-2">
                  <ShoppingCart className="w-4 h-4" />
                  <span>Shop Now</span>
                </button>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-gray-700 hover:text-blue-600 p-2"
              >
                {mobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-md border-t">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <a
                  key={item}
                  href="#"
                  className="text-gray-700 hover:text-blue-600 block px-3 py-2 text-base font-medium"
                >
                  {item}
                </a>
              ))}
              <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full mt-4 flex items-center justify-center space-x-2">
                <ShoppingCart className="w-4 h-4" />
                <span>Shop Now</span>
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[70vh]">
            <div className="space-y-8">
              <div className="inline-flex items-center bg-gradient-to-r from-orange-100 to-red-100 text-orange-800 px-4 py-2 rounded-full text-sm font-medium">
                🔥 Big Discounts Available Now!
              </div>

              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
                Get on the Road to{" "}
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Digital Riches
                </span>
              </h1>

              <p className="text-xl text-gray-600 leading-relaxed max-w-2xl">
                Entrepreneurship is one step closer with our fully sorted &
                packaged MRR eBook bundles and PLR content. Start your digital
                business today!
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-200 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl">
                  <span>Explore Products</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
                <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-full text-lg font-semibold hover:border-blue-500 hover:text-blue-600 transition-all duration-200">
                  View Bundles
                </button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="flex items-center justify-center space-x-2 mb-2">
                      <div className="text-blue-600">{stat.icon}</div>
                      <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
                        {stat.number}
                      </h3>
                    </div>
                    <p className="text-sm text-gray-600">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="relative z-10">
                <img
                  src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=500&fit=crop"
                  alt="Digital Business Success"
                  className="w-full h-auto rounded-2xl shadow-2xl"
                />
              </div>

              {/* Floating Cards */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl p-4 shadow-lg z-20 animate-pulse">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="text-green-500 w-8 h-8" />
                  <div>
                    <p className="font-semibold text-gray-900">
                      Instant Access
                    </p>
                    <p className="text-sm text-gray-600">
                      Download immediately
                    </p>
                  </div>
                </div>
              </div>

              <div className="absolute -top-6 -right-6 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl p-4 shadow-lg z-20">
                <div className="flex items-center space-x-2">
                  <Zap className="w-6 h-6" />
                  <span className="font-semibold">MRR Licensed</span>
                </div>
              </div>

              {/* Background Gradient */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-200/20 to-purple-200/20 rounded-2xl transform rotate-3 scale-105 -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Why Choose Digital Product?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We make digital entrepreneurship accessible to everyone with our
              comprehensive bundles and unbeatable prices
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="group">
                <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 text-center h-full border border-gray-100">
                  <div className="mb-6 flex justify-center">
                    <div className="p-4 bg-gradient-to-br from-blue-50 to-purple-50 rounded-full group-hover:scale-110 transition-transform duration-300">
                      {feature.icon}
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-gray-900">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50" id="products">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Featured Product Categories
            </h2>
            <p className="text-xl text-gray-600">
              Discover our best-selling digital product bundles
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {productCategories.map((product, index) => (
              <div key={index} className="group">
                <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden h-full">
                  {/* 🖼️ Larger Image Section */}
                  <div className="relative h-[420px] sm:h-[400px] md:h-[300px] lg:h-[500px] overflow-hidden rounded-t-2xl">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-full h-100 object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div
                      className={`absolute inset-0 bg-gradient-to-r ${product.gradient} opacity-0 group-hover:opacity-30 transition-opacity duration-300`}
                    ></div>
                  </div>

                  {/* 📄 Compact Text Section */}
                  <div className="p-4">
                    <h3 className="text-lg font-semibold mb-2 text-gray-900">
                      {product.title}
                    </h3>
                    <p className="text-gray-600 mb-3 text-sm leading-snug">
                      {product.description}
                    </p>
                    <div className="flex justify-between items-center">
                      <span className="text-xl font-bold text-blue-600">
                        {product.price}
                      </span>
                      <button
                        className={`bg-gradient-to-r ${product.gradient} text-white px-5 py-2 rounded-full text-sm font-medium hover:shadow-lg transition-all duration-200`}
                      >
                        View Details
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      {/* <section className="py-20 bg-white" id="about">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              About Us
            </h2>
          </div>
        </div>
      </section> */}

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              What Our Customers Say
            </h2>
            <p className="text-xl text-gray-600">
              Customer satisfaction is our utmost priority
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="group">
                <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 h-full border-l-4 border-blue-500">
                  <div className="flex items-center mb-6">
                    <div
                      className={`w-12 h-12 ${testimonial.color} rounded-full flex items-center justify-center text-white font-bold text-lg mr-4`}
                    >
                      {testimonial.avatar}
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 text-lg">
                        {testimonial.name}
                      </h4>
                      <p className="text-gray-600">{testimonial.role}</p>
                    </div>
                  </div>

                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 text-yellow-400 fill-current"
                      />
                    ))}
                  </div>

                  <p className="text-gray-700 italic leading-relaxed">
                    "{testimonial.text}"
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Start Your Digital Business?
          </h2>
          <p className="text-xl mb-10 opacity-90 max-w-3xl mx-auto">
            Join thousands of entrepreneurs who trust Digital Product for their
            digital products. Start your journey to financial freedom today!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-all duration-200 flex items-center justify-center space-x-2 shadow-lg">
              <ShoppingCart className="w-5 h-5" />
              <span>Browse Products</span>
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-200">
              Contact Us
            </button>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
          <div className="absolute -top-20 -left-20 w-40 h-40 bg-white/10 rounded-full"></div>
          <div className="absolute -bottom-20 -right-20 w-60 h-60 bg-white/10 rounded-full"></div>
          <div className="absolute top-1/2 left-1/4 w-20 h-20 bg-white/5 rounded-full"></div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 bg-gray-900 text-white" id="contact">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            <div className="md:col-span-2">
              <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Digital Product
              </h3>
              <p className="text-gray-300 mb-6 leading-relaxed max-w-md">
                Your trusted partner for MRR and PLR digital products. We
                empower entrepreneurs and freelancers to build successful
                digital businesses with our comprehensive product bundles.
              </p>
              <div className="flex space-x-4">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-200 cursor-pointer">
                  <BookOpen className="w-5 h-5" />
                </div>
                <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-200 cursor-pointer">
                  <Users className="w-5 h-5" />
                </div>
                <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-200 cursor-pointer">
                  <TrendingUp className="w-5 h-5" />
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Products</h4>
              <div className="space-y-3">
                <a
                  href="#"
                  className="block text-gray-300 hover:text-white transition-colors duration-200"
                >
                  MRR Bundles
                </a>
                <a
                  href="#"
                  className="block text-gray-300 hover:text-white transition-colors duration-200"
                >
                  PLR Content
                </a>
                <a
                  href="#"
                  className="block text-gray-300 hover:text-white transition-colors duration-200"
                >
                  Graphics
                </a>
                <a
                  href="#"
                  className="block text-gray-300 hover:text-white transition-colors duration-200"
                >
                  Templates
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Support</h4>
              <div className="space-y-3">
                <a
                  href="#"
                  className="block text-gray-300 hover:text-white transition-colors duration-200"
                >
                  Help Center
                </a>
                <a
                  href="#"
                  className="block text-gray-300 hover:text-white transition-colors duration-200"
                >
                  Contact Us
                </a>
                <a
                  href="#"
                  className="block text-gray-300 hover:text-white transition-colors duration-200"
                >
                  FAQ
                </a>
                <a
                  href="#"
                  className="block text-gray-300 hover:text-white transition-colors duration-200"
                >
                  Live Chat
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-700 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 text-center md:text-left">
                © 2025 Digital Product. All rights reserved. Built with ❤️ for
                digital entrepreneurs.
              </p>
              <div className="flex space-x-6 mt-4 md:mt-0">
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  Privacy Policy
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  Terms of Service
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  Refund Policy
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Dashboard;
