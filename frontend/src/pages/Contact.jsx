import React, { useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import FooterLoggedIn from "../components/FooterLoggedIn";
import NavbarLoggedIn from "../components/NavbarLoggedIn";
import { useSelector } from "react-redux";
import Button from "../components/Button";
import { FaEnvelope, FaPaperPlane } from "react-icons/fa";
import toast from "react-hot-toast";

const Contact = () => {
  const { user } = useSelector((state) => state.user);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const data = {
      name: formData.name,
      email: formData.email,
      subject: formData.subject,
      message: formData.message,
      replyto: "inframax07@gmail.com",
    };

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const result = await response.json();
      if (result.success) {
        toast.success("Message sent successfully! We'll get back to you soon.");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        toast.error(
          result.message || "Something went wrong. Please try again."
        );
      }
    } catch (error) {
      toast.error("Failed to send message. Please try again later.");
    }
    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      {user ? (
        <NavbarLoggedIn />
      ) : (
        <nav className="bg-white shadow-md sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <Link to="/" className="flex items-center">
                <h1 className="text-2xl font-bold" style={{ color: "#1D546D" }}>
                  H5 ERP
                </h1>
              </Link>
              <div className="flex items-center space-x-4">
                <Link
                  to="/login"
                  className="text-slate-700 px-3 py-2 rounded-md text-sm font-medium transition"
                  style={{ color: "#061E29" }}
                  onMouseEnter={(e) => (e.target.style.color = "#1D546D")}
                  onMouseLeave={(e) => (e.target.style.color = "#061E29")}
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
      <section
        className="text-white py-20"
        style={{ background: "linear-gradient(to right, #1D546D, #061E29)" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl max-w-3xl mx-auto" style={{ color: "#F3F4F4" }}>
            Have questions? We'd love to hear from you. Send us a message and
            we'll respond as soon as possible.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Information */}
            <div className="lg:col-span-1">
              <h2
                className="text-2xl font-bold mb-6"
                style={{ color: "#061E29" }}
              >
                Get in Touch
              </h2>
              <p className="text-slate-600 mb-8">
                We're here to help and answer any questions you might have. We
                look forward to hearing from you.
              </p>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div
                    className="p-3"
                    style={{ backgroundColor: "#5F9598", borderRadius: "6px" }}
                  >
                    <FaEnvelope className="w-6 h-6 text-white" />
                  </div>
                  <div className="ml-4">
                    <h3 className="font-semibold" style={{ color: "#061E29" }}>
                      Email
                    </h3>
                    <p className="text-slate-600">inframax07@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div
                className="bg-white border border-gray-200 shadow-md p-8"
                style={{ borderRadius: "6px" }}
              >
                <h2
                  className="text-2xl font-bold mb-6"
                  style={{ color: "#061E29" }}
                >
                  Send us a Message
                </h2>
                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium mb-2"
                        style={{ color: "#061E29" }}
                      >
                        Your Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="John Doe"
                        disabled={isSubmitting}
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium mb-2"
                        style={{ color: "#061E29" }}
                      >
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="john@example.com"
                        disabled={isSubmitting}
                      />
                    </div>
                  </div>

                  <div className="mb-6">
                    <label
                      htmlFor="subject"
                      className="block text-sm font-medium mb-2"
                      style={{ color: "#061E29" }}
                    >
                      Subject *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 focus:ring-2 focus:border-transparent"
                      style={{ borderRadius: "4px", outlineColor: "#5F9598" }}
                      placeholder="How can we help?"
                      disabled={isSubmitting}
                    />
                  </div>

                  <div className="mb-6">
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium mb-2"
                      style={{ color: "#061E29" }}
                    >
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="6"
                      className="w-full px-4 py-2 border border-gray-300 focus:ring-2 focus:border-transparent"
                      style={{ borderRadius: "4px", outlineColor: "#5F9598" }}
                      placeholder="Tell us more about your inquiry..."
                      disabled={isSubmitting}
                    ></textarea>
                  </div>

                  <Button
                    type="submit"
                    variant="primary"
                    className="w-full"
                    isLoading={isSubmitting}
                  >
                    {!isSubmitting && <FaPaperPlane className="mr-2 inline" />}
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {user ? <FooterLoggedIn /> : <Footer />}
    </div>
  );
};

export default Contact;
