import React from 'react';
import './Testimonials.css';

const testimonials = [
  {
    name: 'RAHUL K.',
    text: 'Best gym in town! The trainers are incredibly knowledgeable and the equipment is top-notch. Lost 15kg in 3 months!',
    rating: 5
  },
  {
    name: 'PRIYA S.',
    text: 'The community here is amazing. Everyone supports each other and the atmosphere is always positive.',
    rating: 5
  },
  {
    name: 'AMIT M.',
    text: 'Personal training sessions are worth every rupee. My strength has improved dramatically.',
    rating: 5
  }
];

const Testimonials = () => {
  return (
    <section className="testimonials-section">
      <div className="container">
        <h2 className="section-title">WHAT OUR MEMBERS SAY</h2>
        <p className="section-subtitle">Real results from real people</p>
        
        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              <div className="quote">"</div>
              <p className="testimonial-text">{testimonial.text}</p>
              <div className="rating">
                {'★'.repeat(testimonial.rating)}
                {'☆'.repeat(5 - testimonial.rating)}
              </div>
              <h4>- {testimonial.name}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;