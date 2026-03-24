import React from 'react';
import { Link } from 'react-router-dom';
import './MembershipSection.css';

const plans = [
  {
    name: 'BASIC',
    price: '2999',
    features: ['Access to gym floor', 'Locker room access', 'One free consultation', 'Basic workout plan'],
    popular: false
  },
  {
    name: 'STANDARD',
    price: '4999',
    features: ['Everything in Basic', 'Group classes', 'Nutrition guide', 'Monthly assessment'],
    popular: true
  },
  {
    name: 'PREMIUM',
    price: '7999',
    features: ['Everything in Standard', 'Personal training', 'Unlimited classes', 'Diet plan'],
    popular: false
  }
];

const MembershipSection = () => {
  return (
    <section className="membership-section">
      <div className="container">
        <h2 className="section-title">MEMBERSHIP PLANS</h2>
        <p className="section-subtitle">Choose the plan that fits your goals</p>
        
        <div className="plans-grid">
          {plans.map((plan, index) => (
            <div key={index} className={`plan-card ${plan.popular ? 'popular' : ''}`}>
              {plan.popular && <span className="popular-badge">MOST POPULAR</span>}
              <h3>{plan.name}</h3>
              <div className="price">
                <span className="currency">₹</span>
                <span className="amount">{plan.price}</span>
                <span className="period">/month</span>
              </div>
              <ul className="features">
                {plan.features.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>
              <Link to="/booking" className="btn btn-primary">JOIN NOW</Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MembershipSection;