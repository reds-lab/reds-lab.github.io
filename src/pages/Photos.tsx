import React from 'react';
import '../styles/Photos.css';

const photos = [
  { src: "/path/to/image1.jpg", alt: "Lab members at a conference" },
  { src: "/path/to/image2.jpg", alt: "Robot experiment in progress" },
  { src: "/path/to/image3.jpg", alt: "Team building event" }
];

const Photos: React.FC = () => {
  return (
    <div className="photos-page">
      <h1>Photos</h1>
      <div className="photo-grid">
        {photos.map((photo, index) => (
          <div key={index} className="photo-item">
            <img src={photo.src} alt={photo.alt} />
            <p>{photo.alt}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Photos;