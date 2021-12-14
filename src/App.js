
import ReactDOM from "react-dom";
import { HashRouter, Routes, Route } from "react-router-dom";
// import { Outlet, Link } from "react-router-dom";
import Layout from "./pages/layout";
import Home from "./pages/home";
import Blogs from "./pages/blogs";
import Contact from "./pages/contact";
import NoPage from "./pages/nopage";
import Footer from "./template/footer";


export default function App() {
  return (
    <>
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
        </Route>
        <Route path="*" element={<NoPage />} />
      </Routes>
    </HashRouter>
    
    <Footer />
    </>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));

