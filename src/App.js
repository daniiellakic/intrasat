import React from "react";
import Navbar from './components/Navbar';
import Footer from "./components/Footer";
import Home from "./pages/Home"
import ContactForm from "./pages/ContactForm";
import { useEffect } from "react";
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
      <Router>
       <Navbar />
       <Home />
          <Routes>
              <Route path="/" element={Home} />
              <Route path="/contactForm" element={ContactForm} />
          </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
