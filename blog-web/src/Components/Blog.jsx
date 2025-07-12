import React from "react";
import { Link } from "react-router-dom";

function Blogs({ blogs, getAuthorName }) {
  return (
    <main className="w-full mx-auto text-white">
      <div className="border-l border-gray-600 pl-6">
        <h1 className="text-2xl font-light text-center mb-8">All Blogs</h1>

        {blogs.length === 0 ? (
          <p className="text-gray-400 text-center">No blogs to show right now.</p>
        ) : (
          blogs.map((blog) => (
            <Link to={`/blog/${blog.id}`} key={blog.id}>
              <div className="bg-gray-900 border border-gray-700 rounded-lg p-5 mb-6 hover:shadow-lg transition">
                <h2 className="text-xl font-semibold">{blog.title}</h2>
                <p className="text-sm text-gray-300 mt-2">
                  {blog.content.slice(0, 100)}...
                </p>
                <p className="text-xs text-gray-500 mt-1">
                  Category: {blog.category}
                </p>
                <p className="text-xs text-gray-500 mt-1">
                  Author: {getAuthorName(blog.authorId)}
                </p>
                <p className="text-xs text-gray-600 mt-1">
                  Created on: {new Date(blog.createdAt).toLocaleDateString()}
                </p>

                {blog.keywords && blog.keywords.length > 0 && (
                  <p className="text-xs text-gray-400 mt-1">
                    Keywords: {blog.keywords.join(", ")}
                  </p>
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
