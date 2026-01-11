import React from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../redux/UsersSlice";

const NavbarLoggedIn = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);
  const location = useLocation();

  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold" style={{ color: '#1D546D' }}>H5 ERP</h1>
          </div>
          <ul className="flex items-center space-x-6 text-sm">
            <li><Link to="/dashboard" className="hover:text-[#1D546D] transition">Dashboard</Link></li>
            <li><Link to="/inventory" className="hover:text-[#1D546D] transition">Inventory</Link></li>
            <li><Link to="/sales" className="hover:text-[#1D546D] transition">Sales</Link></li>
            <li><Link to="/bills" className="hover:text-[#1D546D] transition">Bills</Link></li>
            <li><Link to="/reports" className="hover:text-[#1D546D] transition">Reports</Link></li>
            <li><Link to="/supply" className="hover:text-[#1D546D] transition">Supply</Link></li>
            <li><Link to="/profile" className="hover:text-[#1D546D] transition">Profile</Link></li>
            <li><Link to="/notifications" className="hover:text-[#1D546D] transition">Notifications</Link></li>
          </ul>
          <div className="flex items-center gap-2">
            <span className="text-sm font-semibold text-gray-800">{user?.username || "User"}</span>
            <button
              onClick={handleLogout}
              className="ml-2 text-xs font-semibold text-slate-500 hover:text-red-600 transition-colors"
            >
              Sign Out
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavbarLoggedIn;
