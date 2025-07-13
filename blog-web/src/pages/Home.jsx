import React, { useEffect, useState } from "react";
import { getBlogs, saveBlogs } from "../Utils/LocalStorageHelpers";
import { blogs as dummyBlogs, users } from "../Utils/dummyData";
import Blog from "../Components/Blog";

function Home() {
  const [blogs, setBlogs] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [isSearchFocused, setIsSearchFocused] = useState(false);

  useEffect(() => {
    const storedBlogs = getBlogs();
    if (storedBlogs.length === 0) {
      saveBlogs(dummyBlogs);
      setBlogs(dummyBlogs);
    } else {
      setBlogs(storedBlogs);
    }
  }, []);

  const getAuthorName = (authorId) => {
    const author = users.find((user) => user.id === authorId);
    return author ? author.name : "Unknown";
  };

  // Filter blogs based on search term (title/content)
  const filteredBlogs = blogs.filter((blog) => {
    const search = searchTerm.toLowerCase();
    return (
      blog.title.toLowerCase().includes(search) ||
      blog.content.toLowerCase().includes(search) ||
      blog.keywords?.some((keyword) => keyword.toLowerCase().includes(search))
    );
  });

  return (
    <main className="min-h-screen bg-gradient-to-br bg-black">
      {/* Hero Section with Search */}
      <div className="relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-blue-600/10 rounded-full blur-3xl"></div>
        <div className="absolute top-20 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl"></div>
        
        <div className="relative z-10 w-full px-6 py-12">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
                Discover Stories
              </h1>
              <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto">
                Explore a world of ideas, insights, and inspiration from our community of writers
              </p>
            </div>

            {/* Enhanced Search Input */}
            <div className="relative max-w-2xl mx-auto mb-8">
              <div className={`relative transform transition-all duration-300 ${
                isSearchFocused ? 'scale-105' : 'scale-100'
              }`}>
                {/* Search Icon */}
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                
                <input
                  type="text"
                  placeholder="Search for stories, topics, or keywords..."
                  className={`w-full pl-12 pr-4 py-4 rounded-2xl bg-gray-800/50 backdrop-blur-sm text-white placeholder-gray-400 border transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500/50 hover:bg-gray-800/70 ${
                    isSearchFocused 
                      ? 'border-blue-500/50 shadow-lg shadow-blue-500/20' 
                      : 'border-gray-700 hover:border-gray-600'
                  }`}
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  onFocus={() => setIsSearchFocused(true)}
                  onBlur={() => setIsSearchFocused(false)}
                />
                
                {/* Clear button */}
                {searchTerm && (
                  <button
                    onClick={() => setSearchTerm("")}
                    className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                )}
              </div>
              
              {/* Search Results Counter */}
              {searchTerm && (
                <div className="absolute -bottom-8 left-0 text-sm text-gray-400 animate-fade-in">
                  {filteredBlogs.length} {filteredBlogs.length === 1 ? 'result' : 'results'} found
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Blog Content Section - Now with consistent background */}
      <div className="relative z-10 w-full px-6 pb-12">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl ml-30 font-semibold text-white">
              {searchTerm ? 'Search Results' : 'Latest Stories'}
            </h2>
            <div className="flex items-center space-x-2 text-sm text-gray-400">
              <span>{filteredBlogs.length} {filteredBlogs.length === 1 ? 'story' : 'stories'}</span>
              <div className="w-1 h-1 bg-gray-600 rounded-full"></div>
              <span>Updated recently</span>
            </div>
          </div>

          {/* Blog Component with enhanced container */}
          <div className="relative">
            {filteredBlogs.length === 0 && searchTerm ? (
              <div className="text-center py-16">
                <div className="w-16 h-16 mx-auto mb-4 bg-purple-900/30 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-medium text-gray-300 mb-2">No stories found</h3>
                <p className="text-gray-500">Try adjusting your search terms or explore our latest stories</p>
              </div>
            ) : (
              <div className="transition-all duration-500 ease-in-out">
                <Blog blogs={filteredBlogs} getAuthorName={getAuthorName} />
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="fixed bottom-8 right-8 z-50">
        <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white p-3 rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </button>
      </div>
    </main>
  );
}

export default Home;