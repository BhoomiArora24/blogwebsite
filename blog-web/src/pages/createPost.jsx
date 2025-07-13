import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { currentUserId } from "../Utils/dummyData";
import { getBlogs, saveBlogs } from "../Utils/LocalStorageHelpers";

function CreateBlog() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("");
  const [keywords, setKeywords] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const newBlog = {
      id: `blog${Date.now()}`,
      title,
      content,
      category,
      authorId: currentUserId,
      createdAt: new Date().toISOString(),
      likes: [],
      bookmarks: [],
      keywords: keywords.split(",").map((kw) => kw.trim()),
    };

    const oldBlogs = getBlogs();
    saveBlogs([newBlog, ...oldBlogs]);

    navigate("/"); // go back to blogs
  };

  return (
    <div className="ml-120 p-10 text-white w-full">
      <h1 className="text-2xl mb-6">Create a New Blog</h1>
      <form onSubmit={handleSubmit} className="space-y-4 max-w-xl">
        <input
          type="text"
          placeholder="Blog Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full px-4 py-2 rounded bg-gray-800 border border-gray-600 focus:outline-none"
          required
        />
        <textarea
          placeholder="Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="w-full px-4 py-2 rounded bg-gray-800 border border-gray-600 h-40 focus:outline-none"
          required
        />
        <input
          type="text"
          placeholder="Category (e.g. React, CSS)"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="w-full px-4 py-2 rounded bg-gray-800 border border-gray-600 focus:outline-none"
          required
        />
        <input
          type="text"
          placeholder="Keywords (comma-separated)"
          value={keywords}
          onChange={(e) => setKeywords(e.target.value)}
          className="w-full px-4 py-2 rounded bg-gray-800 border border-gray-600 focus:outline-none"
        />
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 px-6 py-2 rounded text-white font-semibold"
        >
          Publish
        </button>
      </form>
    </div>
  );
}

export default CreateBlog;
