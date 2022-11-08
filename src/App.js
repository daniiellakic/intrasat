import React from "react";
import Navbar from './components/Navbar';
import Footer from "./components/Footer";
import Home from "./pages/Home"
import ContactForm from "./pages/ContactForm";
import Construction from "./pages/Counstruction"
import Transport from "./pages/Transport"
import Managment from "./pages/Managment"
import About from "./components/About"
import { useEffect } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Service from "./components/Service";
import ImageGrid from "./components/ImageGrid";
import Contact from "./components/Contact";

function App() {
  useEffect(() => {
    if (document) {
      const stylesheet = document.createElement("link");
      stylesheet.rel = "stylesheet";
      stylesheet.href =
        "https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css";

      document.head.appendChild(stylesheet);
    }
  }, []);  
  return (
    <>
     <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="home" element={<Home />} />
        <Route path="contactForm" element={<ContactForm />} />
        <Route path="about" element={<About />} />
        <Route path="service" element={<Service />} />
        <Route path="imageGrid" element={<ImageGrid />} />
        <Route path="contactFor" element={<ContactForm />} />
        <Route path="transport" element={<Transport />} />
        <Route path="construction" element={<Construction />} />
        <Route path="managment" element={<Managment />} />
      </Routes>
      <Footer />
    </BrowserRouter>
    </>
  );
}

export default App;
