// src/pages/LandingPage.jsx
import React from 'react';
import './LandingPage.css'; // Import the CSS file for styling

const LandingPage = () => {
  return (
    <main className="landing-page">
      <h1 aria-label="Detect, Diagnose, Defend—Your Bite Expert">
        Detect, Diagnose, Defend — Your Bite  
        <span className="gradient-text"> Expert</span>
      </h1>
      <p>Upload an image of your bite, and we'll analyze it to 
        accurately identify the source.</p>
    </main>
  );
};

export default LandingPage;