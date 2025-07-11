// src/utils/localStorageHelpers.js

const BLOGS_KEY = "blogs";

// Fetch blogs from localStorage
export const getBlogs = () => {
  const storedBlogs = localStorage.getItem(BLOGS_KEY);
  return storedBlogs ? JSON.parse(storedBlogs) : [];
};

// Save entire blogs array to localStorage
export const saveBlogs = (blogs) => {
  localStorage.setItem(BLOGS_KEY, JSON.stringify(blogs));
};

// Add a new blog
export const addBlog = (newBlog) => {
  const blogs = getBlogs();
  blogs.push(newBlog);
  saveBlogs(blogs);
};

// Update an existing blog by id
export const updateBlog = (updatedBlog) => {
  const blogs = getBlogs();
  const updated = blogs.map((blog) =>
    blog.id === updatedBlog.id ? updatedBlog : blog
  );
  saveBlogs(updated);
};

// Delete a blog by id
export const deleteBlog = (id) => {
  const blogs = getBlogs();
  const filtered = blogs.filter((blog) => blog.id !== id);
  saveBlogs(filtered);
};
