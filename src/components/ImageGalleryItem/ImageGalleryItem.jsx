import React from 'react';

export const ImageGalleryItem = ({ src, onClick }) => (
  <li className="ImageGalleryItem">
    <img className='ImageGalleryItem-image' src={src} alt="" onClick={onClick} />
  </li>
);