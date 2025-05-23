import React from 'react';
import './HighLight.css';

function HackathonCard() {
  return (
    <div className="hackathon-card">
      <div className="background-container">
        <div className="background-image"></div>
        <div className="overlay">
          <div className="top-info">
            <span className="badge">Coding Club</span>
            <span className="date">
              <span className="calendar-icon">📅</span> in 23 days
            </span>
          </div>
          <h2>Annual Hackathon 2025</h2>
          <p>
            Join us for a 48-hour coding marathon where teams compete to build
            the most innovative projects. Open to all skill levels with
            mentorship available.
          </p>
          <div className="buttons">
            <button className="btn-primary">Learn More</button>
            <button className="btn-secondary">Register</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HackathonCard;
