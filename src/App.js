import React from "react";
import Navbar from './components/Navbar';
import Hero from "./components/Hero";
import About from "./components/About";
import Service from "./components/Service";
import ImageGrid from "./components/ImageGrid";
import Contact from "./components/Contact";
import Footer from "./components/Footer";


function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About  />
      <Service />
      <ImageGrid />
      <Contact />
      <Footer />

    </div>
  );
}

export default App;
