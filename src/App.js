import React from "react";
import Navbar from './components/Navbar';
import Hero from "./components/Hero";
import About from "./components/About";
import Service from "./components/Service";
import ImageGrid from "./components/ImageGrid";
import Contact from "./components/Contact";


function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About  />
      <Service />
      <ImageGrid />
      <Contact />

    </div>
  );
}

export default App;
