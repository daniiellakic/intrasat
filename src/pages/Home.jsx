import React from 'react'
import Hero from '../components/Hero';
import About from '../components/About';
import Service from '../components/Service';
import ImageGrid from '../components/ImageGrid';
import Contact from '../components/Contact';

const Home = () => {
  return (
    <>
        <Hero />
        <About  />
        <Service />
        <ImageGrid />
        <Contact />
    </>
  )
}

export default Home;