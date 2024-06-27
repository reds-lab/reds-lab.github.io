import groupPhoto1 from './images/group_photo_1.jpg';
import groupPhoto2 from './images/group_photo_2.jpg';
import groupPhoto3 from './images/group_photo_3.jpg';
import groupPhoto4 from './images/group_photo_3.jpg';
// Import additional photos as needed

interface ImageCaption {
  img: string;
  caption: string;
}

export const groupPhotos: ImageCaption[] = [
  {
    img: groupPhoto1,
    caption: 'Lab outing to the beach, Summer 2023'
  },
  {
    img: groupPhoto2,
    caption: 'Conference presentation at AACR 2024'
  },
  {
    img: groupPhoto3,
    caption: 'Holiday party, December 2023'
  },
  {
    img: groupPhoto4,
    caption: 'test'
  },
];