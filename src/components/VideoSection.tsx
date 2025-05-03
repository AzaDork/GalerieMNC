import React from 'react';

const VideoSection: React.FC = () => {
  return (
    <section className="w-full bg-black">
      <div className="relative w-full aspect-video">
        <video
          className="w-full h-full object-cover min-h-[300px]"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src={`${import.meta.env.BASE_URL}GalerieMNC_Video.mp4`} type="video/mp4" />
          Votre navigateur ne supporte pas la lecture de vidéos.
        </video>
      </div>
    </section>
  );
};

export default VideoSection;