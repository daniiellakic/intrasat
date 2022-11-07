import React from "react";
import Navbar from './components/Navbar';
import Footer from "./components/Footer";
import Home from "./pages/Home"
import ContactForm from "./pages/ContactForm";
import Construction from "./pages/Counstruction"
import Transport from "./pages/Transport"
import Managment from "./pages/Managment"
import { useEffect } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
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
     <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="home" element={<Home />} />
        <Route path="contactForm" element={<ContactForm />} />
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
