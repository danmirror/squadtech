
import ReactDOM from "react-dom";
import { HashRouter, Routes, Route } from "react-router-dom";
// import { Outlet, Link } from "react-router-dom";
import Layout from "./pages/layout";
import Home from "./pages/home";
import About from "./pages/about";
import Contact from "./pages/contact";
import NoPage from "./pages/nopage";
import Footer from "./template/footer";
import Iot from "./pages/product/iot";
import Website from "./pages/product/website";
import Autoindustry from "./pages/product/autoindustry";


export default function App() {
  return (
    <>
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="products/iot" element={<Iot />} />
          <Route path="products/website" element={<Website />} />
          <Route path="products/autoindustry" element={<Autoindustry />} />
        </Route>
        <Route path="*" element={<NoPage />} />
      </Routes>
    </HashRouter>
    
    <Footer />
    </>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));

