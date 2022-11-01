import React from "react";
import Navbar from './components/home/Navbar';
import Hero from "./components/home/Hero";
import About from "./components/home/About";
import Service from "./components/home/Service";
import ImageGrid from "./components/home/ImageGrid";
import Contact from "./components/home/Contact";
import Footer from "./components/home/Footer";
import { useEffect } from "react";
import ContactForm from "./components/pages/ContactForm";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

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
      <Navbar />
      <Hero />
      <About  />
      <Service />
      <ImageGrid />
      <Contact />
      <Router>
                <Routes>
                    <Route path="/contactForm" 
                        element={<ContactForm />} />

                </Routes>
      </Router>
      <Footer />
    </>
  );
}

export default App;
