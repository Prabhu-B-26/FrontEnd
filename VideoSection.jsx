const videos = [
  'parallax animation.mp4',
  'ripple effect.mp4',
  'showcase wor.mp4',
  'customer-section.mp4',
  'features-service.mp4',
  'caraousel switch.mp4',
  'scroll and pop up.mp4',
  'strikimg - any simple object can be used.mp4',
  'testimonials.mp4',
];

const VideoSection = () => {
  return (
    <section id="video" className="video-section">
      <h2>Feature Videos</h2>
      <div className="video-grid">
        {videos.map((video, index) => (
          <video key={index} controls width="100%">
            <source src={`/videos/${video}`} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        ))}
      </div>
    </section>
  );
};

export default VideoSection;