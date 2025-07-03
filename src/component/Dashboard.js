import React, { useState, useEffect, useRef } from "react";
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
import Image1 from "../images/social post bundle.jpeg";
import Image2 from "../images/AI health reels.jpeg";
import Image3 from "../images/AI premium reels.jpeg";
import Image4 from "../images/Viral links.jpeg";
import Image5 from "../images/Graphic Designer Pack.jpeg";
import Image6 from "../images/50+ landing Pages Bundle.jpeg";
import Image7 from "../images/AI Monkey.jpeg";
import Image8 from "../images/11000+ kids Preschool.jpeg";
import Image9 from "../images/luxury clips.jpeg";
import Image10 from "../images/Thumbnails.jpeg";
import Image11 from "../images/ADD.jpg";

const Dashboard = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const productsRef = useRef(null);

  // Scroll handler function
  const scrollToProducts = () => {
    productsRef.current?.scrollIntoView({ behavior: "smooth" });
  };

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
      image: Image1,
      price: "Price: Rs 299",
      gradient: "from-blue-500 to-purple-600",
      link: 'https://superprofile.bio/vp/social-media-posts-bundle-'
    },
    {
      image: Image2,
      price: "Price: Rs 299",
      gradient: "from-green-500 to-blue-500",
      link: 'https://superprofile.bio/vp/ai-health-reels-bundle--692'
    },
    {
      image: Image3,
      price: "Price: Rs 99",
      gradient: "from-yellow-400 to-orange-500",
      link: 'https://superprofile.bio/vp/ai-premium-reels-bundle-'
    },
    {
      image: Image4,
      price: "Price: Rs 149",
      gradient: "from-teal-400 to-cyan-500",
      link: 'https://superprofile.bio/vp/aaa-45'
    },
    {
      image: Image5,
      price: "Price: Rs 199",
      gradient: "from-indigo-500 to-blue-400",
      link: 'https://superprofile.bio/vp/ultimate-graphic-designer-pack'
    },
    {
      image: Image7,
      price: "Price: Rs 149",
      gradient: "from-rose-400 to-fuchsia-500",
      link: 'https://superprofile.bio/vp/landing-pages-bundle--445'
    },
    {
      image: Image6,
      price: "Price: Rs 99",
      gradient: "from-emerald-400 to-lime-500",
      link: 'https://superprofile.bio/vp/ai-monkey-vlogs-898'
    },
    {
      image: Image8,
      price: "Price: Rs 99",
      gradient: "from-emerald-400 to-lime-500",
      link: 'https://superprofile.bio/vp/11000--kids-worksheet-bundle'
    },
    {
      image: Image9,
      price: "Price: Rs 99",
      gradient: "from-emerald-400 to-lime-500",
      link: 'https://superprofile.bio/vp/luxury-clips--725'
    },
    {
      image: Image10,
      price: "Price: Rs 199",
      gradient: "from-emerald-400 to-lime-500",
      link: 'https://superprofile.bio/vp/thumbnail-assets-pack-bundle'
    },
    {
      image: Image11,
      price: "Price: Rs 1899",
      gradient: "from-emerald-400 to-lime-500",
      link: 'https://superprofile.bio/vp/the-digitalproductbundle'
    },
  ];

  const stats = [
    {
      number: "10+",
      label: "Digital Products",
      icon: <BookOpen className="w-6 h-6" />,
    },
    {
      number: "1K+",
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
      <section className="pt-20 pb-16 px-4" id="home">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[70vh]">
            <div className="space-y-8">
              <div className="inline-flex items-center bg-gradient-to-r from-orange-100 to-red-100 text-orange-800 px-4 py-2 rounded-full text-sm font-medium">
                🔥 Big Discounts Available Now!
              </div>

              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
                Get on the Road to
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Digital Success Today!
                </span>
              </h1>

              <p className="text-xl text-gray-600 leading-relaxed max-w-2xl">
                With 10+ ready-to-sell digital products at your fingertips, your
                profitable online store is just one click away.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={scrollToProducts}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-200 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl"
                >
                  <span>Explore Products</span>
                  <ArrowRight className="w-5 h-5" />
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
                    <p className="text-sm text-gray-600">Buy Now</p>
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
              Launch your digital empire effortlessly with our premium
              collections - curated for maximum profitability with zero
              technical hassle.
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
      <section
        ref={productsRef}
        className="py-20 bg-gradient-to-br from-blue-50 to-purple-50"
        id="products"
      >
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
            {productCategories.slice(0, 8).map((product, index) => (
              <div key={index} className="group">
                <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden h-full">
                  {/* 🖼️ Larger Image Section */}
                  {/* <div className="relative h-[300px] sm:h-[400px] md:h-[300px] lg:h-[500px] overflow-hidden rounded-t-2xl"> */}
                  <div className="relative h-[400px] overflow-hidden rounded-t-2xl">
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
                    <div className="flex justify-between items-center">
                      <span className="text-xl font-bold text-blue-600">
                        {product.price}
                      </span>
                      <button
                        className={`bg-gradient-to-r ${product.gradient} text-white px-5 py-2 rounded-full text-sm font-medium hover:shadow-lg transition-all duration-200`}
                        onClick={() => window.open(product.link, "_blank")}
                      >
                        Buy Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
            {productCategories.slice(8, 10).map((product, index) => (
              <div key={index} className="group">
                <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden h-full">
                  {/* 🖼️ Larger Image Section */}
                  {/* <div className="relative h-[300px] sm:h-[400px] md:h-[300px] lg:h-[500px] overflow-hidden rounded-t-2xl"> */}
                  <div className="relative h-[230px] overflow-hidden rounded-t-2xl">
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
                    <div className="flex justify-between items-center">
                      <span className="text-xl font-bold text-blue-600">
                        {product.price}
                      </span>
                      <button
                        className={`bg-gradient-to-r ${product.gradient} text-white px-5 py-2 rounded-full text-sm font-medium hover:shadow-lg transition-all duration-200`}
                        onClick={() => window.open(product.link, "_blank")}
                      >
                       Buy Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center m-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Special Bundle
            </h2>
            <p className="text-xl text-gray-600">
              Discover our best-selling digital product bundles
            </p>
          </div>
          <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-8">
            {productCategories.slice(10, 11).map((product, index) => (
              <div key={index} className="group">
                <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden h-full">
                  {/* 🖼️ Larger Image Section */}
                  {/* <div className="relative h-[300px] sm:h-[400px] md:h-[300px] lg:h-[500px] overflow-hidden rounded-t-2xl"> */}
                  <div className="relative h-[400px] overflow-hidden rounded-t-2xl">
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
                    <div className="flex justify-between items-center">
                      <span className="text-xl font-bold text-blue-600">
                        {product.price}
                      </span>
                      <button
                        className={`bg-gradient-to-r ${product.gradient} text-white px-5 py-2 rounded-full text-sm font-medium hover:shadow-lg transition-all duration-200`}
                        onClick={() => window.open(product.link, "_blank")}
                      >
                        Buy Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="pt-12 bg-white" id="about">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-1 gap-12 items-center">
            {/* Left Column - Text Content */}
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                About Us
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Easy Resell is a PLR ecommerce website designed to assist
                  potential entrepreneurs to find digital products like Ebooks,
                  Kids and Adults Coloring Books, Activity Books, Editable
                  Templates of T-shirt Designs, Graphic Design Bundles, Social
                  Media Templates (for Instagram, Facebook, Twitter, Snapchat, &
                  Pinterest), Website Themes & Plugins, YouTube Thumbnails,
                  Royalty Free Videos, Royalty Free Music, Flyers & Brochures,
                  Business Letterheads, Fonts, Logo Vectors, Business Cards,
                  Adobe Premier Pro Assets, Digital Marketing Bundles, Landing
                  Page Designs, Readymade Templates for Powerpoint
                  Presentations, Wedding Invitations, and more.
                </p>
                <p>
                  The object of the website is to provide simpler solutions to
                  aspiring entrepreneurs. While many of us do begin with a basic
                  idea in our minds, it is hard to search for every type of data
                  to sell with PLR licenses. And while there are many websites
                  that offer digital products it is impossible to sort through
                  all the different type of products to get to the one which you
                  want. On Easy Resell, every aspiring entrepreneur can find
                  everything they need to start a successful online business
                  easily. All you need to do is buy from here and sell it on
                  your own website or social media page.
                </p>
                <p className="font-semibold text-gray-900">
                  Good Luck & Godspeed.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="pt-8 pb-20 bg-white">
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
