import React from 'react';
import { Link } from 'react-router-dom';
import './Programs.css';

const Programs = () => {
  const programs = [
    { title: 'STRENGTH TRAINING', description: 'Build muscle and increase strength', image: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=200&auto=format&fit=crop' },
    { title: 'WEIGHT LOSS', description: 'Achieve your weight loss goals', image: 'https://images.unsplash.com/photo-1552674605-e71f4b7528cb?q=80&w=200&auto=format&fit=crop' },
    { title: 'PERSONAL TRAINING', description: 'One-on-one coaching', image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=200&auto=format&fit=crop' },
    { title: 'CROSSFIT', description: 'High-intensity functional training', image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=200&auto=format&fit=crop' },
    { title: 'HIIT', description: 'Quick, intense workouts', image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=200&auto=format&fit=crop' },
    { title: 'YOGA', description: 'Improve flexibility and balance', image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=200&auto=format&fit=crop' }
  ];

  return (
    <section className="programs-section">
      <div className="container">
        <h2 className="section-title">OUR PROGRAMS</h2>
        <p className="section-subtitle">Choose from a variety of programs</p>
        <div className="programs-grid">
          {programs.map((program, index) => (
            <div key={index} className="program-card">
              <img src={program.image} alt={program.title} className="program-image" />
              <h3>{program.title}</h3>
              <p>{program.description}</p>
              <Link to="/booking" className="program-btn">LEARN MORE</Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Programs;