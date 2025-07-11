import React, { useEffect, useState } from "react";
import { getBlogs, saveBlogs } from "../Utils/LocalStorageHelpers";
import { blogs as dummyBlogs, users } from "../Utils/dummyData";
import Blogs from "../Components/Blog";


function Home() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    // Try to get blogs from localStorage first
    const storedBlogs = getBlogs();
    
    // If no blogs in localStorage, use dummy data and save it
    if (storedBlogs.length === 0) {
      // Save dummy data to localStorage
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

  return (
    <main className="w-full md:w-2/3 lg:w-1/2 px-4 py-8 mx-auto text-white">
      
        <h1 className="text-2xl border-b border-white font-light text-center mb-15">
          Searching for?
        </h1>

        <Blogs/>
    
    </main>
  );
}

export default Home;