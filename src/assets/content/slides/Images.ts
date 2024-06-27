import groupPhoto1 from './images/group_photo_1.jpg';
import groupPhoto2 from './images/group_photo_2.jpg';
import groupPhoto3 from './images/group_photo_3.jpg';
import groupPhoto4 from './images/group_photo_4.jpg';
import groupPhoto5 from './images/group_photo_5.jpg';
import groupPhoto6 from './images/group_photo_6.jpg';
import groupPhoto7 from './images/group_photo_7.jpg';
// Import additional photos as needed

interface ImageCaption {
  img: string;
  caption: string;
}

export const groupPhotos: ImageCaption[] = [
  {
    img: groupPhoto1,
    caption: '10/2021'
  },
  {
    img: groupPhoto2,
    caption: '3/2023 in Claytor Lake'
  },
  {
    img: groupPhoto3,
    caption: '2023'
  },
  {
    img: groupPhoto4,
    caption: '2023'
  },
  {
    img: groupPhoto5,
    caption: '3/2024 - fun bowling photo'
  },
  {
    img: groupPhoto6,
    caption: '3/2024 - casual bowling photo'
  },
  {
    img: groupPhoto7,
    caption: '3/2024 - group bowling photo'
  },
];