// src/utils/localStorageHelpers.js

import { blogs as dummyBlogs } from "../Utils/dummyData";

const BLOGS_KEY = "blogs";

// Initialize blogs from dummyData if localStorage is empty
const ensureInitialized = () => {
  if (!localStorage.getItem(BLOGS_KEY)) {
    localStorage.setItem(BLOGS_KEY, JSON.stringify(dummyBlogs));
  }
};

export const getBlogs = () => {
  ensureInitialized();
  return JSON.parse(localStorage.getItem(BLOGS_KEY));
};

export const saveBlogs = (blogs) => {
  localStorage.setItem(BLOGS_KEY, JSON.stringify(blogs));
};

export const addBlog = (newBlog) => {
  const blogs = getBlogs();
  blogs.push(newBlog);
  saveBlogs(blogs);
};

export const updateBlog = (updatedBlog) => {
  const blogs = getBlogs();
  const updated = blogs.map((blog) =>
    blog.id === updatedBlog.id ? updatedBlog : blog
  );
  saveBlogs(updated);
};


export const deleteBlog = (id) => {
  const blogs = getBlogs();
  const filtered = blogs.filter((blog) => blog.id !== id);
  saveBlogs(filtered);
};
