import React from 'react';

const Hero = () => {
  return (
    <section id="hero" className="hero-section">
      <video src="/videos/homepage.mp4" autoPlay muted loop className="hero-video" />
      <div className="hero-content">
        <h2>Welcome to the Frontend Battle</h2>
        <p>Replicate. Innovate. Dominate.</p>
      </div>
    </section>
  );
};

export default Hero;