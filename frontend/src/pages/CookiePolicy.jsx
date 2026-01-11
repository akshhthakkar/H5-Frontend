import React from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import FooterLoggedIn from "../components/FooterLoggedIn";
import NavbarLoggedIn from "../components/NavbarLoggedIn";
import { useSelector } from "react-redux";
import Button from "../components/Button";

const CookiePolicy = () => {
  const { user } = useSelector((state) => state.user);
  return (
    <div className="min-h-screen bg-[#F3F4F4] flex flex-col">
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
        className="text-white py-16"
        style={{ background: "linear-gradient(to right, #1D546D, #061E29)" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-2">Cookie Policy</h1>
          <p style={{ color: "#F3F4F4" }}>Last updated: January 11, 2026</p>
        </div>
      </section>
      {/* Content */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2
              className="text-2xl font-bold mb-4"
              style={{ color: "#061E29" }}
            >
              What Are Cookies
            </h2>
            <p className="text-slate-700 mb-6">
              Cookies are small text files that are placed on your device
              (computer, smartphone, or tablet) when you visit a website. They
              are widely used to make websites work more efficiently and provide
              a better user experience. Cookies help us understand how you use
              our Service and enable certain functionalities.
            </p>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">
              How We Use Cookies
            </h2>
            <p className="text-gray-700 mb-6">
              H5 Business uses cookies to enhance your experience, provide
              personalized content, analyze site performance, and improve our
              Service. We use both session cookies (which expire when you close
              your browser) and persistent cookies (which remain on your device
              for a set period or until you delete them).
            </p>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">
              Types of Cookies We Use
            </h2>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              1. Essential Cookies
            </h3>
            <p className="text-gray-700 mb-4">
              These cookies are necessary for the Service to function properly.
              They enable core functionality such as:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
              <li>User authentication and security</li>
              <li>Session management and maintaining your login state</li>
              <li>Load balancing and service optimization</li>
              <li>Remembering your privacy preferences</li>
            </ul>
            <p className="text-gray-700 mb-6">
              <strong>You cannot opt out of essential cookies</strong> as they
              are necessary for the Service to work. Disabling them may prevent
              you from using certain features.
            </p>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              2. Functional Cookies
            </h3>
            <p className="text-gray-700 mb-4">
              These cookies enable enhanced functionality and personalization:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
              <li>Remembering your preferences and settings</li>
              <li>Storing your language preference</li>
              <li>Remembering your location (if you've given permission)</li>
              <li>Customizing your dashboard and interface</li>
            </ul>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              3. Analytics Cookies
            </h3>
            <p className="text-gray-700 mb-4">
              We use analytics cookies to understand how visitors interact with
              our Service:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
              <li>Tracking pages visited and features used</li>
              <li>Measuring user engagement and session duration</li>
              <li>Identifying errors and performance issues</li>
              <li>Understanding traffic sources and user demographics</li>
              <li>Analyzing conversion rates and user flows</li>
            </ul>
            <p className="text-gray-700 mb-6">
              We use tools like Google Analytics to collect this information.
              The data collected is aggregated and anonymized.
            </p>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              4. Marketing Cookies
            </h3>
            <p className="text-gray-700 mb-4">
              These cookies are used to deliver relevant advertisements and
              track their effectiveness:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
              <li>Displaying personalized ads based on your interests</li>
              <li>Limiting the number of times you see an advertisement</li>
              <li>Measuring the effectiveness of advertising campaigns</li>
              <li>
                Providing content from third-party platforms (social media
                embeds)
              </li>
            </ul>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">
              Third-Party Cookies
            </h2>
            <p className="text-gray-700 mb-6">
              In addition to our own cookies, we may use third-party cookies
              from trusted partners to help us analyze usage, provide
              advertising, and improve our Service. These third parties may
              include:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
              <li>
                <strong>Google Analytics:</strong> For website analytics and
                performance tracking
              </li>
              <li>
                <strong>Payment Processors:</strong> To process transactions
                securely
              </li>
              <li>
                <strong>Social Media Platforms:</strong> To enable sharing and
                integration features
              </li>
              <li>
                <strong>Customer Support Tools:</strong> To provide live chat
                and support services
              </li>
            </ul>
            <p className="text-gray-700 mb-6">
              These third parties have their own privacy policies governing
              their use of cookies. We recommend reviewing their policies to
              understand how they use your information.
            </p>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">
              Managing Your Cookie Preferences
            </h2>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Browser Settings
            </h3>
            <p className="text-gray-700 mb-4">
              You can control and manage cookies through your browser settings.
              Most browsers allow you to:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
              <li>View cookies stored on your device</li>
              <li>Delete existing cookies</li>
              <li>Block all cookies or specific types of cookies</li>
              <li>Set preferences for certain websites</li>
            </ul>
            <p className="text-gray-700 mb-6">
              Please note that blocking or deleting cookies may affect your
              ability to use certain features of the Service.
            </p>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Browser-Specific Instructions
            </h3>
            <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
              <li>
                <strong>Chrome:</strong> Settings → Privacy and security →
                Cookies and other site data
              </li>
              <li>
                <strong>Firefox:</strong> Settings → Privacy & Security →
                Cookies and Site Data
              </li>
              <li>
                <strong>Safari:</strong> Preferences → Privacy → Cookies and
                website data
              </li>
              <li>
                <strong>Edge:</strong> Settings → Cookies and site permissions →
                Cookies and site data
              </li>
            </ul>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Opt-Out of Analytics
            </h3>
            <p className="text-gray-700 mb-6">
              To opt out of Google Analytics tracking across all websites, you
              can install the{" "}
              <a
                href="https://tools.google.com/dlpage/gaoptout"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                Google Analytics Opt-out Browser Add-on
              </a>
              .
            </p>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">
              Do Not Track Signals
            </h2>
            <p className="text-gray-700 mb-6">
              Some browsers have a "Do Not Track" feature that lets you tell
              websites not to track your online activities. We currently do not
              respond to "Do Not Track" signals because there is no industry
              standard for how to respond to such signals. We will update this
              policy if such a standard is established.
            </p>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">
              Cookie Consent
            </h2>
            <p className="text-gray-700 mb-6">
              When you first visit our Service, we will ask for your consent to
              use non-essential cookies. You can withdraw your consent at any
              time by changing your browser settings or contacting us. Essential
              cookies will continue to be used regardless of your consent as
              they are necessary for the Service to function.
            </p>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">
              Updates to This Cookie Policy
            </h2>
            <p className="text-gray-700 mb-6">
              We may update this Cookie Policy from time to time to reflect
              changes in our practices, technology, or legal requirements. We
              will notify you of any material changes by posting the new policy
              on this page and updating the "Last updated" date. We encourage
              you to review this policy periodically.
            </p>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">
              Contact Us
            </h2>
            <p className="text-gray-700 mb-4">
              If you have any questions about our use of cookies or this Cookie
              Policy, please contact us:
            </p>
            <ul className="list-none text-gray-700 mb-6 space-y-2">
              <li>Email: inframax07@gmail.com</li>
            </ul>
          </div>
        </div>
      </section>
      {user ? <FooterLoggedIn /> : <Footer />}
    </div>
  );
};

export default CookiePolicy;
