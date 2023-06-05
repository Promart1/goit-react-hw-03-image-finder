import React from 'react';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';

export function ImageGallery({ images }) {
  return (
    <ul>
      {images &&
        images.map(image => {
          return (
            <ImageGalleryItem
              key={image.id}
              smallUrl={image.webformatURL}
              description={image.tags}
              bigUrl={image.largeImageURL}
            />
          );
        })}
    </ul>
  );
}
