import React from "react";
import { Link } from "react-router-dom";

const FooterLoggedIn = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="text-gray-300" style={{ backgroundColor: '#061E29' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-wrap justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-white text-lg font-bold">H5 ERP</h3>
            <p className="text-sm text-gray-400">Student Project &mdash; Not a business</p>
          </div>
          <ul className="flex flex-wrap gap-6 text-sm">
            <li>
              <Link to="/dashboard" className="hover:text-white transition">Dashboard</Link>
            </li>
            <li>
              <Link to="/inventory" className="hover:text-white transition">Inventory</Link>
            </li>
            <li>
              <Link to="/sales" className="hover:text-white transition">Sales</Link>
            </li>
            <li>
              <Link to="/bills" className="hover:text-white transition">Bills</Link>
            </li>
            <li>
              <Link to="/reports" className="hover:text-white transition">Reports</Link>
            </li>
            <li>
              <Link to="/supply" className="hover:text-white transition">Supply</Link>
            </li>
            <li>
              <Link to="/profile" className="hover:text-white transition">Profile</Link>
            </li>
            <li>
              <Link to="/notifications" className="hover:text-white transition">Notifications</Link>
            </li>
          </ul>
        </div>
        <div className="mt-6 text-sm text-center text-gray-400 border-t border-[#1D546D] pt-4">
          <p>&copy; {currentYear} H5 ERP. Student Project.</p>
        </div>
      </div>
    </footer>
  );
};

export default FooterLoggedIn;
