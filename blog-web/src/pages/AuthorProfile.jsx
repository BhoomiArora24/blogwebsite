import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { users } from "../Utils/dummyData";
import { getBlogs } from "../Utils/LocalStorageHelpers";

function AuthorProfile() {
  const { id } = useParams(); // authorId from URL
  const [authorBlogs, setAuthorBlogs] = useState([]);

  const author = users.find((user) => user.id === id);

  useEffect(() => {
    const allBlogs = getBlogs();
    const filtered = allBlogs.filter((blog) => blog.authorId === id);
    setAuthorBlogs(filtered);
  }, [id]);

  if (!author) {
    return <div className="p-6">Author not found.</div>;
  }

  return (
    <div className="p-6 ml-68">
      {/* Author Info */}
      <div className="mb-8">
        <h1 className="text-2xl font-semibold">{author.name}</h1>
        <p className="text-gray-400 mt-1">{author.bio}</p>
      </div>

      {/* Author's Blogs */}
      <div>
        <h2 className="text-xl font-medium mb-4">Posts by {author.name}:</h2>
        {authorBlogs.length === 0 ? (
          <p className="text-gray-500">No blogs yet.</p>
        ) : (
          authorBlogs.map((blog) => (
            <Link to={`/blog/${blog.id}`} key={blog.id}>
              <div className="bg-gray-900 border border-gray-700 rounded-lg p-4 mb-4 hover:shadow-md transition">
                <h3 className="text-lg font-semibold">{blog.title}</h3>
                <p className="text-sm text-gray-400 mt-1">
                  {blog.content.slice(0, 100)}...
                </p>
              </div>
            </Link>
          ))
        )}
      </div>
    </div>
  );
}

export default AuthorProfile;
