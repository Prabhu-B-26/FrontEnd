import React from 'react';

const features = [
  { img: '/images/cards.png', title: 'Interactive Cards' },
  { img: '/images/graph.png', title: 'Real-time Graphs' },
  { img: '/images/stats.png', title: 'Statistical Insights' },
  { img: '/images/cards.png', title: 'Custom Components' },
  { img: '/images/graph.png', title: 'Data Visuals' },
  { img: '/images/stats.png', title: 'Performance Metrics' },
];

const Features = () => {
  return (
    <section id="features" className="features-section">
      <h2>Features</h2>
      <div className="features-grid">
        {features.map((feat, index) => (
          <div key={index} className="feature-card">
            <img src={feat.img} alt={feat.title} />
            <h3>{feat.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;