import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Programs from '../components/Programs';
import TrainersSection from '../components/TrainersSection';
import MembershipSection from '../components/MembershipSection';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';
import './Home.css';

const Home = () => {
  return (
    <main>
      <Hero />
      <About />
      <Programs />
      <TrainersSection />
      <MembershipSection />
      <Testimonials />
      <Contact />
    </main>
  );
};

export default Home;