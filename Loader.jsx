import React from 'react';

const Loader = () => {
  return (
    <div className="loader">
      <video src="/videos/loader.mp4" autoPlay loop muted className="loader-video" />
      <p>Loading...</p>
    </div>
  );
};

export default Loader;

