import React from "react";
import { Link } from "react-router-dom";

function Blogs({ blogs, getAuthorName }) {
  return (
    <main className="ml-36 text-white bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-pink-900/20 min-h-screen">
      {/* Container that aligns with the search bar and other content */}
      <div className="max-w-6xl  px-6 py-6">
        <h1 className="text-2xl font-light text-left mb-8">All Blogs</h1>

        {blogs.length === 0 ? (
          <p className="text-gray-400 text-center">No blogs to show right now.</p>
        ) : (
          blogs.map((blog) => (
            <Link to={`/blog/${blog.id}`} key={blog.id}>
              <div className="bg-gray-900/80 backdrop-blur-sm border border-gray-700/50 rounded-lg p-6 mb-6 hover:bg-gray-800/90 hover:border-gray-600/70 hover:shadow-2xl hover:shadow-purple-500/10 transition-all duration-300 transform hover:-translate-y-1">
                <h2 className="text-xl font-semibold text-white mb-3 hover:text-purple-300 transition-colors duration-200">
                  {blog.title}
                </h2>
                
                <p className="text-sm text-gray-300 mt-2 leading-relaxed">
                  {blog.content.slice(0, 100)}...
                </p>
                
                <div className="flex flex-wrap gap-4 mt-4 text-xs">
                  <p className="text-gray-400">
                    <span className="text-purple-400">Category:</span> {blog.category}
                  </p>
                  
                  <p className="text-gray-400">
                    <span className="text-blue-400">Author:</span> {getAuthorName(blog.authorId)}
                  </p>
                  
                  <p className="text-gray-500">
                    <span className="text-gray-400">Created:</span> {new Date(blog.createdAt).toLocaleDateString()}
                  </p>
                </div>

                {blog.keywords && blog.keywords.length > 0 && (
                  <div className="mt-3">
                    <p className="text-xs text-gray-400">
                      <span className="text-pink-400">Keywords:</span>{" "}
                      <span className="inline-flex flex-wrap gap-1">
                        {blog.keywords.map((keyword, index) => (
                          <span
                            key={index}
                            className="bg-purple-900/30 text-purple-300 px-2 py-1 rounded-full text-xs border border-purple-700/30"
                          >
                            {keyword}
                          </span>
                        ))}
                      </span>
                    </p>
                  </div>
                )}
              </div>
            </Link>
          ))
        )}
      </div>
    </main>
  );
}

export default Blogs;