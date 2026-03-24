import React, { useEffect, useState } from 'react';
import './About.css';

const About = () => {
  const [counts, setCounts] = useState({
    members: 0,
    trainers: 0,
    years: 0
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setCounts({
        members: 500,
        trainers: 15,
        years: 10
      });
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="about-section">
      <div className="container">
        <h2 className="section-title">ABOUT US</h2>
        <p className="section-subtitle">Iron Pulse Gym is where strength meets dedication</p>
        
        <div className="about-content">
          <div className="about-text">
            <h3>Our Mission</h3>
            <p>To provide a world-class fitness experience that transforms lives through expert guidance, state-of-the-art equipment, and a supportive community.</p>
            
            <h3>Why Choose Us</h3>
            <ul>
              <li>✓ Certified personal trainers</li>
              <li>✓ Modern equipment</li>
              <li>✓ Flexible membership plans</li>
              <li>✓ Clean and safe environment</li>
            </ul>
          </div>
          
          <div className="about-stats">
            <div className="stat-box">
              <span className="stat-number">{counts.members}+</span>
              <span className="stat-label">Active Members</span>
            </div>
            <div className="stat-box">
              <span className="stat-number">{counts.trainers}+</span>
              <span className="stat-label">Expert Trainers</span>
            </div>
            <div className="stat-box">
              <span className="stat-number">{counts.years}+</span>
              <span className="stat-label">Years Experience</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;