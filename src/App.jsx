import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import ThreeBackground from './components/ThreeBackground';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';

// Register GSAP Plugins
gsap.registerPlugin(ScrollTrigger);

function App() {
  useEffect(() => {
    // Entrance animations for sections
    const sections = document.querySelectorAll('.section');
    
    sections.forEach((section) => {
      const header = section.querySelector('.section-header');
      const content = section.querySelector('.container > *:not(.section-header)');

      if (header) {
        gsap.fromTo(header, 
          { opacity: 0, y: 30 },
          { 
            opacity: 1, 
            y: 0, 
            duration: 0.8, 
            scrollTrigger: {
              trigger: header,
              start: 'top 85%',
              toggleActions: 'play none none none'
            }
          }
        );
      }

      if (content) {
        gsap.fromTo(content, 
          { opacity: 0, y: 50 },
          { 
            opacity: 1, 
            y: 0, 
            duration: 1, 
            delay: 0.2,
            scrollTrigger: {
              trigger: content,
              start: 'top 85%',
              toggleActions: 'play none none none'
            }
          }
        );
      }
    });

    // Custom animation for skill bars is handled inside local component useEffect
  }, []);

  return (
    <div className="portfolio-app">
      <ThreeBackground />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
