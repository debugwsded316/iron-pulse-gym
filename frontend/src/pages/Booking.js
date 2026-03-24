import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import './Booking.css';

const timeSlots = [
  '09:00-10:00', '10:00-11:00', '11:00-12:00',
  '14:00-15:00', '15:00-16:00', '16:00-17:00', '17:00-18:00'
];

const Booking = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(null);

  const onSubmit = async (data) => {
    setLoading(true);
    setMessage(null);
    
    try {
      // For now, just simulate success
      await new Promise(resolve => setTimeout(resolve, 1000));
      setMessage({ type: 'success', text: 'Booking confirmed! Check your email for details.' });
      reset();
    } catch (error) {
      setMessage({ 
        type: 'error', 
        text: 'Booking failed. Please try again.' 
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="booking-section">
      <div className="container">
        <div className="booking-header">
          <h1 className="section-title">BOOK FREE CONSULTATION</h1>
          <p className="section-subtitle">
            Take the first step towards your fitness goals. Book a free consultation with our expert trainers.
          </p>
        </div>

        <div className="booking-grid">
          <div className="booking-info">
            <div className="info-card">
              <h3>What to Expect</h3>
              <ul>
                <li>✓ Fitness assessment</li>
                <li>✓ Goal discussion</li>
                <li>✓ Gym tour</li>
                <li>✓ Personalized plan</li>
              </ul>
            </div>
            
            <div className="info-card">
              <h3>Contact Info</h3>
              <p>📍 123 Fitness Street, Gym City</p>
              <p>📞 +91 98765 43210</p>
              <p>✉️ info@ironpulse.com</p>
            </div>

            <div className="info-card">
              <h3>Hours</h3>
              <p>Mon-Fri: 6AM - 10PM</p>
              <p>Sat: 8AM - 8PM</p>
              <p>Sun: 8AM - 6PM</p>
            </div>
          </div>

          <div className="booking-form-container">
            <form onSubmit={handleSubmit(onSubmit)} className="booking-form">
              <h2>Select Date & Time</h2>
              
              <div className="form-group">
                <label>Your Name *</label>
                <input
                  type="text"
                  {...register('name', { required: 'Name is required' })}
                  className={errors.name ? 'error' : ''}
                  placeholder="Enter your full name"
                />
                {errors.name && <span className="error-message">{errors.name.message}</span>}
              </div>

              <div className="form-group">
                <label>Email *</label>
                <input
                  type="email"
                  {...register('email', { 
                    required: 'Email is required',
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: 'Invalid email address'
                    }
                  })}
                  className={errors.email ? 'error' : ''}
                  placeholder="Enter your email"
                />
                {errors.email && <span className="error-message">{errors.email.message}</span>}
              </div>

              <div className="form-group">
                <label>Phone *</label>
                <input
                  type="tel"
                  {...register('phone', { 
                    required: 'Phone number is required',
                    pattern: {
                      value: /^[0-9+\-\s()]{10,}$/,
                      message: 'Invalid phone number'
                    }
                  })}
                  className={errors.phone ? 'error' : ''}
                  placeholder="Enter your phone number"
                />
                {errors.phone && <span className="error-message">{errors.phone.message}</span>}
              </div>

              <div className="form-group">
                <label>Preferred Date *</label>
                <input
                  type="date"
                  {...register('date', { 
                    required: 'Date is required',
                    validate: value => new Date(value) > new Date() || 'Date must be in the future'
                  })}
                  min={new Date().toISOString().split('T')[0]}
                  className={errors.date ? 'error' : ''}
                />
                {errors.date && <span className="error-message">{errors.date.message}</span>}
              </div>

              <div className="form-group">
                <label>Preferred Time *</label>
                <select
                  {...register('timeSlot', { required: 'Please select a time slot' })}
                  className={errors.timeSlot ? 'error' : ''}
                >
                  <option value="">Select a time slot</option>
                  {timeSlots.map(slot => (
                    <option key={slot} value={slot}>{slot}</option>
                  ))}
                </select>
                {errors.timeSlot && <span className="error-message">{errors.timeSlot.message}</span>}
              </div>

              <div className="form-group">
                <label>Additional Notes</label>
                <textarea
                  {...register('notes')}
                  rows="4"
                  placeholder="Any specific goals or questions?"
                ></textarea>
              </div>

              {message && (
                <div className={`message ${message.type}`}>
                  {message.text}
                </div>
              )}

              <button 
                type="submit" 
                className="btn btn-primary btn-block"
                disabled={loading}
              >
                {loading ? 'BOOKING...' : 'BOOK CONSULTATION'}
              </button>

              <p className="form-note">
                By booking, you agree to our terms and conditions.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Booking;