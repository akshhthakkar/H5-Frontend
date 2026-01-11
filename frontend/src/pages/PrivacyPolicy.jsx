import React from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import FooterLoggedIn from "../components/FooterLoggedIn";
import NavbarLoggedIn from "../components/NavbarLoggedIn";
import { useSelector } from "react-redux";
import Button from "../components/Button";

const PrivacyPolicy = () => {
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
          <h1 className="text-4xl font-bold mb-2">Privacy Policy</h1>
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
              Introduction
            </h2>
            <p className="text-slate-700 mb-6">
              At H5 ERP ("we", "our", or "us"), we take your privacy seriously.
              This Privacy Policy explains how we collect, use, disclose, and
              safeguard your information when you use our business management
              platform.
            </p>

            <h2
              className="text-2xl font-bold mb-4 mt-8"
              style={{ color: "#061E29" }}
            >
              Information We Collect
            </h2>
            <h3
              className="text-xl font-semibold mb-3"
              style={{ color: "#061E29" }}
            >
              Personal Information
            </h3>
            <p className="text-slate-700 mb-4">
              We collect information that you provide directly to us, including:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
              <li>
                Name and contact information (email address, phone number)
              </li>
              <li>Account credentials (username, password)</li>
              <li>Business information (company name, business address)</li>
              <li>
                Payment information (processed securely through third-party
                payment processors)
              </li>
              <li>Profile information and preferences</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Automatically Collected Information
            </h3>
            <p className="text-gray-700 mb-4">
              When you use our service, we automatically collect certain
              information:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
              <li>Usage data (features used, time spent, interactions)</li>
              <li>
                Device information (IP address, browser type, operating system)
              </li>
              <li>Log data (access times, pages viewed, errors encountered)</li>
              <li>Cookies and similar tracking technologies</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">
              How We Use Your Information
            </h2>
            <p className="text-gray-700 mb-4">
              We use the collected information for the following purposes:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
              <li>To provide, maintain, and improve our services</li>
              <li>To process transactions and send related information</li>
              <li>
                To send administrative information, updates, and security alerts
              </li>
              <li>
                To respond to your comments, questions, and customer service
                requests
              </li>
              <li>To analyze usage patterns and optimize user experience</li>
              <li>
                To detect, prevent, and address technical issues and security
                threats
              </li>
              <li>To comply with legal obligations and enforce our terms</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">
              Information Sharing and Disclosure
            </h2>
            <p className="text-gray-700 mb-4">
              We do not sell your personal information. We may share your
              information only in the following circumstances:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
              <li>
                <strong>Service Providers:</strong> We share information with
                third-party vendors who perform services on our behalf (hosting,
                analytics, payment processing)
              </li>
              <li>
                <strong>Legal Requirements:</strong> We may disclose information
                if required by law or in response to valid legal requests
              </li>
              <li>
                <strong>Business Transfers:</strong> In connection with any
                merger, sale, or transfer of our business
              </li>
              <li>
                <strong>With Your Consent:</strong> We may share information
                with third parties when you give us explicit permission
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">
              Data Security
            </h2>
            <p className="text-gray-700 mb-6">
              We implement appropriate technical and organizational security
              measures to protect your information against unauthorized access,
              alteration, disclosure, or destruction. These measures include:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
              <li>Encryption of data in transit and at rest</li>
              <li>Regular security audits and vulnerability assessments</li>
              <li>Access controls and authentication mechanisms</li>
              <li>Secure backup and disaster recovery procedures</li>
            </ul>
            <p className="text-gray-700 mb-6">
              However, no method of transmission over the internet is 100%
              secure. While we strive to protect your information, we cannot
              guarantee its absolute security.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">
              Your Rights and Choices
            </h2>
            <p className="text-gray-700 mb-4">
              You have the following rights regarding your personal information:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
              <li>
                <strong>Access:</strong> Request access to your personal
                information
              </li>
              <li>
                <strong>Correction:</strong> Request correction of inaccurate or
                incomplete information
              </li>
              <li>
                <strong>Deletion:</strong> Request deletion of your personal
                information
              </li>
              <li>
                <strong>Data Portability:</strong> Request a copy of your data
                in a portable format
              </li>
              <li>
                <strong>Opt-out:</strong> Unsubscribe from marketing
                communications
              </li>
              <li>
                <strong>Cookies:</strong> Manage cookie preferences through your
                browser settings
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">
              Data Retention
            </h2>
            <p className="text-gray-700 mb-6">
              We retain your personal information for as long as necessary to
              fulfill the purposes outlined in this Privacy Policy, unless a
              longer retention period is required or permitted by law. When we
              no longer need your information, we will securely delete or
              anonymize it.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">
              Children's Privacy
            </h2>
            <p className="text-gray-700 mb-6">
              Our service is not intended for children under the age of 13. We
              do not knowingly collect personal information from children under
              13. If you become aware that a child has provided us with personal
              information, please contact us, and we will take steps to delete
              such information.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">
              International Data Transfers
            </h2>
            <p className="text-gray-700 mb-6">
              Your information may be transferred to and maintained on servers
              located outside of your state, province, country, or other
              governmental jurisdiction. We will take all steps reasonably
              necessary to ensure that your data is treated securely and in
              accordance with this Privacy Policy.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">
              Changes to This Privacy Policy
            </h2>
            <p className="text-gray-700 mb-6">
              We may update this Privacy Policy from time to time. We will
              notify you of any changes by posting the new Privacy Policy on
              this page and updating the "Last updated" date. You are advised to
              review this Privacy Policy periodically for any changes.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">
              Contact Us
            </h2>
            <p className="text-gray-700 mb-4">
              If you have any questions about this Privacy Policy or our privacy
              practices, please contact us:
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

export default PrivacyPolicy;
