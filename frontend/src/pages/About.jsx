import React from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import FooterLoggedIn from "../components/FooterLoggedIn";
import NavbarLoggedIn from "../components/NavbarLoggedIn";
import { useSelector } from "react-redux";
import Button from "../components/Button";
import { FaChartLine, FaUsers, FaRocket, FaHeart } from "react-icons/fa";

const About = () => {
  const { user } = useSelector((state) => state.user);
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      {user ? <NavbarLoggedIn /> : (
        <nav className="bg-white shadow-md sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <Link to="/" className="flex items-center">
                <h1 className="text-2xl font-bold" style={{ color: '#1D546D' }}>H5 ERP</h1>
              </Link>
              <div className="flex items-center space-x-4">
                <Link
                  to="/login"
                  className="text-slate-700 px-3 py-2 rounded-md text-sm font-medium transition"
                  style={{ color: '#061E29' }}
                  onMouseEnter={(e) => e.target.style.color = '#1D546D'}
                  onMouseLeave={(e) => e.target.style.color = '#061E29'}
                >
                  Sign In
                </Link>
                <Link to="/register">
                  <Button variant="primary">Get Started</Button>
                </Link>
              </div>
            </div>
          </div>
        </nav>
      )}

      {/* Hero Section */}
      <section className="text-white py-20" style={{ background: 'linear-gradient(to right, #1D546D, #061E29)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-4">About H5 ERP</h1>
          <p className="text-xl max-w-3xl mx-auto" style={{ color: '#F3F4F4' }}>
            We are a group of student developers who created H5 ERP as a learning project. We are not a business or company—just a team of students passionate about building useful software and gaining real-world experience.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-6" style={{ color: '#061E29' }}>Our Story</h2>
          <p className="text-lg text-slate-700 mb-4">
            H5 ERP started as a collaborative project among friends who wanted to challenge themselves and learn by building something meaningful. Our goal is to grow our skills, work together, and share what we create with others.
          </p>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4" style={{ color: '#061E29' }}>Meet the Team</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            We're a team of student developers passionate about building and learning together.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 max-w-6xl mx-auto">
          <div className="text-center">
            <div className="w-32 h-32 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-3xl font-bold" style={{ backgroundColor: '#1D546D' }}>
              AT
            </div>
            <h3 className="text-lg font-bold" style={{ color: '#061E29' }}>Aksh Thakkar</h3>
          </div>
          <div className="text-center">
            <div className="w-32 h-32 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-3xl font-bold" style={{ backgroundColor: '#5F9598' }}>
              YC
            </div>
            <h3 className="text-lg font-bold" style={{ color: '#061E29' }}>Yash Chauhan</h3>
          </div>
          <div className="text-center">
            <div className="w-32 h-32 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-3xl font-bold" style={{ backgroundColor: '#1D546D' }}>
              SC
            </div>
            <h3 className="text-lg font-bold" style={{ color: '#061E29' }}>Smit Chauhan</h3>
          </div>
          <div className="text-center">
            <div className="w-32 h-32 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-3xl font-bold" style={{ backgroundColor: '#5F9598' }}>
              VB
            </div>
            <h3 className="text-lg font-bold" style={{ color: '#061E29' }}>Vedant Bhatt</h3>
          </div>
          <div className="text-center">
            <div className="w-32 h-32 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-3xl font-bold" style={{ backgroundColor: '#1D546D' }}>
              KC
            </div>
            <h3 className="text-lg font-bold" style={{ color: '#061E29' }}>Krish Chaudhari</h3>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16" style={{ backgroundColor: '#1D546D' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Join Us on This Journey
          </h2>
          <p className="text-xl mb-8" style={{ color: '#F3F4F4' }}>
            Be part of our learning adventure
          </p>
          <Link
            to="/register"
            className="bg-white px-8 py-3 text-lg font-semibold transition shadow-lg inline-block"
            style={{ color: '#1D546D', borderRadius: '4px' }}
            onMouseEnter={(e) => e.target.style.backgroundColor = '#F3F4F4'}
            onMouseLeave={(e) => e.target.style.backgroundColor = 'white'}
          >
            Get Started Today
          </Link>
        </div>
      </section>

      {user ? <FooterLoggedIn /> : <Footer />}
    </div>
  );
};

export default About;
