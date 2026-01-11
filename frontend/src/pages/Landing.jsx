import React from "react";
import { Link } from "react-router-dom";
import { FaChartLine, FaBox, FaFileInvoiceDollar, FaUsers, FaBell, FaShieldAlt } from "react-icons/fa";
import Footer from "../components/Footer";
import FooterLoggedIn from "../components/FooterLoggedIn";
import NavbarLoggedIn from "../components/NavbarLoggedIn";
import { useSelector } from "react-redux";
import Button from "../components/Button";

const Landing = () => {
  const { user } = useSelector((state) => state.user);
  const features = [
    {
      icon: <FaChartLine className="w-12 h-12" style={{ color: '#1D546D' }} />,
      title: "Sales Management",
      description: "Track and manage all your sales transactions in one place with real-time analytics and reporting."
    },
    {
      icon: <FaBox className="w-12 h-12" style={{ color: '#5F9598' }} />,
      title: "Inventory Control",
      description: "Keep your inventory organized with automated stock tracking, low stock alerts, and efficient management."
    },
    {
      icon: <FaFileInvoiceDollar className="w-12 h-12" style={{ color: '#1D546D' }} />,
      title: "Billing System",
      description: "Generate professional invoices and bills instantly with customizable templates and automated calculations."
    },
    {
      icon: <FaUsers className="w-12 h-12" style={{ color: '#5F9598' }} />,
      title: "Supply Chain",
      description: "Manage suppliers, track orders, and maintain seamless supply chain operations effortlessly."
    },
    {
      icon: <FaBell className="w-12 h-12" style={{ color: '#1D546D' }} />,
      title: "Smart Notifications",
      description: "Stay updated with instant notifications for important events, low stock, and pending tasks."
    },
    {
      icon: <FaShieldAlt className="w-12 h-12" style={{ color: '#5F9598' }} />,
      title: "Secure & Reliable",
      description: "Your data is protected with enterprise-grade security and automatic backups."
    }
  ];

  const howItWorks = [
    {
      step: "01",
      title: "Sign Up",
      description: "Create your free account in seconds with email or Google sign-in."
    },
    {
      step: "02",
      title: "Set Up Your Business",
      description: "Add your business details, products, and inventory to get started."
    },
    {
      step: "03",
      title: "Start Managing",
      description: "Begin tracking sales, managing inventory, and generating reports instantly."
    },
    {
      step: "04",
      title: "Grow & Scale",
      description: "Use insights and analytics to make data-driven decisions and scale your business."
    }
  ];

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#F3F4F4' }}>
      {/* Navigation */}
      {user ? <NavbarLoggedIn /> : (
        <nav className="bg-white shadow-md sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="flex items-center">
                <h1 className="text-2xl font-bold" style={{ color: '#1D546D' }}>H5 ERP</h1>
              </div>
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
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6" style={{ color: '#061E29' }}>
            Manage Your Business
            <span className="block mt-2" style={{ color: '#1D546D' }}>All in One Place</span>
          </h1>
          <p className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto">
            Streamline your sales, inventory, billing, and supply chain operations with our powerful business management platform.
          </p>
          <div className="flex justify-center gap-4">
            <Link to="/register">
              <Button variant="primary" size="lg" className="px-8">
                Start Free Trial
              </Button>
            </Link>
            <Link
              to="/about"
              className="bg-white px-8 py-3 text-lg font-semibold transition border-2 inline-block"
              style={{ color: '#1D546D', borderColor: '#1D546D', borderRadius: '4px' }}
              onMouseEnter={(e) => e.target.style.backgroundColor = '#F3F4F4'}
              onMouseLeave={(e) => e.target.style.backgroundColor = 'white'}
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20" style={{ backgroundColor: 'white' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4" style={{ color: '#061E29' }}>
              Powerful Features for Your Business
            </h2>
            <p className="text-xl text-slate-600">
              Everything you need to run your business efficiently
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white p-8 shadow-md hover:shadow-xl transition transform hover:-translate-y-1 border border-gray-200"
                style={{ borderRadius: '6px' }}
              >
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-2" style={{ color: '#061E29' }}>
                  {feature.title}
                </h3>
                <p className="text-slate-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20" style={{ backgroundColor: '#F3F4F4' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4" style={{ color: '#061E29' }}>
              How It Works
            </h2>
            <p className="text-xl text-slate-600">
              Get started in 4 simple steps
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {howItWorks.map((step, index) => (
              <div key={index} className="text-center">
                <div className="text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4" style={{ backgroundColor: '#1D546D' }}>
                  {step.step}
                </div>
                <h3 className="text-xl font-bold mb-2" style={{ color: '#061E29' }}>
                  {step.title}
                </h3>
                <p className="text-slate-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16" style={{ backgroundColor: '#1D546D' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl mb-8" style={{ color: '#F3F4F4' }}>
            Join thousands of businesses already using H5 ERP
          </p>
          <Link
            to="/register"
            className="bg-white px-8 py-3 text-lg font-semibold transition shadow-lg inline-block"
            style={{ color: '#1D546D', borderRadius: '4px' }}
            onMouseEnter={(e) => e.target.style.backgroundColor = '#F3F4F4'}
            onMouseLeave={(e) => e.target.style.backgroundColor = 'white'}
          >
            Get Started Now
          </Link>
        </div>
      </section>

      {/* Footer */}
      {user ? <FooterLoggedIn /> : <Footer />}
    </div>
  );
};

export default Landing;
