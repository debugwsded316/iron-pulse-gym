import React from 'react';
import { Link } from 'react-router-dom';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-overlay"></div>
      <div className="hero-content container">
        <h1 className="hero-title">
          TRANSFORM YOUR BODY.
          <span className="hero-title-accent">TRANSFORM YOUR LIFE.</span>
        </h1>
        
        <p className="hero-subtitle">
          Join Iron Pulse Gym today and start your journey to a stronger, healthier you.
          Expert trainers, modern equipment, and a community that pushes you forward.
        </p>
        
        <div className="hero-buttons">
          <Link to="/membership" className="btn btn-primary">JOIN NOW</Link>
          <Link to="/booking" className="btn btn-outline">FREE CONSULTATION</Link>
        </div>
      </div>

      <div className="hero-stats">
        <div className="stat-item">
          <span className="stat-number">500+</span>
          <span className="stat-label">ACTIVE MEMBERS</span>
        </div>
        <div className="stat-item">
          <span className="stat-number">15+</span>
          <span className="stat-label">EXPERT TRAINERS</span>
        </div>
        <div className="stat-item">
          <span className="stat-number">10+</span>
          <span className="stat-label">YEARS</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;