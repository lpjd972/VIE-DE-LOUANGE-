
import React from 'react';
import VinylHero from '@/components/VinylHero';
import About from './About';
import Journey from './Journey';
import Inspirations from './Inspirations';
import Message from './Message';
import Bonus from './Bonus';
import Contact from './Contact';

const Index = () => {
  return (
    <div className="bg-vintage-teal text-vintage-cream overflow-x-hidden">
      {/* Hero section */}
      <section id="home">
        <VinylHero />
      </section>
      
      {/* Individual sections */}
      <section id="about">
        <About />
      </section>
      
      <section id="journey">
        <Journey />
      </section>
      
      <section id="inspirations">
        <Inspirations />
      </section>
      
      <section id="message">
        <Message />
      </section>
      
      <section id="bonus">
        <Bonus />
      </section>
      
      <section id="contact">
        <Contact />
      </section>
      
      {/* Footer */}
      <footer className="py-6 text-center text-vintage-cream/50 text-sm">
        <p>© {new Date().getFullYear()} ÉDOUARD'S - Portfolio Musical</p>
      </footer>
    </div>
  );
};

export default Index;
