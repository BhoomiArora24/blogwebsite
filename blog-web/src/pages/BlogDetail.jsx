import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { blogs, users, currentUserId } from "../Utils/dummyData";
import { FaRegHeart, FaHeart, FaRegBookmark, FaBookmark, FaEllipsisV } from "react-icons/fa";

function BlogDetail() {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [liked, setLiked] = useState(false);
  const [bookmarked, setBookmarked] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editData, setEditData] = useState({
    title: "",
    content: "",
    category: "",
    keywords: "",
  });

  useEffect(() => {
    const foundBlog = blogs.find((b) => b.id === id);
    setBlog(foundBlog);

    if (foundBlog) {
      const storedLikes = JSON.parse(localStorage.getItem("likes")) || {};
      const storedBookmarks = JSON.parse(localStorage.getItem("bookmarks")) || {};

      const isLiked = storedLikes[id]?.includes(currentUserId) || foundBlog.likes.includes(currentUserId);
      const isBookmarked = storedBookmarks[id]?.includes(currentUserId) || foundBlog.bookmarks.includes(currentUserId);

      setLiked(isLiked);
      setBookmarked(isBookmarked);
    }
  }, [id]);

  const toggleLike = () => {
    const storedLikes = JSON.parse(localStorage.getItem("likes")) || {};
    const currentLikes = storedLikes[id] || [];

    const updatedLikes = liked
      ? currentLikes.filter((uid) => uid !== currentUserId)
      : [...currentLikes, currentUserId];

    storedLikes[id] = updatedLikes;
    localStorage.setItem("likes", JSON.stringify(storedLikes));
    setLiked(!liked);
  };

  const toggleBookmark = () => {
    const storedBookmarks = JSON.parse(localStorage.getItem("bookmarks")) || {};
    const currentBookmarks = storedBookmarks[id] || [];

    const updatedBookmarks = bookmarked
      ? currentBookmarks.filter((uid) => uid !== currentUserId)
      : [...currentBookmarks, currentUserId];

    storedBookmarks[id] = updatedBookmarks;
    localStorage.setItem("bookmarks", JSON.stringify(storedBookmarks));
    setBookmarked(!bookmarked);
  };

  const getAuthorName = (authorId) => {
    const author = users.find((user) => user.id === authorId);
    return author ? author.name : "Unknown";
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSave = () => {
    // Update the blog in your data structure
    const updatedBlog = {
      ...blog,
      title: editData.title,
      content: editData.content,
      category: editData.category,
      keywords: editData.keywords.split(',').map(k => k.trim()).filter(k => k),
    };

    // Update the blog state
    setBlog(updatedBlog);
    
    // Here you would typically save to your backend/database
    // For now, you could update localStorage or your dummy data
    const blogIndex = blogs.findIndex(b => b.id === id);
    if (blogIndex !== -1) {
      blogs[blogIndex] = updatedBlog;
    }

    setIsEditing(false);
  };

  const handleCancel = () => {
    setIsEditing(false);
    setEditData({
      title: blog.title,
      content: blog.content,
      category: blog.category,
      keywords: blog.keywords.join(", "),
    });
  };

  if (!blog) {
    return <p className="text-white text-center mt-10">Blog not found!</p>;
  }

  return (
    <main className="max-w-4xl mx-auto px-4 py-10 text-white">
      {!isEditing ? (
        // Display Mode
        <>
          <h1 className="text-3xl font-semibold mb-4">{blog.title}</h1>
          <p className="text-sm text-gray-500 mb-2">
            By {getAuthorName(blog.authorId)} on{" "}
            {new Date(blog.createdAt).toLocaleDateString()}
          </p>

          {/* Blog content box */}
          <div className="border border-gray-500 p-6 rounded-2xl mt-6 relative">
            {/* 3 Dots Button */}
            <div className="absolute top-3 right-3">
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="text-gray-400 hover:text-white focus:outline-none"
              >
                <FaEllipsisV />
              </button>

              {/* Dropdown Menu */}
              {menuOpen && (
                <div className="absolute right-0 mt-2 w-24 bg-gray-800 border border-gray-600 rounded shadow-lg z-10">
                  <button
                    onClick={() => {
                      setMenuOpen(false);
                      setEditData({
                        title: blog.title,
                        content: blog.content,
                        category: blog.category,
                        keywords: blog.keywords.join(", "),
                      });
                      setIsEditing(true);
                    }}
                    className="block w-full text-left px-4 py-2 text-sm text-white hover:bg-gray-700"
                  >
                    Edit
                  </button>
                </div>
              )}
            </div>

            {/* Blog Content */}
            <p className="text-lg leading-relaxed whitespace-pre-line">
              {blog.content}
            </p>
          </div>

          {/* Category + icons in one line */}
          <div className="flex items-center justify-between mt-2 text-sm text-gray-400 px-1">
            <div>
              Category: <span className="text-white">{blog.category}</span>
            </div>

            <div className="flex gap-8 text-xl">
              {/* Like icon + count */}
              <div className="flex flex-col items-center">
                <span
                  onClick={toggleLike}
                  className={`cursor-pointer ${liked ? "text-red-500" : "text-gray-400"}`}
                  title="Like"
                >
                  {liked ? <FaHeart /> : <FaRegHeart />}
                </span>
                <span className="text-xs mt-1 text-gray-400">
                  {JSON.parse(localStorage.getItem("likes"))?.[blog.id]?.length ?? blog.likes.length}
                </span>
              </div>

              {/* Bookmark icon + count */}
              <div className="flex flex-col items-center">
                <span
                  onClick={toggleBookmark}
                  className={`cursor-pointer ${bookmarked ? "text-yellow-400" : "text-gray-400"}`}
                  title="Bookmark"
                >
                  {bookmarked ? <FaBookmark /> : <FaRegBookmark />}
                </span>
                <span className="text-xs mt-1 text-gray-400">
                  {JSON.parse(localStorage.getItem("bookmarks"))?.[blog.id]?.length ?? blog.bookmarks.length}
                </span>
              </div>
            </div>
          </div>
        </>
      ) : (
        // Edit Mode
        <div className="space-y-6">
          <h1 className="text-3xl font-semibold mb-4">Edit Blog</h1>
          
          {/* Title Field */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Title
            </label>
            <input
              type="text"
              name="title"
              value={editData.title}
              onChange={handleInputChange}
              className="w-full p-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Enter blog title..."
            />
          </div>

          {/* Content Field */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Content
            </label>
            <textarea
              name="content"
              value={editData.content}
              onChange={handleInputChange}
              rows="12"
              className="w-full p-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-vertical"
              placeholder="Write your blog content here..."
            />
          </div>

          {/* Category Field */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Category
            </label>
            <input
              type="text"
              name="category"
              value={editData.category}
              onChange={handleInputChange}
              className="w-full p-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Enter category..."
            />
          </div>

          {/* Keywords Field */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Keywords
            </label>
            <input
              type="text"
              name="keywords"
              value={editData.keywords}
              onChange={handleInputChange}
              className="w-full p-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Enter keywords separated by commas..."
            />
            <p className="text-xs text-gray-500 mt-1">
              Separate keywords with commas (e.g., technology, web development, react)
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4">
            <button
              onClick={handleSave}
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
            >
              Save Changes
            </button>
            <button
              onClick={handleCancel}
              className="px-6 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 transition-colors"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </main>
  );
}

export default BlogDetail;