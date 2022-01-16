import React from 'react';
import { IImage } from '../../types';
import { Item } from './imageItem.style';

interface ImageItemProps {
  image: IImage;
  showModal: (image: IImage) => void
}

export const ImageItem = ({ image, showModal }:ImageItemProps) => (
  <Item onClick={() => showModal(image)}>
    <img
      width="390px"
      height="260px"
      src={image.urls.small}
      alt={image.description || `photo by ${image.user.name}`}
    />
  </Item>
);
