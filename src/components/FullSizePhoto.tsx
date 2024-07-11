// FullSizePhoto.tsx
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { groupPhotos as photos } from '../assets/content/slides/Images';
import '../styles/FullSizePhoto.css';

// Define the type for the route parameters
type PhotoParams = {
  id: string;
};

const FullSizePhoto: React.FC = () => {
  // Use the PhotoParams type with useParams
  const { id } = useParams<PhotoParams>();
  
  // Convert id to number, but handle potential NaN
  const photoIndex = Number(id);
  
  // Check if photoIndex is a valid number and within the range of the photos array
  if (isNaN(photoIndex) || photoIndex < 0 || photoIndex >= photos.length) {
    return <div>Photo not found</div>;
  }

  const photo = photos[photoIndex];

  return (
    <div className="full-size-photo">
      <Link to="/photos" className="back-button">Back to Photos</Link>
      <img src={photo.img} alt={photo.caption} />
      <p className="caption">{photo.caption}</p>
    </div>
  );
};

export default FullSizePhoto;