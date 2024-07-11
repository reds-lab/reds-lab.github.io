import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Photos.css';
import { groupPhotos as photos } from '../assets/content/slides/Images';

const Photos: React.FC = () => {
  return (
    <>
      <h1>Photos</h1>
      <div className="photo-grid">
        {photos.map((photo, index) => (
          <Link key={index} to={`/photo/${index}`} className="photo-item">
            <img src={photo.img} alt={photo.caption} />
          </Link>
        ))}
      </div>
    </>
  );
};

export default Photos;