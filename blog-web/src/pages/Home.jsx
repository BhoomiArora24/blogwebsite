import React, { useEffect, useState } from "react";
import { getBlogs, saveBlogs } from "../Utils/LocalStorageHelpers";
import { blogs as dummyBlogs, users } from "../Utils/dummyData";
import Blog from "../Components/Blog";

function Home() {
  const [blogs, setBlogs] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

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
    <main className="w-full md:w-2/3 ml-80 px-4 py-8 mx-auto text-white">
      

      {/* Search Input */}
      <input
        type="text"
        placeholder="Searching for..."
        className="w-full mb-6 px-4 py-2 rounded bg-gray-800 text-white border border-gray-600"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      {/* Pass filtered blogs to the Blogs component */}
      <Blog blogs={filteredBlogs} getAuthorName={getAuthorName} />
    </main>
  );
}

export default Home;
