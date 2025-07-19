import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../src/pages/Home";
import BlogDetail from "../src/pages/BlogDetail";
import NavBar from "../src/Components/Navbar"; // ✅ Import your sidebar
import CreateBlog from "./pages/createPost";
import AuthorProfile from "./pages/AuthorProfile";
import { BrowserRouter } from 'react-router-dom';




function App() {
  return (
    <BrowserRouter basename="/blogwebsite">
      <div className="flex min-h-screen  text-white">
        <NavBar />
        <div className="flex-1">
          <Routes>
            <Route path="/author/:id" element={<AuthorProfile />} />
            <Route path="/create" element={<CreateBlog />} />
            <Route path="/" element={<Home />} />
            <Route path="/blog/:id" element={<BlogDetail />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}




export default App;
