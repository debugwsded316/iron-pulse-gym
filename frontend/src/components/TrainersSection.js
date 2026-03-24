import React from 'react';
import './TrainersSection.css';

const trainers = [
  {
    name: 'JOHN SMITH',
    specialization: 'Strength Training',
    image: 'https://images.unsplash.com/photo-1567013127542-490d757e51fc?auto=format&fit=crop&w=400&q=80'
  },
  {
    name: 'SARAH JOHNSON',
    specialization: 'Weight Loss',
    image: 'https://images.unsplash.com/photo-1571019613914-85f342c6a11e?auto=format&fit=crop&w=400&q=80'
  },
  {
    name: 'MIKE WILLIAMS',
    specialization: 'CrossFit',
    image: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=400&q=80'
  },
  {
    name: 'LISA BROWN',
    specialization: 'Yoga & Flexibility',
    image: 'https://images.unsplash.com/photo-1594381898411-846e7d193883?auto=format&fit=crop&w=400&q=80'
  }
];

const TrainersSection = () => {
  return (
    <section className="trainers-section">
      <div className="container">
        <h2 className="section-title">EXPERT TRAINERS</h2>
        <p className="section-subtitle">Learn from the best in the industry</p>
        
        <div className="trainers-grid">
          {trainers.map((trainer, index) => (
            <div key={index} className="trainer-card">
              <div className="trainer-image">
                <img src={trainer.image} alt={trainer.name} />
              </div>
              <h3>{trainer.name}</h3>
              <p>{trainer.specialization}</p>
              <div className="trainer-social">
                <a href="#"><i className="fab fa-facebook"></i></a>
                <a href="#"><i className="fab fa-twitter"></i></a>
                <a href="#"><i className="fab fa-instagram"></i></a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrainersSection;