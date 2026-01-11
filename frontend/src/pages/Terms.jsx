import React from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import FooterLoggedIn from "../components/FooterLoggedIn";
import NavbarLoggedIn from "../components/NavbarLoggedIn";
import { useSelector } from "react-redux";
import Button from "../components/Button";

const Terms = () => {
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
          <h1 className="text-4xl font-bold mb-2">Terms of Service</h1>
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
              Agreement to Terms
            </h2>
            <p className="text-slate-700 mb-6">
              By accessing or using H5 ERP ("Service"), you agree to be bound by
              these Terms of Service ("Terms"). If you disagree with any part of
              the terms, you may not access the Service.
            </p>

            <h2
              className="text-2xl font-bold mb-4 mt-8"
              style={{ color: "#061E29" }}
            >
              Use of Service
            </h2>
            <h3
              className="text-xl font-semibold mb-3"
              style={{ color: "#061E29" }}
            >
              Eligibility
            </h3>
            <p className="text-slate-700 mb-4">To use our Service, you must:</p>
            <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
              <li>
                Be at least 18 years old or the age of majority in your
                jurisdiction
              </li>
              <li>Have the legal capacity to enter into a binding contract</li>
              <li>
                Not be prohibited from using the Service under applicable law
              </li>
              <li>Provide accurate and complete registration information</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Account Registration
            </h3>
            <p className="text-gray-700 mb-6">
              When you create an account with us, you must provide accurate,
              complete, and current information. You are responsible for
              maintaining the confidentiality of your account credentials and
              for all activities that occur under your account. You agree to
              notify us immediately of any unauthorized use of your account.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">
              Acceptable Use
            </h2>
            <p className="text-gray-700 mb-4">
              You agree not to use the Service to:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
              <li>Violate any applicable laws or regulations</li>
              <li>
                Infringe upon the rights of others, including intellectual
                property rights
              </li>
              <li>Transmit any harmful, offensive, or illegal content</li>
              <li>
                Attempt to gain unauthorized access to our systems or other
                users' accounts
              </li>
              <li>Interfere with or disrupt the Service or servers</li>
              <li>
                Use automated systems to access the Service without permission
              </li>
              <li>Impersonate any person or entity</li>
              <li>Collect or harvest information about other users</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">
              Intellectual Property
            </h2>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Our Content
            </h3>
            <p className="text-gray-700 mb-6">
              The Service and its original content, features, and functionality
              are owned by H5 Business and are protected by international
              copyright, trademark, patent, trade secret, and other intellectual
              property laws. You may not copy, modify, distribute, sell, or
              lease any part of our Service without our express written
              permission.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Your Content
            </h3>
            <p className="text-gray-700 mb-6">
              You retain all rights to the data and content you upload to the
              Service ("Your Content"). By uploading Your Content, you grant us
              a limited license to use, store, and display Your Content solely
              for the purpose of providing the Service to you. We will not use
              Your Content for any other purpose without your explicit consent.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">
              Payment and Billing
            </h2>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Subscription Plans
            </h3>
            <p className="text-gray-700 mb-6">
              Certain features of the Service may require payment. You agree to
              pay all fees associated with your selected plan. Fees are billed
              in advance on a recurring basis (monthly or annually) and are
              non-refundable except as required by law or as explicitly stated
              in our refund policy.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Price Changes
            </h3>
            <p className="text-gray-700 mb-6">
              We reserve the right to modify our pricing. Any price changes will
              be communicated to you at least 30 days in advance and will apply
              to the next billing cycle. Your continued use of the Service after
              the price change constitutes your agreement to pay the modified
              amount.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Cancellation and Refunds
            </h3>
            <p className="text-gray-700 mb-6">
              You may cancel your subscription at any time through your account
              settings. Cancellations take effect at the end of the current
              billing period. We do not provide refunds for partial billing
              periods, except as required by law or in cases of service failure
              on our part.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">
              Data and Privacy
            </h2>
            <p className="text-gray-700 mb-6">
              Your use of the Service is also governed by our Privacy Policy. We
              collect, use, and protect your data as described in the Privacy
              Policy. By using the Service, you consent to our data practices as
              outlined in the Privacy Policy.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">
              Service Availability
            </h2>
            <p className="text-gray-700 mb-6">
              We strive to provide uninterrupted access to the Service, but we
              do not guarantee that the Service will be available at all times.
              The Service may be temporarily unavailable due to maintenance,
              updates, or circumstances beyond our control. We are not liable
              for any losses resulting from Service interruptions.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">
              Limitation of Liability
            </h2>
            <p className="text-gray-700 mb-6">
              To the maximum extent permitted by law, H5 Business and its
              affiliates, officers, employees, agents, and licensors shall not
              be liable for any indirect, incidental, special, consequential, or
              punitive damages, including loss of profits, data, or other
              intangible losses, resulting from:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
              <li>
                Your access to or use of (or inability to access or use) the
                Service
              </li>
              <li>Any conduct or content of any third party on the Service</li>
              <li>
                Any unauthorized access, use, or alteration of your content
              </li>
              <li>Any other matter relating to the Service</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">
              Disclaimer of Warranties
            </h2>
            <p className="text-gray-700 mb-6">
              The Service is provided on an "AS IS" and "AS AVAILABLE" basis. We
              make no warranties, expressed or implied, regarding the Service,
              including but not limited to warranties of merchantability,
              fitness for a particular purpose, and non-infringement. We do not
              warrant that the Service will be uninterrupted, timely, secure, or
              error-free.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">
              Indemnification
            </h2>
            <p className="text-gray-700 mb-6">
              You agree to indemnify, defend, and hold harmless H5 Business and
              its affiliates from any claims, losses, damages, liabilities, and
              expenses (including legal fees) arising from your use of the
              Service, your violation of these Terms, or your violation of any
              rights of another party.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">
              Termination
            </h2>
            <p className="text-gray-700 mb-6">
              We may terminate or suspend your account and access to the Service
              immediately, without prior notice or liability, for any reason,
              including if you breach these Terms. Upon termination, your right
              to use the Service will immediately cease. You may also terminate
              your account at any time by contacting us or using the account
              deletion feature.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">
              Governing Law
            </h2>
            <p className="text-gray-700 mb-6">
              These Terms shall be governed by and construed in accordance with
              the laws of the State of New York, United States, without regard
              to its conflict of law provisions. Any disputes arising from these
              Terms or the Service shall be resolved in the courts located in
              New York, New York.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">
              Changes to Terms
            </h2>
            <p className="text-gray-700 mb-6">
              We reserve the right to modify or replace these Terms at any time.
              If a revision is material, we will provide at least 30 days'
              notice prior to any new terms taking effect. What constitutes a
              material change will be determined at our sole discretion. By
              continuing to access or use our Service after revisions become
              effective, you agree to be bound by the revised terms.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">
              Contact Us
            </h2>
            <p className="text-gray-700 mb-4">
              If you have any questions about these Terms, please contact us:
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

export default Terms;
