import React, { useState } from 'react';

const galleryItems = [
  '/images/cards.png',
  '/images/graph.png',
  '/images/stats.png',
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section id="gallery" className="gallery-section">
      <h2>Gallery</h2>
      <div className="gallery-grid">
        {galleryItems.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Gallery item ${index + 1}`}
            onClick={() => setSelectedImage(src)}
            className="gallery-thumb"
          />
        ))}
      </div>

      {/* Fullscreen Overlay */}
      {selectedImage && (
        <div className="lightbox" onClick={() => setSelectedImage(null)}>
          <img src={selectedImage} alt="Full view" />
        </div>
      )}
    </section>
  );
};

export default Gallery;
