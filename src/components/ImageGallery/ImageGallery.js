import React from 'react';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import css from '../ImageGallery/ImageGallery.module.css';
export function ImageGallery({ images }) {
  return (
    <ul className={css.ImageGallery}>
      {images &&
        images.map(image => {
          return (
            <ImageGalleryItem
              key={image.id}
              smallImg={image.webformatURL}
              description={image.tags}
              bigImg={image.largeImageURL}
            />
          );
        })}
    </ul>
  );
}
