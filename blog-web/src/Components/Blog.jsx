// src/pages/Blog.jsx
import React, { useEffect, useState } from "react";
import { blogs as dummyBlogs, users } from "../Utils/dummyData";

function Blog() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    // Simulate fetching blogs from dummy data
    setBlogs(dummyBlogs);
  }, []);

  const getAuthorName = (authorId) => {
    const author = users.find((user) => user.id === authorId);
    return author ? author.name : "Unknown";
  };

  return (
    <main className="w-full md:w-2/3 lg:w-1/2 px-4 py-8 mx-auto text-white">
      <div className="border-l border-r border-white pl-6 pr-6">
        <h1 className="text-2xl font-light text-center mb-8">All Blogs</h1>

        {blogs.length === 0 ? (
          <p className="text-gray-400 text-center">No blogs to show right now.</p>
        ) : (
          blogs.map((blog) => (
            <div
              key={blog.id}
              className="bg-gray-900 border border-gray-700 rounded-lg p-5 mb-6"
            >
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
            </div>
          ))
        )}
      </div>
    </main>
  );
}

export default Blog;
