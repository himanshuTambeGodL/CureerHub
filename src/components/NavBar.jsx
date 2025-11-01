import React from "react";
import { Home, Bookmark } from "lucide-react"; // lucide-react icons
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();

  return (
    <div className="fixed top-4 left-1/2 -translate-x-1/2 z-50 flex items-center justify-between w-[90%] sm:w-[70%] md:w-[50%] bg-[#0d0d0f]/90 text-white rounded-full p-3 border border-gray-700 shadow-lg backdrop-blur-md transition-all duration-300" >
      {/* Home Button */}
      <Link
        to="/"
        className={`flex items-center justify-center px-6 py-2 rounded-full transition-all duration-300 ${
          location.pathname === "/"
            ? "bg-blue-600 text-white shadow-md scale-105"
            : "hover:bg-gray-800 hover:scale-105 text-gray-300"
        }`}
      >
        <Home size={22} />
        <span className="ml-2 hidden sm:inline text-sm font-medium">Home</span>
      </Link>

      {/* App Logo / Title */}
      <div className="text-lg font-semibold tracking-wide text-blue-400">
        CareerHub
      </div>

      {/* Bookmark Button */}
      <Link
        to="/bookmarks"
        className={`flex items-center justify-center px-6 py-2 rounded-full transition-all duration-300 ${
          location.pathname === "/bookmarks"
            ? "bg-blue-600 text-white shadow-md scale-105"
            : "hover:bg-gray-800 hover:scale-105 text-gray-300"
        }`}
      >
        <Bookmark size={22} />
        <span className="ml-2 hidden sm:inline text-sm font-medium">Bookmarks</span>
      </Link>
    </div>
  );
};

export default Navbar;
