import React from "react";
import { FaChevronRight, FaHome, FaUser, FaEdit, FaBookmark, FaCog } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import { users, currentUserId } from "../Utils/dummyData";
import CreateBlog from "../pages/createPost";


const currentUser = users.find(user => user.id === currentUserId);

function NavBar() {
  const location = useLocation(); // 👈 Get current path

  const navigationItems = [
    { id: 'home', label: 'Home', icon: FaHome, path: '/' },
   
  ];

  return (
    <aside className="w-64 min-h-screen bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white px-6 py-8 border-r border-gray-800/50 flex flex-col justify-between fixed backdrop-blur-sm">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-blue-900/10 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-purple-900/10 to-transparent"></div>

      {/* Top - Logo & Navigation */}
      <div className="space-y-8 relative z-10">
        {/* Logo */}
        <div className="group cursor-pointer">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            BlogSpace
          </h1>
          <div className="h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 w-0 group-hover:w-full transition-all duration-300"></div>
        </div>

        {/* Navigation Items */}
        <nav className="space-y-2">
          {navigationItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;

            return (
              <Link
                key={item.id}
                to={item.path}
                className={`group flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-300 relative overflow-hidden ${
                  isActive
                    ? 'bg-gradient-to-r from-blue-600/20 to-purple-600/20 text-white border border-blue-500/30'
                    : 'text-gray-300 hover:text-white hover:bg-gray-800/50'
                }`}
              >
                {/* Active indicator */}
                {isActive && (
                  <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-blue-400 to-purple-400 rounded-r-full"></div>
                )}

                {/* Background glow */}
                <div className={`absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${isActive ? 'opacity-100' : ''}`}></div>

                <Icon className={`text-lg transition-all duration-300 relative z-10 ${isActive ? 'text-blue-400' : 'group-hover:text-blue-400'}`} />
                <span className="text-md font-medium relative z-10">{item.label}</span>

                <FaChevronRight className={`ml-auto text-sm transition-all duration-300 relative z-10 ${isActive ? 'text-blue-400 opacity-100' : 'opacity-0 group-hover:opacity-100'}`} />
              </Link>
            );
          })}
        </nav>

        <div className="h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent"></div>
      </div>

      {/* Bottom Section */}
      <div className="space-y-6 relative z-10">
        <Link
  to="/create"
  >
<div className="z-50 border-white rounded-full text-center items-center flex justify-center gap-2 hover:bg-pink-600 h-12">
  {/* Icon and label */}
  <FaEdit className="text-sm relative z-10" />
  <span className="relative z-10">Create Post</span>
</div>
  
</Link>


        <Link
          to={`/author/${currentUser.id}`}
          className="group flex items-center space-x-3 p-3 rounded-xl hover:bg-gray-800/50 transition-all duration-300 border border-transparent hover:border-gray-700/50"
        >
          <div className="relative">
            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 flex items-center justify-center font-semibold text-white">
              {currentUser.name.charAt(0).toUpperCase()}
            </div>
            <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-gray-900"></div>
          </div>

          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-white truncate">
              {currentUser.name}
            </p>
            <p className="text-xs text-gray-500">View Profile</p>
          </div>

          <FaChevronRight className="text-xs text-gray-600 group-hover:text-gray-400 group-hover:translate-x-1 transition-all duration-300" />
        </Link>

        <div className="text-center">
          <p className="text-xs text-gray-600">© 2025 BlogSpace</p>
        </div>
      </div>
    </aside>
  );
}

export default NavBar;
